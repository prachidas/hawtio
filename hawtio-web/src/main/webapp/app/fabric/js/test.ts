module Fabric {

  export function TestController($scope, jolokia) {

    $scope.version = {};
    $scope.versionId = '';

    $scope.osp = [];
    $scope.vid = '1.0';
    $scope.someProfiles = ['a-mq', 'aws-ec2'];

    $scope.selectedProfiles = [{
      id: '1-dot-0',
      selected: true
    }, {
      id: 'a-mq',
      selected: true
    }];

    $scope.$watch('version', (newValue, oldValue) => {
      if (newValue !== oldValue) {
        if ($scope.version && !Object.equal($scope.version, {})) {
          $scope.versionId = $scope.version.id;
        }
      }
    });

    $scope.$watch('selectedProfiles', (newValue, oldValue) => {

    });




  }


}
