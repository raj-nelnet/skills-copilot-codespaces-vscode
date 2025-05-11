function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'app/components/member/member.html',
        controller: function($scope) {
            $scope.isActive = function(member) {
                return member.active ? 'active' : '';
            };
        }
    };
} 