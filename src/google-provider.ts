// https://www.terraform.io/docs/providers/google/r/google_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformProvider } from 'cdktf';

// Configuration

export interface GoogleProviderConfig {
  readonly accessContextManagerCustomEndpoint?: string;
  readonly accessToken?: string;
  readonly activeDirectoryCustomEndpoint?: string;
  readonly appEngineCustomEndpoint?: string;
  readonly bigQueryCustomEndpoint?: string;
  readonly bigqueryDataTransferCustomEndpoint?: string;
  readonly bigtableCustomEndpoint?: string;
  readonly binaryAuthorizationCustomEndpoint?: string;
  readonly cloudAssetCustomEndpoint?: string;
  readonly cloudBillingCustomEndpoint?: string;
  readonly cloudBuildCustomEndpoint?: string;
  readonly cloudFunctionsCustomEndpoint?: string;
  readonly cloudIotCustomEndpoint?: string;
  readonly cloudRunCustomEndpoint?: string;
  readonly cloudSchedulerCustomEndpoint?: string;
  readonly cloudTasksCustomEndpoint?: string;
  readonly composerCustomEndpoint?: string;
  readonly computeBetaCustomEndpoint?: string;
  readonly computeCustomEndpoint?: string;
  readonly containerAnalysisCustomEndpoint?: string;
  readonly containerBetaCustomEndpoint?: string;
  readonly containerCustomEndpoint?: string;
  readonly credentials?: string;
  readonly dataCatalogCustomEndpoint?: string;
  readonly dataflowCustomEndpoint?: string;
  readonly dataprocBetaCustomEndpoint?: string;
  readonly dataprocCustomEndpoint?: string;
  readonly datastoreCustomEndpoint?: string;
  readonly deploymentManagerCustomEndpoint?: string;
  readonly dialogflowCustomEndpoint?: string;
  readonly dnsBetaCustomEndpoint?: string;
  readonly dnsCustomEndpoint?: string;
  readonly filestoreCustomEndpoint?: string;
  readonly firestoreCustomEndpoint?: string;
  readonly gameServicesCustomEndpoint?: string;
  readonly healthcareCustomEndpoint?: string;
  readonly iamCredentialsCustomEndpoint?: string;
  readonly iamCustomEndpoint?: string;
  readonly iapCustomEndpoint?: string;
  readonly identityPlatformCustomEndpoint?: string;
  readonly kmsCustomEndpoint?: string;
  readonly loggingCustomEndpoint?: string;
  readonly mlEngineCustomEndpoint?: string;
  readonly monitoringCustomEndpoint?: string;
  readonly networkManagementCustomEndpoint?: string;
  readonly osConfigCustomEndpoint?: string;
  readonly osLoginCustomEndpoint?: string;
  readonly project?: string;
  readonly pubsubCustomEndpoint?: string;
  readonly redisCustomEndpoint?: string;
  readonly region?: string;
  readonly requestTimeout?: string;
  readonly resourceManagerCustomEndpoint?: string;
  readonly resourceManagerV2Beta1CustomEndpoint?: string;
  readonly runtimeConfigCustomEndpoint?: string;
  readonly runtimeconfigCustomEndpoint?: string;
  readonly scopes?: string[];
  readonly secretManagerCustomEndpoint?: string;
  readonly securityCenterCustomEndpoint?: string;
  readonly serviceManagementCustomEndpoint?: string;
  readonly serviceNetworkingCustomEndpoint?: string;
  readonly serviceUsageCustomEndpoint?: string;
  readonly sourceRepoCustomEndpoint?: string;
  readonly spannerCustomEndpoint?: string;
  readonly sqlCustomEndpoint?: string;
  readonly storageCustomEndpoint?: string;
  readonly storageTransferCustomEndpoint?: string;
  readonly tpuCustomEndpoint?: string;
  readonly userProjectOverride?: boolean;
  readonly vpcAccessCustomEndpoint?: string;
  readonly zone?: string;
  /** Alias name */
  readonly alias?: string;
  /** batching block */
  readonly batching?: GoogleProviderBatching[];
}
export interface GoogleProviderBatching {
  readonly enableBatching?: boolean;
  readonly sendAfter?: string;
}

// Resource

