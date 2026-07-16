import Team from '../js/Team.js';
import Character from '../js/Character.js';

describe('Team class', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('Лучник', 'Bowman');
    character2 = new Character('Мечник', 'Swordsman');
    character3 = new Character('Маг', 'Magician');
  });

  describe('add method', () => {
    test('should add character to team', () => {
      team.add(character1);
      expect(team.members.size).toBe(1);
      expect(team.members.has(character1)).toBe(true);
    });

    test('should throw error when adding duplicate character', () => {
      team.add(character1);
      expect(() => team.add(character1)).toThrow('Персонаж уже добавлен в команду');
    });

    test('should allow adding different characters', () => {
      team.add(character1);
      team.add(character2);
      expect(team.members.size).toBe(2);
      expect(team.members.has(character1)).toBe(true);
      expect(team.members.has(character2)).toBe(true);
    });
  });

  describe('addAll method', () => {
    test('should add multiple characters', () => {
      team.addAll(character1, character2, character3);
      expect(team.members.size).toBe(3);
      expect(team.members.has(character1)).toBe(true);
      expect(team.members.has(character2)).toBe(true);
      expect(team.members.has(character3)).toBe(true);
    });

    test('should not throw error when adding duplicates', () => {
      team.addAll(character1, character2, character1);
      expect(team.members.size).toBe(2);
      expect(team.members.has(character1)).toBe(true);
      expect(team.members.has(character2)).toBe(true);
    });

    test('should handle empty arguments', () => {
      team.addAll();
      expect(team.members.size).toBe(0);
    });
  });

  describe('toArray method', () => {
    test('should convert Set to Array', () => {
      team.addAll(character1, character2);
      const array = team.toArray();
      expect(Array.isArray(array)).toBe(true);
      expect(array).toHaveLength(2);
      expect(array).toContain(character1);
      expect(array).toContain(character2);
    });

    test('should return empty array when team is empty', () => {
      const array = team.toArray();
      expect(Array.isArray(array)).toBe(true);
      expect(array).toHaveLength(0);
    });
  });
});