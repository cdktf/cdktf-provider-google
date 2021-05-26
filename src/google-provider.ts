// https://www.terraform.io/docs/providers/google/r/google_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleProviderConfig {
  readonly accessApprovalCustomEndpoint?: string;
  readonly accessContextManagerCustomEndpoint?: string;
  readonly accessToken?: string;
  readonly activeDirectoryCustomEndpoint?: string;
  readonly apigeeCustomEndpoint?: string;
  readonly appEngineCustomEndpoint?: string;
  readonly bigQueryCustomEndpoint?: string;
  readonly bigqueryDataTransferCustomEndpoint?: string;
  readonly bigqueryReservationCustomEndpoint?: string;
  readonly bigtableCustomEndpoint?: string;
  readonly billingCustomEndpoint?: string;
  readonly billingProject?: string;
  readonly binaryAuthorizationCustomEndpoint?: string;
  readonly cloudAssetCustomEndpoint?: string;
  readonly cloudBillingCustomEndpoint?: string;
  readonly cloudBuildCustomEndpoint?: string;
  readonly cloudFunctionsCustomEndpoint?: string;
  readonly cloudIdentityCustomEndpoint?: string;
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
  readonly dataLossPreventionCustomEndpoint?: string;
  readonly dataflowCustomEndpoint?: string;
  readonly dataprocBetaCustomEndpoint?: string;
  readonly dataprocCustomEndpoint?: string;
  readonly datastoreCustomEndpoint?: string;
  readonly deploymentManagerCustomEndpoint?: string;
  readonly dialogflowCustomEndpoint?: string;
  readonly dnsCustomEndpoint?: string;
  readonly eventarcCustomEndpoint?: string;
  readonly filestoreCustomEndpoint?: string;
  readonly firestoreCustomEndpoint?: string;
  readonly gameServicesCustomEndpoint?: string;
  readonly healthcareCustomEndpoint?: string;
  readonly iamCredentialsCustomEndpoint?: string;
  readonly iamCustomEndpoint?: string;
  readonly iapCustomEndpoint?: string;
  readonly identityPlatformCustomEndpoint?: string;
  readonly impersonateServiceAccount?: string;
  readonly impersonateServiceAccountDelegates?: string[];
  readonly kmsCustomEndpoint?: string;
  readonly loggingCustomEndpoint?: string;
  readonly memcacheCustomEndpoint?: string;
  readonly mlEngineCustomEndpoint?: string;
  readonly monitoringCustomEndpoint?: string;
  readonly networkManagementCustomEndpoint?: string;
  readonly notebooksCustomEndpoint?: string;
  readonly osConfigCustomEndpoint?: string;
  readonly osLoginCustomEndpoint?: string;
  readonly project?: string;
  readonly pubsubCustomEndpoint?: string;
  readonly pubsubLiteCustomEndpoint?: string;
  readonly redisCustomEndpoint?: string;
  readonly region?: string;
  readonly requestTimeout?: string;
  readonly resourceManagerCustomEndpoint?: string;
  readonly resourceManagerV2CustomEndpoint?: string;
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
  readonly tagsCustomEndpoint?: string;
  readonly tpuCustomEndpoint?: string;
  readonly userProjectOverride?: boolean;
  readonly vpcAccessCustomEndpoint?: string;
  readonly workflowsCustomEndpoint?: string;
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

function googleProviderBatchingToTerraform(struct?: GoogleProviderBatching): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_batching: cdktf.booleanToTerraform(struct!.enableBatching),
    send_after: cdktf.stringToTerraform(struct!.sendAfter),
  }
}


// Resource