export class GoogleProvider extends TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GoogleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'google'
    });
    this._accessContextManagerCustomEndpoint = config.accessContextManagerCustomEndpoint;
    this._accessToken = config.accessToken;
    this._activeDirectoryCustomEndpoint = config.activeDirectoryCustomEndpoint;
    this._appEngineCustomEndpoint = config.appEngineCustomEndpoint;
    this._bigQueryCustomEndpoint = config.bigQueryCustomEndpoint;
    this._bigqueryDataTransferCustomEndpoint = config.bigqueryDataTransferCustomEndpoint;
    this._bigtableCustomEndpoint = config.bigtableCustomEndpoint;
    this._binaryAuthorizationCustomEndpoint = config.binaryAuthorizationCustomEndpoint;
    this._cloudAssetCustomEndpoint = config.cloudAssetCustomEndpoint;
    this._cloudBillingCustomEndpoint = config.cloudBillingCustomEndpoint;
    this._cloudBuildCustomEndpoint = config.cloudBuildCustomEndpoint;
    this._cloudFunctionsCustomEndpoint = config.cloudFunctionsCustomEndpoint;
    this._cloudIotCustomEndpoint = config.cloudIotCustomEndpoint;
    this._cloudRunCustomEndpoint = config.cloudRunCustomEndpoint;
    this._cloudSchedulerCustomEndpoint = config.cloudSchedulerCustomEndpoint;
    this._cloudTasksCustomEndpoint = config.cloudTasksCustomEndpoint;
    this._composerCustomEndpoint = config.composerCustomEndpoint;
    this._computeBetaCustomEndpoint = config.computeBetaCustomEndpoint;
    this._computeCustomEndpoint = config.computeCustomEndpoint;
    this._containerAnalysisCustomEndpoint = config.containerAnalysisCustomEndpoint;
    this._containerBetaCustomEndpoint = config.containerBetaCustomEndpoint;
    this._containerCustomEndpoint = config.containerCustomEndpoint;
    this._credentials = config.credentials;
    this._dataCatalogCustomEndpoint = config.dataCatalogCustomEndpoint;
    this._dataflowCustomEndpoint = config.dataflowCustomEndpoint;
    this._dataprocBetaCustomEndpoint = config.dataprocBetaCustomEndpoint;
    this._dataprocCustomEndpoint = config.dataprocCustomEndpoint;
    this._datastoreCustomEndpoint = config.datastoreCustomEndpoint;
    this._deploymentManagerCustomEndpoint = config.deploymentManagerCustomEndpoint;
    this._dialogflowCustomEndpoint = config.dialogflowCustomEndpoint;
    this._dnsBetaCustomEndpoint = config.dnsBetaCustomEndpoint;
    this._dnsCustomEndpoint = config.dnsCustomEndpoint;
    this._filestoreCustomEndpoint = config.filestoreCustomEndpoint;
    this._firestoreCustomEndpoint = config.firestoreCustomEndpoint;
    this._gameServicesCustomEndpoint = config.gameServicesCustomEndpoint;
    this._healthcareCustomEndpoint = config.healthcareCustomEndpoint;
    this._iamCredentialsCustomEndpoint = config.iamCredentialsCustomEndpoint;
    this._iamCustomEndpoint = config.iamCustomEndpoint;
    this._iapCustomEndpoint = config.iapCustomEndpoint;
    this._identityPlatformCustomEndpoint = config.identityPlatformCustomEndpoint;
    this._kmsCustomEndpoint = config.kmsCustomEndpoint;
    this._loggingCustomEndpoint = config.loggingCustomEndpoint;
    this._mlEngineCustomEndpoint = config.mlEngineCustomEndpoint;
    this._monitoringCustomEndpoint = config.monitoringCustomEndpoint;
    this._networkManagementCustomEndpoint = config.networkManagementCustomEndpoint;
    this._osConfigCustomEndpoint = config.osConfigCustomEndpoint;
    this._osLoginCustomEndpoint = config.osLoginCustomEndpoint;
    this._project = config.project;
    this._pubsubCustomEndpoint = config.pubsubCustomEndpoint;
    this._redisCustomEndpoint = config.redisCustomEndpoint;
    this._region = config.region;
    this._requestTimeout = config.requestTimeout;
    this._resourceManagerCustomEndpoint = config.resourceManagerCustomEndpoint;
    this._resourceManagerV2Beta1CustomEndpoint = config.resourceManagerV2Beta1CustomEndpoint;
    this._runtimeConfigCustomEndpoint = config.runtimeConfigCustomEndpoint;
    this._runtimeconfigCustomEndpoint = config.runtimeconfigCustomEndpoint;
    this._scopes = config.scopes;
    this._secretManagerCustomEndpoint = config.secretManagerCustomEndpoint;
    this._securityCenterCustomEndpoint = config.securityCenterCustomEndpoint;
    this._serviceManagementCustomEndpoint = config.serviceManagementCustomEndpoint;
    this._serviceNetworkingCustomEndpoint = config.serviceNetworkingCustomEndpoint;
    this._serviceUsageCustomEndpoint = config.serviceUsageCustomEndpoint;
    this._sourceRepoCustomEndpoint = config.sourceRepoCustomEndpoint;
    this._spannerCustomEndpoint = config.spannerCustomEndpoint;
    this._sqlCustomEndpoint = config.sqlCustomEndpoint;
    this._storageCustomEndpoint = config.storageCustomEndpoint;
    this._storageTransferCustomEndpoint = config.storageTransferCustomEndpoint;
    this._tpuCustomEndpoint = config.tpuCustomEndpoint;
    this._userProjectOverride = config.userProjectOverride;
    this._vpcAccessCustomEndpoint = config.vpcAccessCustomEndpoint;
    this._zone = config.zone;
    this._alias = config.alias;
    this._batching = config.batching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_context_manager_custom_endpoint - computed: false, optional: true, required: false
  private _accessContextManagerCustomEndpoint?: string;
  public get accessContextManagerCustomEndpoint() {
    return this._accessContextManagerCustomEndpoint;
  }
  public set accessContextManagerCustomEndpoint(value: string | undefined) {
    this._accessContextManagerCustomEndpoint = value;
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string;
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }

  // active_directory_custom_endpoint - computed: false, optional: true, required: false
  private _activeDirectoryCustomEndpoint?: string;
  public get activeDirectoryCustomEndpoint() {
    return this._activeDirectoryCustomEndpoint;
  }
  public set activeDirectoryCustomEndpoint(value: string | undefined) {
    this._activeDirectoryCustomEndpoint = value;
  }

  // app_engine_custom_endpoint - computed: false, optional: true, required: false
  private _appEngineCustomEndpoint?: string;
  public get appEngineCustomEndpoint() {
    return this._appEngineCustomEndpoint;
  }
  public set appEngineCustomEndpoint(value: string | undefined) {
    this._appEngineCustomEndpoint = value;
  }

  // big_query_custom_endpoint - computed: false, optional: true, required: false
  private _bigQueryCustomEndpoint?: string;
  public get bigQueryCustomEndpoint() {
    return this._bigQueryCustomEndpoint;
  }
  public set bigQueryCustomEndpoint(value: string | undefined) {
    this._bigQueryCustomEndpoint = value;
  }

  // bigquery_data_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDataTransferCustomEndpoint?: string;
  public get bigqueryDataTransferCustomEndpoint() {
    return this._bigqueryDataTransferCustomEndpoint;
  }
  public set bigqueryDataTransferCustomEndpoint(value: string | undefined) {
    this._bigqueryDataTransferCustomEndpoint = value;
  }

  // bigtable_custom_endpoint - computed: false, optional: true, required: false
  private _bigtableCustomEndpoint?: string;
  public get bigtableCustomEndpoint() {
    return this._bigtableCustomEndpoint;
  }
  public set bigtableCustomEndpoint(value: string | undefined) {
    this._bigtableCustomEndpoint = value;
  }

  // binary_authorization_custom_endpoint - computed: false, optional: true, required: false
  private _binaryAuthorizationCustomEndpoint?: string;
  public get binaryAuthorizationCustomEndpoint() {
    return this._binaryAuthorizationCustomEndpoint;
  }
  public set binaryAuthorizationCustomEndpoint(value: string | undefined) {
    this._binaryAuthorizationCustomEndpoint = value;
  }

  // cloud_asset_custom_endpoint - computed: false, optional: true, required: false
  private _cloudAssetCustomEndpoint?: string;
  public get cloudAssetCustomEndpoint() {
    return this._cloudAssetCustomEndpoint;
  }
  public set cloudAssetCustomEndpoint(value: string | undefined) {
    this._cloudAssetCustomEndpoint = value;
  }

  // cloud_billing_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBillingCustomEndpoint?: string;
  public get cloudBillingCustomEndpoint() {
    return this._cloudBillingCustomEndpoint;
  }
  public set cloudBillingCustomEndpoint(value: string | undefined) {
    this._cloudBillingCustomEndpoint = value;
  }

  // cloud_build_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBuildCustomEndpoint?: string;
  public get cloudBuildCustomEndpoint() {
    return this._cloudBuildCustomEndpoint;
  }
  public set cloudBuildCustomEndpoint(value: string | undefined) {
    this._cloudBuildCustomEndpoint = value;
  }

  // cloud_functions_custom_endpoint - computed: false, optional: true, required: false
  private _cloudFunctionsCustomEndpoint?: string;
  public get cloudFunctionsCustomEndpoint() {
    return this._cloudFunctionsCustomEndpoint;
  }
  public set cloudFunctionsCustomEndpoint(value: string | undefined) {
    this._cloudFunctionsCustomEndpoint = value;
  }

  // cloud_iot_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIotCustomEndpoint?: string;
  public get cloudIotCustomEndpoint() {
    return this._cloudIotCustomEndpoint;
  }
  public set cloudIotCustomEndpoint(value: string | undefined) {
    this._cloudIotCustomEndpoint = value;
  }

  // cloud_run_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunCustomEndpoint?: string;
  public get cloudRunCustomEndpoint() {
    return this._cloudRunCustomEndpoint;
  }
  public set cloudRunCustomEndpoint(value: string | undefined) {
    this._cloudRunCustomEndpoint = value;
  }

  // cloud_scheduler_custom_endpoint - computed: false, optional: true, required: false
  private _cloudSchedulerCustomEndpoint?: string;
  public get cloudSchedulerCustomEndpoint() {
    return this._cloudSchedulerCustomEndpoint;
  }
  public set cloudSchedulerCustomEndpoint(value: string | undefined) {
    this._cloudSchedulerCustomEndpoint = value;
  }

  // cloud_tasks_custom_endpoint - computed: false, optional: true, required: false
  private _cloudTasksCustomEndpoint?: string;
  public get cloudTasksCustomEndpoint() {
    return this._cloudTasksCustomEndpoint;
  }
  public set cloudTasksCustomEndpoint(value: string | undefined) {
    this._cloudTasksCustomEndpoint = value;
  }

  // composer_custom_endpoint - computed: false, optional: true, required: false
  private _composerCustomEndpoint?: string;
  public get composerCustomEndpoint() {
    return this._composerCustomEndpoint;
  }
  public set composerCustomEndpoint(value: string | undefined) {
    this._composerCustomEndpoint = value;
  }

  // compute_beta_custom_endpoint - computed: false, optional: true, required: false
  private _computeBetaCustomEndpoint?: string;
  public get computeBetaCustomEndpoint() {
    return this._computeBetaCustomEndpoint;
  }
  public set computeBetaCustomEndpoint(value: string | undefined) {
    this._computeBetaCustomEndpoint = value;
  }

  // compute_custom_endpoint - computed: false, optional: true, required: false
  private _computeCustomEndpoint?: string;
  public get computeCustomEndpoint() {
    return this._computeCustomEndpoint;
  }
  public set computeCustomEndpoint(value: string | undefined) {
    this._computeCustomEndpoint = value;
  }

  // container_analysis_custom_endpoint - computed: false, optional: true, required: false
  private _containerAnalysisCustomEndpoint?: string;
  public get containerAnalysisCustomEndpoint() {
    return this._containerAnalysisCustomEndpoint;
  }
  public set containerAnalysisCustomEndpoint(value: string | undefined) {
    this._containerAnalysisCustomEndpoint = value;
  }

  // container_beta_custom_endpoint - computed: false, optional: true, required: false
  private _containerBetaCustomEndpoint?: string;
  public get containerBetaCustomEndpoint() {
    return this._containerBetaCustomEndpoint;
  }
  public set containerBetaCustomEndpoint(value: string | undefined) {
    this._containerBetaCustomEndpoint = value;
  }

  // container_custom_endpoint - computed: false, optional: true, required: false
  private _containerCustomEndpoint?: string;
  public get containerCustomEndpoint() {
    return this._containerCustomEndpoint;
  }
  public set containerCustomEndpoint(value: string | undefined) {
    this._containerCustomEndpoint = value;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }

  // data_catalog_custom_endpoint - computed: false, optional: true, required: false
  private _dataCatalogCustomEndpoint?: string;
  public get dataCatalogCustomEndpoint() {
    return this._dataCatalogCustomEndpoint;
  }
  public set dataCatalogCustomEndpoint(value: string | undefined) {
    this._dataCatalogCustomEndpoint = value;
  }

  // dataflow_custom_endpoint - computed: false, optional: true, required: false
  private _dataflowCustomEndpoint?: string;
  public get dataflowCustomEndpoint() {
    return this._dataflowCustomEndpoint;
  }
  public set dataflowCustomEndpoint(value: string | undefined) {
    this._dataflowCustomEndpoint = value;
  }

  // dataproc_beta_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocBetaCustomEndpoint?: string;
  public get dataprocBetaCustomEndpoint() {
    return this._dataprocBetaCustomEndpoint;
  }
  public set dataprocBetaCustomEndpoint(value: string | undefined) {
    this._dataprocBetaCustomEndpoint = value;
  }

  // dataproc_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocCustomEndpoint?: string;
  public get dataprocCustomEndpoint() {
    return this._dataprocCustomEndpoint;
  }
  public set dataprocCustomEndpoint(value: string | undefined) {
    this._dataprocCustomEndpoint = value;
  }

  // datastore_custom_endpoint - computed: false, optional: true, required: false
  private _datastoreCustomEndpoint?: string;
  public get datastoreCustomEndpoint() {
    return this._datastoreCustomEndpoint;
  }
  public set datastoreCustomEndpoint(value: string | undefined) {
    this._datastoreCustomEndpoint = value;
  }

  // deployment_manager_custom_endpoint - computed: false, optional: true, required: false
  private _deploymentManagerCustomEndpoint?: string;
  public get deploymentManagerCustomEndpoint() {
    return this._deploymentManagerCustomEndpoint;
  }
  public set deploymentManagerCustomEndpoint(value: string | undefined) {
    this._deploymentManagerCustomEndpoint = value;
  }

  // dialogflow_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCustomEndpoint?: string;
  public get dialogflowCustomEndpoint() {
    return this._dialogflowCustomEndpoint;
  }
  public set dialogflowCustomEndpoint(value: string | undefined) {
    this._dialogflowCustomEndpoint = value;
  }

  // dns_beta_custom_endpoint - computed: false, optional: true, required: false
  private _dnsBetaCustomEndpoint?: string;
  public get dnsBetaCustomEndpoint() {
    return this._dnsBetaCustomEndpoint;
  }
  public set dnsBetaCustomEndpoint(value: string | undefined) {
    this._dnsBetaCustomEndpoint = value;
  }

  // dns_custom_endpoint - computed: false, optional: true, required: false
  private _dnsCustomEndpoint?: string;
  public get dnsCustomEndpoint() {
    return this._dnsCustomEndpoint;
  }
  public set dnsCustomEndpoint(value: string | undefined) {
    this._dnsCustomEndpoint = value;
  }

  // filestore_custom_endpoint - computed: false, optional: true, required: false
  private _filestoreCustomEndpoint?: string;
  public get filestoreCustomEndpoint() {
    return this._filestoreCustomEndpoint;
  }
  public set filestoreCustomEndpoint(value: string | undefined) {
    this._filestoreCustomEndpoint = value;
  }

  // firestore_custom_endpoint - computed: false, optional: true, required: false
  private _firestoreCustomEndpoint?: string;
  public get firestoreCustomEndpoint() {
    return this._firestoreCustomEndpoint;
  }
  public set firestoreCustomEndpoint(value: string | undefined) {
    this._firestoreCustomEndpoint = value;
  }

  // game_services_custom_endpoint - computed: false, optional: true, required: false
  private _gameServicesCustomEndpoint?: string;
  public get gameServicesCustomEndpoint() {
    return this._gameServicesCustomEndpoint;
  }
  public set gameServicesCustomEndpoint(value: string | undefined) {
    this._gameServicesCustomEndpoint = value;
  }

  // healthcare_custom_endpoint - computed: false, optional: true, required: false
  private _healthcareCustomEndpoint?: string;
  public get healthcareCustomEndpoint() {
    return this._healthcareCustomEndpoint;
  }
  public set healthcareCustomEndpoint(value: string | undefined) {
    this._healthcareCustomEndpoint = value;
  }

  // iam_credentials_custom_endpoint - computed: false, optional: true, required: false
  private _iamCredentialsCustomEndpoint?: string;
  public get iamCredentialsCustomEndpoint() {
    return this._iamCredentialsCustomEndpoint;
  }
  public set iamCredentialsCustomEndpoint(value: string | undefined) {
    this._iamCredentialsCustomEndpoint = value;
  }

  // iam_custom_endpoint - computed: false, optional: true, required: false
  private _iamCustomEndpoint?: string;
  public get iamCustomEndpoint() {
    return this._iamCustomEndpoint;
  }
  public set iamCustomEndpoint(value: string | undefined) {
    this._iamCustomEndpoint = value;
  }

  // iap_custom_endpoint - computed: false, optional: true, required: false
  private _iapCustomEndpoint?: string;
  public get iapCustomEndpoint() {
    return this._iapCustomEndpoint;
  }
  public set iapCustomEndpoint(value: string | undefined) {
    this._iapCustomEndpoint = value;
  }

  // identity_platform_custom_endpoint - computed: false, optional: true, required: false
  private _identityPlatformCustomEndpoint?: string;
  public get identityPlatformCustomEndpoint() {
    return this._identityPlatformCustomEndpoint;
  }
  public set identityPlatformCustomEndpoint(value: string | undefined) {
    this._identityPlatformCustomEndpoint = value;
  }

  // kms_custom_endpoint - computed: false, optional: true, required: false
  private _kmsCustomEndpoint?: string;
  public get kmsCustomEndpoint() {
    return this._kmsCustomEndpoint;
  }
  public set kmsCustomEndpoint(value: string | undefined) {
    this._kmsCustomEndpoint = value;
  }

  // logging_custom_endpoint - computed: false, optional: true, required: false
  private _loggingCustomEndpoint?: string;
  public get loggingCustomEndpoint() {
    return this._loggingCustomEndpoint;
  }
  public set loggingCustomEndpoint(value: string | undefined) {
    this._loggingCustomEndpoint = value;
  }

  // ml_engine_custom_endpoint - computed: false, optional: true, required: false
  private _mlEngineCustomEndpoint?: string;
  public get mlEngineCustomEndpoint() {
    return this._mlEngineCustomEndpoint;
  }
  public set mlEngineCustomEndpoint(value: string | undefined) {
    this._mlEngineCustomEndpoint = value;
  }

  // monitoring_custom_endpoint - computed: false, optional: true, required: false
  private _monitoringCustomEndpoint?: string;
  public get monitoringCustomEndpoint() {
    return this._monitoringCustomEndpoint;
  }
  public set monitoringCustomEndpoint(value: string | undefined) {
    this._monitoringCustomEndpoint = value;
  }

  // network_management_custom_endpoint - computed: false, optional: true, required: false
  private _networkManagementCustomEndpoint?: string;
  public get networkManagementCustomEndpoint() {
    return this._networkManagementCustomEndpoint;
  }
  public set networkManagementCustomEndpoint(value: string | undefined) {
    this._networkManagementCustomEndpoint = value;
  }

  // os_config_custom_endpoint - computed: false, optional: true, required: false
  private _osConfigCustomEndpoint?: string;
  public get osConfigCustomEndpoint() {
    return this._osConfigCustomEndpoint;
  }
  public set osConfigCustomEndpoint(value: string | undefined) {
    this._osConfigCustomEndpoint = value;
  }

  // os_login_custom_endpoint - computed: false, optional: true, required: false
  private _osLoginCustomEndpoint?: string;
  public get osLoginCustomEndpoint() {
    return this._osLoginCustomEndpoint;
  }
  public set osLoginCustomEndpoint(value: string | undefined) {
    this._osLoginCustomEndpoint = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // pubsub_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubCustomEndpoint?: string;
  public get pubsubCustomEndpoint() {
    return this._pubsubCustomEndpoint;
  }
  public set pubsubCustomEndpoint(value: string | undefined) {
    this._pubsubCustomEndpoint = value;
  }

  // redis_custom_endpoint - computed: false, optional: true, required: false
  private _redisCustomEndpoint?: string;
  public get redisCustomEndpoint() {
    return this._redisCustomEndpoint;
  }
  public set redisCustomEndpoint(value: string | undefined) {
    this._redisCustomEndpoint = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string;
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string | undefined) {
    this._requestTimeout = value;
  }

  // resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerCustomEndpoint?: string;
  public get resourceManagerCustomEndpoint() {
    return this._resourceManagerCustomEndpoint;
  }
  public set resourceManagerCustomEndpoint(value: string | undefined) {
    this._resourceManagerCustomEndpoint = value;
  }

  // resource_manager_v2beta1_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerV2Beta1CustomEndpoint?: string;
  public get resourceManagerV2Beta1CustomEndpoint() {
    return this._resourceManagerV2Beta1CustomEndpoint;
  }
  public set resourceManagerV2Beta1CustomEndpoint(value: string | undefined) {
    this._resourceManagerV2Beta1CustomEndpoint = value;
  }

  // runtime_config_custom_endpoint - computed: false, optional: true, required: false
  private _runtimeConfigCustomEndpoint?: string;
  public get runtimeConfigCustomEndpoint() {
    return this._runtimeConfigCustomEndpoint;
  }
  public set runtimeConfigCustomEndpoint(value: string | undefined) {
    this._runtimeConfigCustomEndpoint = value;
  }

  // runtimeconfig_custom_endpoint - computed: false, optional: true, required: false
  private _runtimeconfigCustomEndpoint?: string;
  public get runtimeconfigCustomEndpoint() {
    return this._runtimeconfigCustomEndpoint;
  }
  public set runtimeconfigCustomEndpoint(value: string | undefined) {
    this._runtimeconfigCustomEndpoint = value;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[];
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined) {
    this._scopes = value;
  }

  // secret_manager_custom_endpoint - computed: false, optional: true, required: false
  private _secretManagerCustomEndpoint?: string;
  public get secretManagerCustomEndpoint() {
    return this._secretManagerCustomEndpoint;
  }
  public set secretManagerCustomEndpoint(value: string | undefined) {
    this._secretManagerCustomEndpoint = value;
  }

  // security_center_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterCustomEndpoint?: string;
  public get securityCenterCustomEndpoint() {
    return this._securityCenterCustomEndpoint;
  }
  public set securityCenterCustomEndpoint(value: string | undefined) {
    this._securityCenterCustomEndpoint = value;
  }

  // service_management_custom_endpoint - computed: false, optional: true, required: false
  private _serviceManagementCustomEndpoint?: string;
  public get serviceManagementCustomEndpoint() {
    return this._serviceManagementCustomEndpoint;
  }
  public set serviceManagementCustomEndpoint(value: string | undefined) {
    this._serviceManagementCustomEndpoint = value;
  }

  // service_networking_custom_endpoint - computed: false, optional: true, required: false
  private _serviceNetworkingCustomEndpoint?: string;
  public get serviceNetworkingCustomEndpoint() {
    return this._serviceNetworkingCustomEndpoint;
  }
  public set serviceNetworkingCustomEndpoint(value: string | undefined) {
    this._serviceNetworkingCustomEndpoint = value;
  }

  // service_usage_custom_endpoint - computed: false, optional: true, required: false
  private _serviceUsageCustomEndpoint?: string;
  public get serviceUsageCustomEndpoint() {
    return this._serviceUsageCustomEndpoint;
  }
  public set serviceUsageCustomEndpoint(value: string | undefined) {
    this._serviceUsageCustomEndpoint = value;
  }

  // source_repo_custom_endpoint - computed: false, optional: true, required: false
  private _sourceRepoCustomEndpoint?: string;
  public get sourceRepoCustomEndpoint() {
    return this._sourceRepoCustomEndpoint;
  }
  public set sourceRepoCustomEndpoint(value: string | undefined) {
    this._sourceRepoCustomEndpoint = value;
  }

  // spanner_custom_endpoint - computed: false, optional: true, required: false
  private _spannerCustomEndpoint?: string;
  public get spannerCustomEndpoint() {
    return this._spannerCustomEndpoint;
  }
  public set spannerCustomEndpoint(value: string | undefined) {
    this._spannerCustomEndpoint = value;
  }

  // sql_custom_endpoint - computed: false, optional: true, required: false
  private _sqlCustomEndpoint?: string;
  public get sqlCustomEndpoint() {
    return this._sqlCustomEndpoint;
  }
  public set sqlCustomEndpoint(value: string | undefined) {
    this._sqlCustomEndpoint = value;
  }

  // storage_custom_endpoint - computed: false, optional: true, required: false
  private _storageCustomEndpoint?: string;
  public get storageCustomEndpoint() {
    return this._storageCustomEndpoint;
  }
  public set storageCustomEndpoint(value: string | undefined) {
    this._storageCustomEndpoint = value;
  }

  // storage_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _storageTransferCustomEndpoint?: string;
  public get storageTransferCustomEndpoint() {
    return this._storageTransferCustomEndpoint;
  }
  public set storageTransferCustomEndpoint(value: string | undefined) {
    this._storageTransferCustomEndpoint = value;
  }

  // tpu_custom_endpoint - computed: false, optional: true, required: false
  private _tpuCustomEndpoint?: string;
  public get tpuCustomEndpoint() {
    return this._tpuCustomEndpoint;
  }
  public set tpuCustomEndpoint(value: string | undefined) {
    this._tpuCustomEndpoint = value;
  }

  // user_project_override - computed: false, optional: true, required: false
  private _userProjectOverride?: boolean;
  public get userProjectOverride() {
    return this._userProjectOverride;
  }
  public set userProjectOverride(value: boolean | undefined) {
    this._userProjectOverride = value;
  }

  // vpc_access_custom_endpoint - computed: false, optional: true, required: false
  private _vpcAccessCustomEndpoint?: string;
  public get vpcAccessCustomEndpoint() {
    return this._vpcAccessCustomEndpoint;
  }
  public set vpcAccessCustomEndpoint(value: string | undefined) {
    this._vpcAccessCustomEndpoint = value;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  // batching - computed: false, optional: true, required: false
  private _batching?: GoogleProviderBatching[];
  public get batching() {
    return this._batching;
  }
  public set batching(value: GoogleProviderBatching[] | undefined) {
    this._batching = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_context_manager_custom_endpoint: this._accessContextManagerCustomEndpoint,
      access_token: this._accessToken,
      active_directory_custom_endpoint: this._activeDirectoryCustomEndpoint,
      app_engine_custom_endpoint: this._appEngineCustomEndpoint,
      big_query_custom_endpoint: this._bigQueryCustomEndpoint,
      bigquery_data_transfer_custom_endpoint: this._bigqueryDataTransferCustomEndpoint,
      bigtable_custom_endpoint: this._bigtableCustomEndpoint,
      binary_authorization_custom_endpoint: this._binaryAuthorizationCustomEndpoint,
      cloud_asset_custom_endpoint: this._cloudAssetCustomEndpoint,
      cloud_billing_custom_endpoint: this._cloudBillingCustomEndpoint,
      cloud_build_custom_endpoint: this._cloudBuildCustomEndpoint,
      cloud_functions_custom_endpoint: this._cloudFunctionsCustomEndpoint,
      cloud_iot_custom_endpoint: this._cloudIotCustomEndpoint,
      cloud_run_custom_endpoint: this._cloudRunCustomEndpoint,
      cloud_scheduler_custom_endpoint: this._cloudSchedulerCustomEndpoint,
      cloud_tasks_custom_endpoint: this._cloudTasksCustomEndpoint,
      composer_custom_endpoint: this._composerCustomEndpoint,
      compute_beta_custom_endpoint: this._computeBetaCustomEndpoint,
      compute_custom_endpoint: this._computeCustomEndpoint,
      container_analysis_custom_endpoint: this._containerAnalysisCustomEndpoint,
      container_beta_custom_endpoint: this._containerBetaCustomEndpoint,
      container_custom_endpoint: this._containerCustomEndpoint,
      credentials: this._credentials,
      data_catalog_custom_endpoint: this._dataCatalogCustomEndpoint,
      dataflow_custom_endpoint: this._dataflowCustomEndpoint,
      dataproc_beta_custom_endpoint: this._dataprocBetaCustomEndpoint,
      dataproc_custom_endpoint: this._dataprocCustomEndpoint,
      datastore_custom_endpoint: this._datastoreCustomEndpoint,
      deployment_manager_custom_endpoint: this._deploymentManagerCustomEndpoint,
      dialogflow_custom_endpoint: this._dialogflowCustomEndpoint,
      dns_beta_custom_endpoint: this._dnsBetaCustomEndpoint,
      dns_custom_endpoint: this._dnsCustomEndpoint,
      filestore_custom_endpoint: this._filestoreCustomEndpoint,
      firestore_custom_endpoint: this._firestoreCustomEndpoint,
      game_services_custom_endpoint: this._gameServicesCustomEndpoint,
      healthcare_custom_endpoint: this._healthcareCustomEndpoint,
      iam_credentials_custom_endpoint: this._iamCredentialsCustomEndpoint,
      iam_custom_endpoint: this._iamCustomEndpoint,
      iap_custom_endpoint: this._iapCustomEndpoint,
      identity_platform_custom_endpoint: this._identityPlatformCustomEndpoint,
      kms_custom_endpoint: this._kmsCustomEndpoint,
      logging_custom_endpoint: this._loggingCustomEndpoint,
      ml_engine_custom_endpoint: this._mlEngineCustomEndpoint,
      monitoring_custom_endpoint: this._monitoringCustomEndpoint,
      network_management_custom_endpoint: this._networkManagementCustomEndpoint,
      os_config_custom_endpoint: this._osConfigCustomEndpoint,
      os_login_custom_endpoint: this._osLoginCustomEndpoint,
      project: this._project,
      pubsub_custom_endpoint: this._pubsubCustomEndpoint,
      redis_custom_endpoint: this._redisCustomEndpoint,
      region: this._region,
      request_timeout: this._requestTimeout,
      resource_manager_custom_endpoint: this._resourceManagerCustomEndpoint,
      resource_manager_v2beta1_custom_endpoint: this._resourceManagerV2Beta1CustomEndpoint,
      runtime_config_custom_endpoint: this._runtimeConfigCustomEndpoint,
      runtimeconfig_custom_endpoint: this._runtimeconfigCustomEndpoint,
      scopes: this._scopes,
      secret_manager_custom_endpoint: this._secretManagerCustomEndpoint,
      security_center_custom_endpoint: this._securityCenterCustomEndpoint,
      service_management_custom_endpoint: this._serviceManagementCustomEndpoint,
      service_networking_custom_endpoint: this._serviceNetworkingCustomEndpoint,
      service_usage_custom_endpoint: this._serviceUsageCustomEndpoint,
      source_repo_custom_endpoint: this._sourceRepoCustomEndpoint,
      spanner_custom_endpoint: this._spannerCustomEndpoint,
      sql_custom_endpoint: this._sqlCustomEndpoint,
      storage_custom_endpoint: this._storageCustomEndpoint,
      storage_transfer_custom_endpoint: this._storageTransferCustomEndpoint,
      tpu_custom_endpoint: this._tpuCustomEndpoint,
      user_project_override: this._userProjectOverride,
      vpc_access_custom_endpoint: this._vpcAccessCustomEndpoint,
      zone: this._zone,
      alias: this._alias,
      batching: this._batching,
    };
  }
}