export class GoogleProvider extends cdktf.TerraformProvider {

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
    this._accessApprovalCustomEndpoint = config.accessApprovalCustomEndpoint;
    this._accessContextManagerCustomEndpoint = config.accessContextManagerCustomEndpoint;
    this._accessToken = config.accessToken;
    this._activeDirectoryCustomEndpoint = config.activeDirectoryCustomEndpoint;
    this._apigeeCustomEndpoint = config.apigeeCustomEndpoint;
    this._appEngineCustomEndpoint = config.appEngineCustomEndpoint;
    this._bigQueryCustomEndpoint = config.bigQueryCustomEndpoint;
    this._bigqueryDataTransferCustomEndpoint = config.bigqueryDataTransferCustomEndpoint;
    this._bigqueryReservationCustomEndpoint = config.bigqueryReservationCustomEndpoint;
    this._bigtableCustomEndpoint = config.bigtableCustomEndpoint;
    this._billingCustomEndpoint = config.billingCustomEndpoint;
    this._billingProject = config.billingProject;
    this._binaryAuthorizationCustomEndpoint = config.binaryAuthorizationCustomEndpoint;
    this._cloudAssetCustomEndpoint = config.cloudAssetCustomEndpoint;
    this._cloudBillingCustomEndpoint = config.cloudBillingCustomEndpoint;
    this._cloudBuildCustomEndpoint = config.cloudBuildCustomEndpoint;
    this._cloudFunctionsCustomEndpoint = config.cloudFunctionsCustomEndpoint;
    this._cloudIdentityCustomEndpoint = config.cloudIdentityCustomEndpoint;
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
    this._dataLossPreventionCustomEndpoint = config.dataLossPreventionCustomEndpoint;
    this._dataflowCustomEndpoint = config.dataflowCustomEndpoint;
    this._dataprocBetaCustomEndpoint = config.dataprocBetaCustomEndpoint;
    this._dataprocCustomEndpoint = config.dataprocCustomEndpoint;
    this._datastoreCustomEndpoint = config.datastoreCustomEndpoint;
    this._deploymentManagerCustomEndpoint = config.deploymentManagerCustomEndpoint;
    this._dialogflowCustomEndpoint = config.dialogflowCustomEndpoint;
    this._dnsCustomEndpoint = config.dnsCustomEndpoint;
    this._eventarcCustomEndpoint = config.eventarcCustomEndpoint;
    this._filestoreCustomEndpoint = config.filestoreCustomEndpoint;
    this._firestoreCustomEndpoint = config.firestoreCustomEndpoint;
    this._gameServicesCustomEndpoint = config.gameServicesCustomEndpoint;
    this._healthcareCustomEndpoint = config.healthcareCustomEndpoint;
    this._iamCredentialsCustomEndpoint = config.iamCredentialsCustomEndpoint;
    this._iamCustomEndpoint = config.iamCustomEndpoint;
    this._iapCustomEndpoint = config.iapCustomEndpoint;
    this._identityPlatformCustomEndpoint = config.identityPlatformCustomEndpoint;
    this._impersonateServiceAccount = config.impersonateServiceAccount;
    this._impersonateServiceAccountDelegates = config.impersonateServiceAccountDelegates;
    this._kmsCustomEndpoint = config.kmsCustomEndpoint;
    this._loggingCustomEndpoint = config.loggingCustomEndpoint;
    this._memcacheCustomEndpoint = config.memcacheCustomEndpoint;
    this._mlEngineCustomEndpoint = config.mlEngineCustomEndpoint;
    this._monitoringCustomEndpoint = config.monitoringCustomEndpoint;
    this._networkManagementCustomEndpoint = config.networkManagementCustomEndpoint;
    this._notebooksCustomEndpoint = config.notebooksCustomEndpoint;
    this._osConfigCustomEndpoint = config.osConfigCustomEndpoint;
    this._osLoginCustomEndpoint = config.osLoginCustomEndpoint;
    this._project = config.project;
    this._pubsubCustomEndpoint = config.pubsubCustomEndpoint;
    this._pubsubLiteCustomEndpoint = config.pubsubLiteCustomEndpoint;
    this._redisCustomEndpoint = config.redisCustomEndpoint;
    this._region = config.region;
    this._requestTimeout = config.requestTimeout;
    this._resourceManagerCustomEndpoint = config.resourceManagerCustomEndpoint;
    this._resourceManagerV2CustomEndpoint = config.resourceManagerV2CustomEndpoint;
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
    this._tagsCustomEndpoint = config.tagsCustomEndpoint;
    this._tpuCustomEndpoint = config.tpuCustomEndpoint;
    this._userProjectOverride = config.userProjectOverride;
    this._vpcAccessCustomEndpoint = config.vpcAccessCustomEndpoint;
    this._workflowsCustomEndpoint = config.workflowsCustomEndpoint;
    this._zone = config.zone;
    this._alias = config.alias;
    this._batching = config.batching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_approval_custom_endpoint - computed: false, optional: true, required: false
  private _accessApprovalCustomEndpoint?: string;
  public get accessApprovalCustomEndpoint() {
    return this._accessApprovalCustomEndpoint;
  }
  public set accessApprovalCustomEndpoint(value: string  | undefined) {
    this._accessApprovalCustomEndpoint = value;
  }
  public resetAccessApprovalCustomEndpoint() {
    this._accessApprovalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessApprovalCustomEndpointInput() {
    return this._accessApprovalCustomEndpoint
  }

  // access_context_manager_custom_endpoint - computed: false, optional: true, required: false
  private _accessContextManagerCustomEndpoint?: string;
  public get accessContextManagerCustomEndpoint() {
    return this._accessContextManagerCustomEndpoint;
  }
  public set accessContextManagerCustomEndpoint(value: string  | undefined) {
    this._accessContextManagerCustomEndpoint = value;
  }
  public resetAccessContextManagerCustomEndpoint() {
    this._accessContextManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessContextManagerCustomEndpointInput() {
    return this._accessContextManagerCustomEndpoint
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string;
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string  | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
  }

  // active_directory_custom_endpoint - computed: false, optional: true, required: false
  private _activeDirectoryCustomEndpoint?: string;
  public get activeDirectoryCustomEndpoint() {
    return this._activeDirectoryCustomEndpoint;
  }
  public set activeDirectoryCustomEndpoint(value: string  | undefined) {
    this._activeDirectoryCustomEndpoint = value;
  }
  public resetActiveDirectoryCustomEndpoint() {
    this._activeDirectoryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryCustomEndpointInput() {
    return this._activeDirectoryCustomEndpoint
  }

  // apigee_custom_endpoint - computed: false, optional: true, required: false
  private _apigeeCustomEndpoint?: string;
  public get apigeeCustomEndpoint() {
    return this._apigeeCustomEndpoint;
  }
  public set apigeeCustomEndpoint(value: string  | undefined) {
    this._apigeeCustomEndpoint = value;
  }
  public resetApigeeCustomEndpoint() {
    this._apigeeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeCustomEndpointInput() {
    return this._apigeeCustomEndpoint
  }

  // app_engine_custom_endpoint - computed: false, optional: true, required: false
  private _appEngineCustomEndpoint?: string;
  public get appEngineCustomEndpoint() {
    return this._appEngineCustomEndpoint;
  }
  public set appEngineCustomEndpoint(value: string  | undefined) {
    this._appEngineCustomEndpoint = value;
  }
  public resetAppEngineCustomEndpoint() {
    this._appEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineCustomEndpointInput() {
    return this._appEngineCustomEndpoint
  }

  // big_query_custom_endpoint - computed: false, optional: true, required: false
  private _bigQueryCustomEndpoint?: string;
  public get bigQueryCustomEndpoint() {
    return this._bigQueryCustomEndpoint;
  }
  public set bigQueryCustomEndpoint(value: string  | undefined) {
    this._bigQueryCustomEndpoint = value;
  }
  public resetBigQueryCustomEndpoint() {
    this._bigQueryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryCustomEndpointInput() {
    return this._bigQueryCustomEndpoint
  }

  // bigquery_data_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDataTransferCustomEndpoint?: string;
  public get bigqueryDataTransferCustomEndpoint() {
    return this._bigqueryDataTransferCustomEndpoint;
  }
  public set bigqueryDataTransferCustomEndpoint(value: string  | undefined) {
    this._bigqueryDataTransferCustomEndpoint = value;
  }
  public resetBigqueryDataTransferCustomEndpoint() {
    this._bigqueryDataTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDataTransferCustomEndpointInput() {
    return this._bigqueryDataTransferCustomEndpoint
  }

  // bigquery_reservation_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryReservationCustomEndpoint?: string;
  public get bigqueryReservationCustomEndpoint() {
    return this._bigqueryReservationCustomEndpoint;
  }
  public set bigqueryReservationCustomEndpoint(value: string  | undefined) {
    this._bigqueryReservationCustomEndpoint = value;
  }
  public resetBigqueryReservationCustomEndpoint() {
    this._bigqueryReservationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryReservationCustomEndpointInput() {
    return this._bigqueryReservationCustomEndpoint
  }

  // bigtable_custom_endpoint - computed: false, optional: true, required: false
  private _bigtableCustomEndpoint?: string;
  public get bigtableCustomEndpoint() {
    return this._bigtableCustomEndpoint;
  }
  public set bigtableCustomEndpoint(value: string  | undefined) {
    this._bigtableCustomEndpoint = value;
  }
  public resetBigtableCustomEndpoint() {
    this._bigtableCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigtableCustomEndpointInput() {
    return this._bigtableCustomEndpoint
  }

  // billing_custom_endpoint - computed: false, optional: true, required: false
  private _billingCustomEndpoint?: string;
  public get billingCustomEndpoint() {
    return this._billingCustomEndpoint;
  }
  public set billingCustomEndpoint(value: string  | undefined) {
    this._billingCustomEndpoint = value;
  }
  public resetBillingCustomEndpoint() {
    this._billingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCustomEndpointInput() {
    return this._billingCustomEndpoint
  }

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string;
  public get billingProject() {
    return this._billingProject;
  }
  public set billingProject(value: string  | undefined) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject
  }

  // binary_authorization_custom_endpoint - computed: false, optional: true, required: false
  private _binaryAuthorizationCustomEndpoint?: string;
  public get binaryAuthorizationCustomEndpoint() {
    return this._binaryAuthorizationCustomEndpoint;
  }
  public set binaryAuthorizationCustomEndpoint(value: string  | undefined) {
    this._binaryAuthorizationCustomEndpoint = value;
  }
  public resetBinaryAuthorizationCustomEndpoint() {
    this._binaryAuthorizationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationCustomEndpointInput() {
    return this._binaryAuthorizationCustomEndpoint
  }

  // cloud_asset_custom_endpoint - computed: false, optional: true, required: false
  private _cloudAssetCustomEndpoint?: string;
  public get cloudAssetCustomEndpoint() {
    return this._cloudAssetCustomEndpoint;
  }
  public set cloudAssetCustomEndpoint(value: string  | undefined) {
    this._cloudAssetCustomEndpoint = value;
  }
  public resetCloudAssetCustomEndpoint() {
    this._cloudAssetCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAssetCustomEndpointInput() {
    return this._cloudAssetCustomEndpoint
  }

  // cloud_billing_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBillingCustomEndpoint?: string;
  public get cloudBillingCustomEndpoint() {
    return this._cloudBillingCustomEndpoint;
  }
  public set cloudBillingCustomEndpoint(value: string  | undefined) {
    this._cloudBillingCustomEndpoint = value;
  }
  public resetCloudBillingCustomEndpoint() {
    this._cloudBillingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBillingCustomEndpointInput() {
    return this._cloudBillingCustomEndpoint
  }

  // cloud_build_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBuildCustomEndpoint?: string;
  public get cloudBuildCustomEndpoint() {
    return this._cloudBuildCustomEndpoint;
  }
  public set cloudBuildCustomEndpoint(value: string  | undefined) {
    this._cloudBuildCustomEndpoint = value;
  }
  public resetCloudBuildCustomEndpoint() {
    this._cloudBuildCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildCustomEndpointInput() {
    return this._cloudBuildCustomEndpoint
  }

  // cloud_functions_custom_endpoint - computed: false, optional: true, required: false
  private _cloudFunctionsCustomEndpoint?: string;
  public get cloudFunctionsCustomEndpoint() {
    return this._cloudFunctionsCustomEndpoint;
  }
  public set cloudFunctionsCustomEndpoint(value: string  | undefined) {
    this._cloudFunctionsCustomEndpoint = value;
  }
  public resetCloudFunctionsCustomEndpoint() {
    this._cloudFunctionsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionsCustomEndpointInput() {
    return this._cloudFunctionsCustomEndpoint
  }

  // cloud_identity_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIdentityCustomEndpoint?: string;
  public get cloudIdentityCustomEndpoint() {
    return this._cloudIdentityCustomEndpoint;
  }
  public set cloudIdentityCustomEndpoint(value: string  | undefined) {
    this._cloudIdentityCustomEndpoint = value;
  }
  public resetCloudIdentityCustomEndpoint() {
    this._cloudIdentityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdentityCustomEndpointInput() {
    return this._cloudIdentityCustomEndpoint
  }

  // cloud_iot_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIotCustomEndpoint?: string;
  public get cloudIotCustomEndpoint() {
    return this._cloudIotCustomEndpoint;
  }
  public set cloudIotCustomEndpoint(value: string  | undefined) {
    this._cloudIotCustomEndpoint = value;
  }
  public resetCloudIotCustomEndpoint() {
    this._cloudIotCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIotCustomEndpointInput() {
    return this._cloudIotCustomEndpoint
  }

  // cloud_run_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunCustomEndpoint?: string;
  public get cloudRunCustomEndpoint() {
    return this._cloudRunCustomEndpoint;
  }
  public set cloudRunCustomEndpoint(value: string  | undefined) {
    this._cloudRunCustomEndpoint = value;
  }
  public resetCloudRunCustomEndpoint() {
    this._cloudRunCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunCustomEndpointInput() {
    return this._cloudRunCustomEndpoint
  }

  // cloud_scheduler_custom_endpoint - computed: false, optional: true, required: false
  private _cloudSchedulerCustomEndpoint?: string;
  public get cloudSchedulerCustomEndpoint() {
    return this._cloudSchedulerCustomEndpoint;
  }
  public set cloudSchedulerCustomEndpoint(value: string  | undefined) {
    this._cloudSchedulerCustomEndpoint = value;
  }
  public resetCloudSchedulerCustomEndpoint() {
    this._cloudSchedulerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSchedulerCustomEndpointInput() {
    return this._cloudSchedulerCustomEndpoint
  }

  // cloud_tasks_custom_endpoint - computed: false, optional: true, required: false
  private _cloudTasksCustomEndpoint?: string;
  public get cloudTasksCustomEndpoint() {
    return this._cloudTasksCustomEndpoint;
  }
  public set cloudTasksCustomEndpoint(value: string  | undefined) {
    this._cloudTasksCustomEndpoint = value;
  }
  public resetCloudTasksCustomEndpoint() {
    this._cloudTasksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTasksCustomEndpointInput() {
    return this._cloudTasksCustomEndpoint
  }

  // composer_custom_endpoint - computed: false, optional: true, required: false
  private _composerCustomEndpoint?: string;
  public get composerCustomEndpoint() {
    return this._composerCustomEndpoint;
  }
  public set composerCustomEndpoint(value: string  | undefined) {
    this._composerCustomEndpoint = value;
  }
  public resetComposerCustomEndpoint() {
    this._composerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composerCustomEndpointInput() {
    return this._composerCustomEndpoint
  }

  // compute_beta_custom_endpoint - computed: false, optional: true, required: false
  private _computeBetaCustomEndpoint?: string;
  public get computeBetaCustomEndpoint() {
    return this._computeBetaCustomEndpoint;
  }
  public set computeBetaCustomEndpoint(value: string  | undefined) {
    this._computeBetaCustomEndpoint = value;
  }
  public resetComputeBetaCustomEndpoint() {
    this._computeBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeBetaCustomEndpointInput() {
    return this._computeBetaCustomEndpoint
  }

  // compute_custom_endpoint - computed: false, optional: true, required: false
  private _computeCustomEndpoint?: string;
  public get computeCustomEndpoint() {
    return this._computeCustomEndpoint;
  }
  public set computeCustomEndpoint(value: string  | undefined) {
    this._computeCustomEndpoint = value;
  }
  public resetComputeCustomEndpoint() {
    this._computeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCustomEndpointInput() {
    return this._computeCustomEndpoint
  }

  // container_analysis_custom_endpoint - computed: false, optional: true, required: false
  private _containerAnalysisCustomEndpoint?: string;
  public get containerAnalysisCustomEndpoint() {
    return this._containerAnalysisCustomEndpoint;
  }
  public set containerAnalysisCustomEndpoint(value: string  | undefined) {
    this._containerAnalysisCustomEndpoint = value;
  }
  public resetContainerAnalysisCustomEndpoint() {
    this._containerAnalysisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAnalysisCustomEndpointInput() {
    return this._containerAnalysisCustomEndpoint
  }

  // container_beta_custom_endpoint - computed: false, optional: true, required: false
  private _containerBetaCustomEndpoint?: string;
  public get containerBetaCustomEndpoint() {
    return this._containerBetaCustomEndpoint;
  }
  public set containerBetaCustomEndpoint(value: string  | undefined) {
    this._containerBetaCustomEndpoint = value;
  }
  public resetContainerBetaCustomEndpoint() {
    this._containerBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerBetaCustomEndpointInput() {
    return this._containerBetaCustomEndpoint
  }

  // container_custom_endpoint - computed: false, optional: true, required: false
  private _containerCustomEndpoint?: string;
  public get containerCustomEndpoint() {
    return this._containerCustomEndpoint;
  }
  public set containerCustomEndpoint(value: string  | undefined) {
    this._containerCustomEndpoint = value;
  }
  public resetContainerCustomEndpoint() {
    this._containerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCustomEndpointInput() {
    return this._containerCustomEndpoint
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string  | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // data_catalog_custom_endpoint - computed: false, optional: true, required: false
  private _dataCatalogCustomEndpoint?: string;
  public get dataCatalogCustomEndpoint() {
    return this._dataCatalogCustomEndpoint;
  }
  public set dataCatalogCustomEndpoint(value: string  | undefined) {
    this._dataCatalogCustomEndpoint = value;
  }
  public resetDataCatalogCustomEndpoint() {
    this._dataCatalogCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogCustomEndpointInput() {
    return this._dataCatalogCustomEndpoint
  }

  // data_loss_prevention_custom_endpoint - computed: false, optional: true, required: false
  private _dataLossPreventionCustomEndpoint?: string;
  public get dataLossPreventionCustomEndpoint() {
    return this._dataLossPreventionCustomEndpoint;
  }
  public set dataLossPreventionCustomEndpoint(value: string  | undefined) {
    this._dataLossPreventionCustomEndpoint = value;
  }
  public resetDataLossPreventionCustomEndpoint() {
    this._dataLossPreventionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLossPreventionCustomEndpointInput() {
    return this._dataLossPreventionCustomEndpoint
  }

  // dataflow_custom_endpoint - computed: false, optional: true, required: false
  private _dataflowCustomEndpoint?: string;
  public get dataflowCustomEndpoint() {
    return this._dataflowCustomEndpoint;
  }
  public set dataflowCustomEndpoint(value: string  | undefined) {
    this._dataflowCustomEndpoint = value;
  }
  public resetDataflowCustomEndpoint() {
    this._dataflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowCustomEndpointInput() {
    return this._dataflowCustomEndpoint
  }

  // dataproc_beta_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocBetaCustomEndpoint?: string;
  public get dataprocBetaCustomEndpoint() {
    return this._dataprocBetaCustomEndpoint;
  }
  public set dataprocBetaCustomEndpoint(value: string  | undefined) {
    this._dataprocBetaCustomEndpoint = value;
  }
  public resetDataprocBetaCustomEndpoint() {
    this._dataprocBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocBetaCustomEndpointInput() {
    return this._dataprocBetaCustomEndpoint
  }

  // dataproc_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocCustomEndpoint?: string;
  public get dataprocCustomEndpoint() {
    return this._dataprocCustomEndpoint;
  }
  public set dataprocCustomEndpoint(value: string  | undefined) {
    this._dataprocCustomEndpoint = value;
  }
  public resetDataprocCustomEndpoint() {
    this._dataprocCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocCustomEndpointInput() {
    return this._dataprocCustomEndpoint
  }

  // datastore_custom_endpoint - computed: false, optional: true, required: false
  private _datastoreCustomEndpoint?: string;
  public get datastoreCustomEndpoint() {
    return this._datastoreCustomEndpoint;
  }
  public set datastoreCustomEndpoint(value: string  | undefined) {
    this._datastoreCustomEndpoint = value;
  }
  public resetDatastoreCustomEndpoint() {
    this._datastoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreCustomEndpointInput() {
    return this._datastoreCustomEndpoint
  }

  // deployment_manager_custom_endpoint - computed: false, optional: true, required: false
  private _deploymentManagerCustomEndpoint?: string;
  public get deploymentManagerCustomEndpoint() {
    return this._deploymentManagerCustomEndpoint;
  }
  public set deploymentManagerCustomEndpoint(value: string  | undefined) {
    this._deploymentManagerCustomEndpoint = value;
  }
  public resetDeploymentManagerCustomEndpoint() {
    this._deploymentManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentManagerCustomEndpointInput() {
    return this._deploymentManagerCustomEndpoint
  }

  // dialogflow_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCustomEndpoint?: string;
  public get dialogflowCustomEndpoint() {
    return this._dialogflowCustomEndpoint;
  }
  public set dialogflowCustomEndpoint(value: string  | undefined) {
    this._dialogflowCustomEndpoint = value;
  }
  public resetDialogflowCustomEndpoint() {
    this._dialogflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCustomEndpointInput() {
    return this._dialogflowCustomEndpoint
  }

  // dns_custom_endpoint - computed: false, optional: true, required: false
  private _dnsCustomEndpoint?: string;
  public get dnsCustomEndpoint() {
    return this._dnsCustomEndpoint;
  }
  public set dnsCustomEndpoint(value: string  | undefined) {
    this._dnsCustomEndpoint = value;
  }
  public resetDnsCustomEndpoint() {
    this._dnsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomEndpointInput() {
    return this._dnsCustomEndpoint
  }

  // eventarc_custom_endpoint - computed: false, optional: true, required: false
  private _eventarcCustomEndpoint?: string;
  public get eventarcCustomEndpoint() {
    return this._eventarcCustomEndpoint;
  }
  public set eventarcCustomEndpoint(value: string  | undefined) {
    this._eventarcCustomEndpoint = value;
  }
  public resetEventarcCustomEndpoint() {
    this._eventarcCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventarcCustomEndpointInput() {
    return this._eventarcCustomEndpoint
  }

  // filestore_custom_endpoint - computed: false, optional: true, required: false
  private _filestoreCustomEndpoint?: string;
  public get filestoreCustomEndpoint() {
    return this._filestoreCustomEndpoint;
  }
  public set filestoreCustomEndpoint(value: string  | undefined) {
    this._filestoreCustomEndpoint = value;
  }
  public resetFilestoreCustomEndpoint() {
    this._filestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreCustomEndpointInput() {
    return this._filestoreCustomEndpoint
  }

  // firestore_custom_endpoint - computed: false, optional: true, required: false
  private _firestoreCustomEndpoint?: string;
  public get firestoreCustomEndpoint() {
    return this._firestoreCustomEndpoint;
  }
  public set firestoreCustomEndpoint(value: string  | undefined) {
    this._firestoreCustomEndpoint = value;
  }
  public resetFirestoreCustomEndpoint() {
    this._firestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firestoreCustomEndpointInput() {
    return this._firestoreCustomEndpoint
  }

  // game_services_custom_endpoint - computed: false, optional: true, required: false
  private _gameServicesCustomEndpoint?: string;
  public get gameServicesCustomEndpoint() {
    return this._gameServicesCustomEndpoint;
  }
  public set gameServicesCustomEndpoint(value: string  | undefined) {
    this._gameServicesCustomEndpoint = value;
  }
  public resetGameServicesCustomEndpoint() {
    this._gameServicesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServicesCustomEndpointInput() {
    return this._gameServicesCustomEndpoint
  }

  // healthcare_custom_endpoint - computed: false, optional: true, required: false
  private _healthcareCustomEndpoint?: string;
  public get healthcareCustomEndpoint() {
    return this._healthcareCustomEndpoint;
  }
  public set healthcareCustomEndpoint(value: string  | undefined) {
    this._healthcareCustomEndpoint = value;
  }
  public resetHealthcareCustomEndpoint() {
    this._healthcareCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcareCustomEndpointInput() {
    return this._healthcareCustomEndpoint
  }

  // iam_credentials_custom_endpoint - computed: false, optional: true, required: false
  private _iamCredentialsCustomEndpoint?: string;
  public get iamCredentialsCustomEndpoint() {
    return this._iamCredentialsCustomEndpoint;
  }
  public set iamCredentialsCustomEndpoint(value: string  | undefined) {
    this._iamCredentialsCustomEndpoint = value;
  }
  public resetIamCredentialsCustomEndpoint() {
    this._iamCredentialsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCredentialsCustomEndpointInput() {
    return this._iamCredentialsCustomEndpoint
  }

  // iam_custom_endpoint - computed: false, optional: true, required: false
  private _iamCustomEndpoint?: string;
  public get iamCustomEndpoint() {
    return this._iamCustomEndpoint;
  }
  public set iamCustomEndpoint(value: string  | undefined) {
    this._iamCustomEndpoint = value;
  }
  public resetIamCustomEndpoint() {
    this._iamCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCustomEndpointInput() {
    return this._iamCustomEndpoint
  }

  // iap_custom_endpoint - computed: false, optional: true, required: false
  private _iapCustomEndpoint?: string;
  public get iapCustomEndpoint() {
    return this._iapCustomEndpoint;
  }
  public set iapCustomEndpoint(value: string  | undefined) {
    this._iapCustomEndpoint = value;
  }
  public resetIapCustomEndpoint() {
    this._iapCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapCustomEndpointInput() {
    return this._iapCustomEndpoint
  }

  // identity_platform_custom_endpoint - computed: false, optional: true, required: false
  private _identityPlatformCustomEndpoint?: string;
  public get identityPlatformCustomEndpoint() {
    return this._identityPlatformCustomEndpoint;
  }
  public set identityPlatformCustomEndpoint(value: string  | undefined) {
    this._identityPlatformCustomEndpoint = value;
  }
  public resetIdentityPlatformCustomEndpoint() {
    this._identityPlatformCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPlatformCustomEndpointInput() {
    return this._identityPlatformCustomEndpoint
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: string;
  public get impersonateServiceAccount() {
    return this._impersonateServiceAccount;
  }
  public set impersonateServiceAccount(value: string  | undefined) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount
  }

  // impersonate_service_account_delegates - computed: false, optional: true, required: false
  private _impersonateServiceAccountDelegates?: string[];
  public get impersonateServiceAccountDelegates() {
    return this._impersonateServiceAccountDelegates;
  }
  public set impersonateServiceAccountDelegates(value: string[]  | undefined) {
    this._impersonateServiceAccountDelegates = value;
  }
  public resetImpersonateServiceAccountDelegates() {
    this._impersonateServiceAccountDelegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountDelegatesInput() {
    return this._impersonateServiceAccountDelegates
  }

  // kms_custom_endpoint - computed: false, optional: true, required: false
  private _kmsCustomEndpoint?: string;
  public get kmsCustomEndpoint() {
    return this._kmsCustomEndpoint;
  }
  public set kmsCustomEndpoint(value: string  | undefined) {
    this._kmsCustomEndpoint = value;
  }
  public resetKmsCustomEndpoint() {
    this._kmsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsCustomEndpointInput() {
    return this._kmsCustomEndpoint
  }

  // logging_custom_endpoint - computed: false, optional: true, required: false
  private _loggingCustomEndpoint?: string;
  public get loggingCustomEndpoint() {
    return this._loggingCustomEndpoint;
  }
  public set loggingCustomEndpoint(value: string  | undefined) {
    this._loggingCustomEndpoint = value;
  }
  public resetLoggingCustomEndpoint() {
    this._loggingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingCustomEndpointInput() {
    return this._loggingCustomEndpoint
  }

  // memcache_custom_endpoint - computed: false, optional: true, required: false
  private _memcacheCustomEndpoint?: string;
  public get memcacheCustomEndpoint() {
    return this._memcacheCustomEndpoint;
  }
  public set memcacheCustomEndpoint(value: string  | undefined) {
    this._memcacheCustomEndpoint = value;
  }
  public resetMemcacheCustomEndpoint() {
    this._memcacheCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheCustomEndpointInput() {
    return this._memcacheCustomEndpoint
  }

  // ml_engine_custom_endpoint - computed: false, optional: true, required: false
  private _mlEngineCustomEndpoint?: string;
  public get mlEngineCustomEndpoint() {
    return this._mlEngineCustomEndpoint;
  }
  public set mlEngineCustomEndpoint(value: string  | undefined) {
    this._mlEngineCustomEndpoint = value;
  }
  public resetMlEngineCustomEndpoint() {
    this._mlEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlEngineCustomEndpointInput() {
    return this._mlEngineCustomEndpoint
  }

  // monitoring_custom_endpoint - computed: false, optional: true, required: false
  private _monitoringCustomEndpoint?: string;
  public get monitoringCustomEndpoint() {
    return this._monitoringCustomEndpoint;
  }
  public set monitoringCustomEndpoint(value: string  | undefined) {
    this._monitoringCustomEndpoint = value;
  }
  public resetMonitoringCustomEndpoint() {
    this._monitoringCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCustomEndpointInput() {
    return this._monitoringCustomEndpoint
  }

  // network_management_custom_endpoint - computed: false, optional: true, required: false
  private _networkManagementCustomEndpoint?: string;
  public get networkManagementCustomEndpoint() {
    return this._networkManagementCustomEndpoint;
  }
  public set networkManagementCustomEndpoint(value: string  | undefined) {
    this._networkManagementCustomEndpoint = value;
  }
  public resetNetworkManagementCustomEndpoint() {
    this._networkManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkManagementCustomEndpointInput() {
    return this._networkManagementCustomEndpoint
  }

  // notebooks_custom_endpoint - computed: false, optional: true, required: false
  private _notebooksCustomEndpoint?: string;
  public get notebooksCustomEndpoint() {
    return this._notebooksCustomEndpoint;
  }
  public set notebooksCustomEndpoint(value: string  | undefined) {
    this._notebooksCustomEndpoint = value;
  }
  public resetNotebooksCustomEndpoint() {
    this._notebooksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksCustomEndpointInput() {
    return this._notebooksCustomEndpoint
  }

  // os_config_custom_endpoint - computed: false, optional: true, required: false
  private _osConfigCustomEndpoint?: string;
  public get osConfigCustomEndpoint() {
    return this._osConfigCustomEndpoint;
  }
  public set osConfigCustomEndpoint(value: string  | undefined) {
    this._osConfigCustomEndpoint = value;
  }
  public resetOsConfigCustomEndpoint() {
    this._osConfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConfigCustomEndpointInput() {
    return this._osConfigCustomEndpoint
  }

  // os_login_custom_endpoint - computed: false, optional: true, required: false
  private _osLoginCustomEndpoint?: string;
  public get osLoginCustomEndpoint() {
    return this._osLoginCustomEndpoint;
  }
  public set osLoginCustomEndpoint(value: string  | undefined) {
    this._osLoginCustomEndpoint = value;
  }
  public resetOsLoginCustomEndpoint() {
    this._osLoginCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osLoginCustomEndpointInput() {
    return this._osLoginCustomEndpoint
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string  | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // pubsub_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubCustomEndpoint?: string;
  public get pubsubCustomEndpoint() {
    return this._pubsubCustomEndpoint;
  }
  public set pubsubCustomEndpoint(value: string  | undefined) {
    this._pubsubCustomEndpoint = value;
  }
  public resetPubsubCustomEndpoint() {
    this._pubsubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubCustomEndpointInput() {
    return this._pubsubCustomEndpoint
  }

  // pubsub_lite_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubLiteCustomEndpoint?: string;
  public get pubsubLiteCustomEndpoint() {
    return this._pubsubLiteCustomEndpoint;
  }
  public set pubsubLiteCustomEndpoint(value: string  | undefined) {
    this._pubsubLiteCustomEndpoint = value;
  }
  public resetPubsubLiteCustomEndpoint() {
    this._pubsubLiteCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubLiteCustomEndpointInput() {
    return this._pubsubLiteCustomEndpoint
  }

  // redis_custom_endpoint - computed: false, optional: true, required: false
  private _redisCustomEndpoint?: string;
  public get redisCustomEndpoint() {
    return this._redisCustomEndpoint;
  }
  public set redisCustomEndpoint(value: string  | undefined) {
    this._redisCustomEndpoint = value;
  }
  public resetRedisCustomEndpoint() {
    this._redisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCustomEndpointInput() {
    return this._redisCustomEndpoint
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string  | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string;
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string  | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout
  }

  // resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerCustomEndpoint?: string;
  public get resourceManagerCustomEndpoint() {
    return this._resourceManagerCustomEndpoint;
  }
  public set resourceManagerCustomEndpoint(value: string  | undefined) {
    this._resourceManagerCustomEndpoint = value;
  }
  public resetResourceManagerCustomEndpoint() {
    this._resourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerCustomEndpointInput() {
    return this._resourceManagerCustomEndpoint
  }

  // resource_manager_v2_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerV2CustomEndpoint?: string;
  public get resourceManagerV2CustomEndpoint() {
    return this._resourceManagerV2CustomEndpoint;
  }
  public set resourceManagerV2CustomEndpoint(value: string  | undefined) {
    this._resourceManagerV2CustomEndpoint = value;
  }
  public resetResourceManagerV2CustomEndpoint() {
    this._resourceManagerV2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerV2CustomEndpointInput() {
    return this._resourceManagerV2CustomEndpoint
  }

  // runtime_config_custom_endpoint - computed: false, optional: true, required: false
  private _runtimeConfigCustomEndpoint?: string;
  public get runtimeConfigCustomEndpoint() {
    return this._runtimeConfigCustomEndpoint;
  }
  public set runtimeConfigCustomEndpoint(value: string  | undefined) {
    this._runtimeConfigCustomEndpoint = value;
  }
  public resetRuntimeConfigCustomEndpoint() {
    this._runtimeConfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigCustomEndpointInput() {
    return this._runtimeConfigCustomEndpoint
  }

  // runtimeconfig_custom_endpoint - computed: false, optional: true, required: false
  private _runtimeconfigCustomEndpoint?: string;
  public get runtimeconfigCustomEndpoint() {
    return this._runtimeconfigCustomEndpoint;
  }
  public set runtimeconfigCustomEndpoint(value: string  | undefined) {
    this._runtimeconfigCustomEndpoint = value;
  }
  public resetRuntimeconfigCustomEndpoint() {
    this._runtimeconfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeconfigCustomEndpointInput() {
    return this._runtimeconfigCustomEndpoint
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[];
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[]  | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes
  }

  // secret_manager_custom_endpoint - computed: false, optional: true, required: false
  private _secretManagerCustomEndpoint?: string;
  public get secretManagerCustomEndpoint() {
    return this._secretManagerCustomEndpoint;
  }
  public set secretManagerCustomEndpoint(value: string  | undefined) {
    this._secretManagerCustomEndpoint = value;
  }
  public resetSecretManagerCustomEndpoint() {
    this._secretManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerCustomEndpointInput() {
    return this._secretManagerCustomEndpoint
  }

  // security_center_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterCustomEndpoint?: string;
  public get securityCenterCustomEndpoint() {
    return this._securityCenterCustomEndpoint;
  }
  public set securityCenterCustomEndpoint(value: string  | undefined) {
    this._securityCenterCustomEndpoint = value;
  }
  public resetSecurityCenterCustomEndpoint() {
    this._securityCenterCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCenterCustomEndpointInput() {
    return this._securityCenterCustomEndpoint
  }

  // service_management_custom_endpoint - computed: false, optional: true, required: false
  private _serviceManagementCustomEndpoint?: string;
  public get serviceManagementCustomEndpoint() {
    return this._serviceManagementCustomEndpoint;
  }
  public set serviceManagementCustomEndpoint(value: string  | undefined) {
    this._serviceManagementCustomEndpoint = value;
  }
  public resetServiceManagementCustomEndpoint() {
    this._serviceManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagementCustomEndpointInput() {
    return this._serviceManagementCustomEndpoint
  }

  // service_networking_custom_endpoint - computed: false, optional: true, required: false
  private _serviceNetworkingCustomEndpoint?: string;
  public get serviceNetworkingCustomEndpoint() {
    return this._serviceNetworkingCustomEndpoint;
  }
  public set serviceNetworkingCustomEndpoint(value: string  | undefined) {
    this._serviceNetworkingCustomEndpoint = value;
  }
  public resetServiceNetworkingCustomEndpoint() {
    this._serviceNetworkingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingCustomEndpointInput() {
    return this._serviceNetworkingCustomEndpoint
  }

  // service_usage_custom_endpoint - computed: false, optional: true, required: false
  private _serviceUsageCustomEndpoint?: string;
  public get serviceUsageCustomEndpoint() {
    return this._serviceUsageCustomEndpoint;
  }
  public set serviceUsageCustomEndpoint(value: string  | undefined) {
    this._serviceUsageCustomEndpoint = value;
  }
  public resetServiceUsageCustomEndpoint() {
    this._serviceUsageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUsageCustomEndpointInput() {
    return this._serviceUsageCustomEndpoint
  }

  // source_repo_custom_endpoint - computed: false, optional: true, required: false
  private _sourceRepoCustomEndpoint?: string;
  public get sourceRepoCustomEndpoint() {
    return this._sourceRepoCustomEndpoint;
  }
  public set sourceRepoCustomEndpoint(value: string  | undefined) {
    this._sourceRepoCustomEndpoint = value;
  }
  public resetSourceRepoCustomEndpoint() {
    this._sourceRepoCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepoCustomEndpointInput() {
    return this._sourceRepoCustomEndpoint
  }

  // spanner_custom_endpoint - computed: false, optional: true, required: false
  private _spannerCustomEndpoint?: string;
  public get spannerCustomEndpoint() {
    return this._spannerCustomEndpoint;
  }
  public set spannerCustomEndpoint(value: string  | undefined) {
    this._spannerCustomEndpoint = value;
  }
  public resetSpannerCustomEndpoint() {
    this._spannerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerCustomEndpointInput() {
    return this._spannerCustomEndpoint
  }

  // sql_custom_endpoint - computed: false, optional: true, required: false
  private _sqlCustomEndpoint?: string;
  public get sqlCustomEndpoint() {
    return this._sqlCustomEndpoint;
  }
  public set sqlCustomEndpoint(value: string  | undefined) {
    this._sqlCustomEndpoint = value;
  }
  public resetSqlCustomEndpoint() {
    this._sqlCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCustomEndpointInput() {
    return this._sqlCustomEndpoint
  }

  // storage_custom_endpoint - computed: false, optional: true, required: false
  private _storageCustomEndpoint?: string;
  public get storageCustomEndpoint() {
    return this._storageCustomEndpoint;
  }
  public set storageCustomEndpoint(value: string  | undefined) {
    this._storageCustomEndpoint = value;
  }
  public resetStorageCustomEndpoint() {
    this._storageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCustomEndpointInput() {
    return this._storageCustomEndpoint
  }

  // storage_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _storageTransferCustomEndpoint?: string;
  public get storageTransferCustomEndpoint() {
    return this._storageTransferCustomEndpoint;
  }
  public set storageTransferCustomEndpoint(value: string  | undefined) {
    this._storageTransferCustomEndpoint = value;
  }
  public resetStorageTransferCustomEndpoint() {
    this._storageTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTransferCustomEndpointInput() {
    return this._storageTransferCustomEndpoint
  }

  // tags_custom_endpoint - computed: false, optional: true, required: false
  private _tagsCustomEndpoint?: string;
  public get tagsCustomEndpoint() {
    return this._tagsCustomEndpoint;
  }
  public set tagsCustomEndpoint(value: string  | undefined) {
    this._tagsCustomEndpoint = value;
  }
  public resetTagsCustomEndpoint() {
    this._tagsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsCustomEndpointInput() {
    return this._tagsCustomEndpoint
  }

  // tpu_custom_endpoint - computed: false, optional: true, required: false
  private _tpuCustomEndpoint?: string;
  public get tpuCustomEndpoint() {
    return this._tpuCustomEndpoint;
  }
  public set tpuCustomEndpoint(value: string  | undefined) {
    this._tpuCustomEndpoint = value;
  }
  public resetTpuCustomEndpoint() {
    this._tpuCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuCustomEndpointInput() {
    return this._tpuCustomEndpoint
  }

  // user_project_override - computed: false, optional: true, required: false
  private _userProjectOverride?: boolean;
  public get userProjectOverride() {
    return this._userProjectOverride;
  }
  public set userProjectOverride(value: boolean  | undefined) {
    this._userProjectOverride = value;
  }
  public resetUserProjectOverride() {
    this._userProjectOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProjectOverrideInput() {
    return this._userProjectOverride
  }

  // vpc_access_custom_endpoint - computed: false, optional: true, required: false
  private _vpcAccessCustomEndpoint?: string;
  public get vpcAccessCustomEndpoint() {
    return this._vpcAccessCustomEndpoint;
  }
  public set vpcAccessCustomEndpoint(value: string  | undefined) {
    this._vpcAccessCustomEndpoint = value;
  }
  public resetVpcAccessCustomEndpoint() {
    this._vpcAccessCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessCustomEndpointInput() {
    return this._vpcAccessCustomEndpoint
  }

  // workflows_custom_endpoint - computed: false, optional: true, required: false
  private _workflowsCustomEndpoint?: string;
  public get workflowsCustomEndpoint() {
    return this._workflowsCustomEndpoint;
  }
  public set workflowsCustomEndpoint(value: string  | undefined) {
    this._workflowsCustomEndpoint = value;
  }
  public resetWorkflowsCustomEndpoint() {
    this._workflowsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsCustomEndpointInput() {
    return this._workflowsCustomEndpoint
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string  | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // batching - computed: false, optional: true, required: false
  private _batching?: GoogleProviderBatching[];
  public get batching() {
    return this._batching;
  }
  public set batching(value: GoogleProviderBatching[]  | undefined) {
    this._batching = value;
  }
  public resetBatching() {
    this._batching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingInput() {
    return this._batching
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_approval_custom_endpoint: cdktf.stringToTerraform(this._accessApprovalCustomEndpoint),
      access_context_manager_custom_endpoint: cdktf.stringToTerraform(this._accessContextManagerCustomEndpoint),
      access_token: cdktf.stringToTerraform(this._accessToken),
      active_directory_custom_endpoint: cdktf.stringToTerraform(this._activeDirectoryCustomEndpoint),
      apigee_custom_endpoint: cdktf.stringToTerraform(this._apigeeCustomEndpoint),
      app_engine_custom_endpoint: cdktf.stringToTerraform(this._appEngineCustomEndpoint),
      big_query_custom_endpoint: cdktf.stringToTerraform(this._bigQueryCustomEndpoint),
      bigquery_data_transfer_custom_endpoint: cdktf.stringToTerraform(this._bigqueryDataTransferCustomEndpoint),
      bigquery_reservation_custom_endpoint: cdktf.stringToTerraform(this._bigqueryReservationCustomEndpoint),
      bigtable_custom_endpoint: cdktf.stringToTerraform(this._bigtableCustomEndpoint),
      billing_custom_endpoint: cdktf.stringToTerraform(this._billingCustomEndpoint),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      binary_authorization_custom_endpoint: cdktf.stringToTerraform(this._binaryAuthorizationCustomEndpoint),
      cloud_asset_custom_endpoint: cdktf.stringToTerraform(this._cloudAssetCustomEndpoint),
      cloud_billing_custom_endpoint: cdktf.stringToTerraform(this._cloudBillingCustomEndpoint),
      cloud_build_custom_endpoint: cdktf.stringToTerraform(this._cloudBuildCustomEndpoint),
      cloud_functions_custom_endpoint: cdktf.stringToTerraform(this._cloudFunctionsCustomEndpoint),
      cloud_identity_custom_endpoint: cdktf.stringToTerraform(this._cloudIdentityCustomEndpoint),
      cloud_iot_custom_endpoint: cdktf.stringToTerraform(this._cloudIotCustomEndpoint),
      cloud_run_custom_endpoint: cdktf.stringToTerraform(this._cloudRunCustomEndpoint),
      cloud_scheduler_custom_endpoint: cdktf.stringToTerraform(this._cloudSchedulerCustomEndpoint),
      cloud_tasks_custom_endpoint: cdktf.stringToTerraform(this._cloudTasksCustomEndpoint),
      composer_custom_endpoint: cdktf.stringToTerraform(this._composerCustomEndpoint),
      compute_beta_custom_endpoint: cdktf.stringToTerraform(this._computeBetaCustomEndpoint),
      compute_custom_endpoint: cdktf.stringToTerraform(this._computeCustomEndpoint),
      container_analysis_custom_endpoint: cdktf.stringToTerraform(this._containerAnalysisCustomEndpoint),
      container_beta_custom_endpoint: cdktf.stringToTerraform(this._containerBetaCustomEndpoint),
      container_custom_endpoint: cdktf.stringToTerraform(this._containerCustomEndpoint),
      credentials: cdktf.stringToTerraform(this._credentials),
      data_catalog_custom_endpoint: cdktf.stringToTerraform(this._dataCatalogCustomEndpoint),
      data_loss_prevention_custom_endpoint: cdktf.stringToTerraform(this._dataLossPreventionCustomEndpoint),
      dataflow_custom_endpoint: cdktf.stringToTerraform(this._dataflowCustomEndpoint),
      dataproc_beta_custom_endpoint: cdktf.stringToTerraform(this._dataprocBetaCustomEndpoint),
      dataproc_custom_endpoint: cdktf.stringToTerraform(this._dataprocCustomEndpoint),
      datastore_custom_endpoint: cdktf.stringToTerraform(this._datastoreCustomEndpoint),
      deployment_manager_custom_endpoint: cdktf.stringToTerraform(this._deploymentManagerCustomEndpoint),
      dialogflow_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCustomEndpoint),
      dns_custom_endpoint: cdktf.stringToTerraform(this._dnsCustomEndpoint),
      eventarc_custom_endpoint: cdktf.stringToTerraform(this._eventarcCustomEndpoint),
      filestore_custom_endpoint: cdktf.stringToTerraform(this._filestoreCustomEndpoint),
      firestore_custom_endpoint: cdktf.stringToTerraform(this._firestoreCustomEndpoint),
      game_services_custom_endpoint: cdktf.stringToTerraform(this._gameServicesCustomEndpoint),
      healthcare_custom_endpoint: cdktf.stringToTerraform(this._healthcareCustomEndpoint),
      iam_credentials_custom_endpoint: cdktf.stringToTerraform(this._iamCredentialsCustomEndpoint),
      iam_custom_endpoint: cdktf.stringToTerraform(this._iamCustomEndpoint),
      iap_custom_endpoint: cdktf.stringToTerraform(this._iapCustomEndpoint),
      identity_platform_custom_endpoint: cdktf.stringToTerraform(this._identityPlatformCustomEndpoint),
      impersonate_service_account: cdktf.stringToTerraform(this._impersonateServiceAccount),
      impersonate_service_account_delegates: cdktf.listMapper(cdktf.stringToTerraform)(this._impersonateServiceAccountDelegates),
      kms_custom_endpoint: cdktf.stringToTerraform(this._kmsCustomEndpoint),
      logging_custom_endpoint: cdktf.stringToTerraform(this._loggingCustomEndpoint),
      memcache_custom_endpoint: cdktf.stringToTerraform(this._memcacheCustomEndpoint),
      ml_engine_custom_endpoint: cdktf.stringToTerraform(this._mlEngineCustomEndpoint),
      monitoring_custom_endpoint: cdktf.stringToTerraform(this._monitoringCustomEndpoint),
      network_management_custom_endpoint: cdktf.stringToTerraform(this._networkManagementCustomEndpoint),
      notebooks_custom_endpoint: cdktf.stringToTerraform(this._notebooksCustomEndpoint),
      os_config_custom_endpoint: cdktf.stringToTerraform(this._osConfigCustomEndpoint),
      os_login_custom_endpoint: cdktf.stringToTerraform(this._osLoginCustomEndpoint),
      project: cdktf.stringToTerraform(this._project),
      pubsub_custom_endpoint: cdktf.stringToTerraform(this._pubsubCustomEndpoint),
      pubsub_lite_custom_endpoint: cdktf.stringToTerraform(this._pubsubLiteCustomEndpoint),
      redis_custom_endpoint: cdktf.stringToTerraform(this._redisCustomEndpoint),
      region: cdktf.stringToTerraform(this._region),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      resource_manager_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerCustomEndpoint),
      resource_manager_v2_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerV2CustomEndpoint),
      runtime_config_custom_endpoint: cdktf.stringToTerraform(this._runtimeConfigCustomEndpoint),
      runtimeconfig_custom_endpoint: cdktf.stringToTerraform(this._runtimeconfigCustomEndpoint),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
      secret_manager_custom_endpoint: cdktf.stringToTerraform(this._secretManagerCustomEndpoint),
      security_center_custom_endpoint: cdktf.stringToTerraform(this._securityCenterCustomEndpoint),
      service_management_custom_endpoint: cdktf.stringToTerraform(this._serviceManagementCustomEndpoint),
      service_networking_custom_endpoint: cdktf.stringToTerraform(this._serviceNetworkingCustomEndpoint),
      service_usage_custom_endpoint: cdktf.stringToTerraform(this._serviceUsageCustomEndpoint),
      source_repo_custom_endpoint: cdktf.stringToTerraform(this._sourceRepoCustomEndpoint),
      spanner_custom_endpoint: cdktf.stringToTerraform(this._spannerCustomEndpoint),
      sql_custom_endpoint: cdktf.stringToTerraform(this._sqlCustomEndpoint),
      storage_custom_endpoint: cdktf.stringToTerraform(this._storageCustomEndpoint),
      storage_transfer_custom_endpoint: cdktf.stringToTerraform(this._storageTransferCustomEndpoint),
      tags_custom_endpoint: cdktf.stringToTerraform(this._tagsCustomEndpoint),
      tpu_custom_endpoint: cdktf.stringToTerraform(this._tpuCustomEndpoint),
      user_project_override: cdktf.booleanToTerraform(this._userProjectOverride),
      vpc_access_custom_endpoint: cdktf.stringToTerraform(this._vpcAccessCustomEndpoint),
      workflows_custom_endpoint: cdktf.stringToTerraform(this._workflowsCustomEndpoint),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
      batching: cdktf.listMapper(googleProviderBatchingToTerraform)(this._batching),
    };
  }
}
