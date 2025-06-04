# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProvider <a name="GoogleProvider" id="@cdktf/provider-google.provider.GoogleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs google}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.provider.GoogleProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

provider.NewGoogleProvider(scope Construct, id *string, config GoogleProviderConfig) GoogleProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig">GoogleProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderConfig">GoogleProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint">ResetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint">ResetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint">ResetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel">ResetAddTerraformAttributionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint">ResetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint">ResetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint">ResetApihubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint">ResetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint">ResetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint">ResetApphubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint">ResetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint">ResetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint">ResetBackupDrCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBatching">ResetBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint">ResetBeyondcorpCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint">ResetBiglakeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint">ResetBigqueryAnalyticsHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint">ResetBigqueryConnectionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint">ResetBigQueryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint">ResetBigqueryDatapolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint">ResetBigqueryDataTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint">ResetBigqueryReservationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint">ResetBigtableCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint">ResetBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBillingProject">ResetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint">ResetBinaryAuthorizationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint">ResetBlockchainNodeEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint">ResetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint">ResetChronicleCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint">ResetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint">ResetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint">ResetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint">ResetCloudbuildv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint">ResetCloudBuildWorkerPoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint">ResetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint">ResetClouddomainsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint">ResetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint">ResetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint">ResetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint">ResetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint">ResetCloudQuotasCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint">ResetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint">ResetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint">ResetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint">ResetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint">ResetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetColabCustomEndpoint">ResetColabCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint">ResetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint">ResetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint">ResetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint">ResetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint">ResetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint">ResetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint">ResetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint">ResetCoreBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint">ResetDatabaseMigrationServiceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint">ResetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint">ResetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint">ResetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint">ResetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint">ResetDataPipelineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint">ResetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint">ResetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint">ResetDataprocGdcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint">ResetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint">ResetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels">ResetDefaultLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint">ResetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint">ResetDeveloperConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint">ResetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint">ResetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint">ResetDiscoveryEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint">ResetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint">ResetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint">ResetDocumentAiWarehouseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint">ResetEdgecontainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint">ResetEdgenetworkCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint">ResetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint">ResetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetExternalCredentials">ResetExternalCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint">ResetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint">ResetFirebaseAppCheckCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint">ResetFirebaseAppHostingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint">ResetFirebaseDataConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint">ResetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint">ResetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint">ResetGeminiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint">ResetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint">ResetGkeHub2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint">ResetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkehubFeatureCustomEndpoint">ResetGkehubFeatureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint">ResetGkeonpremCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint">ResetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint">ResetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint">ResetIam3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint">ResetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint">ResetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint">ResetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint">ResetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint">ResetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint">ResetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount">ResetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates">ResetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint">ResetIntegrationConnectorsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint">ResetIntegrationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint">ResetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint">ResetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint">ResetLookerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint">ResetLustreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint">ResetManagedKafkaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint">ResetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint">ResetMemorystoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint">ResetMigrationCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint">ResetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint">ResetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint">ResetNetappCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint">ResetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint">ResetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint">ResetNetworkSecurityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint">ResetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint">ResetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint">ResetOracleDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint">ResetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint">ResetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint">ResetOsConfigV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint">ResetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint">ResetParallelstoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint">ResetParameterManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint">ResetParameterManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint">ResetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint">ResetPrivilegedAccessManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint">ResetPublicCaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint">ResetPubsubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint">ResetPubsubLiteCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint">ResetRecaptchaEnterpriseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint">ResetRedisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRequestReason">ResetRequestReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint">ResetResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint">ResetResourceManagerV3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint">ResetSecretManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint">ResetSecretManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint">ResetSecureSourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint">ResetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint">ResetSecurityCenterManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint">ResetSecurityCenterV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint">ResetSecuritypostureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint">ResetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint">ResetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint">ResetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint">ResetSiteVerificationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint">ResetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint">ResetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint">ResetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint">ResetStorageBatchOperationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint">ResetStorageControlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint">ResetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint">ResetStorageInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint">ResetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint">ResetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint">ResetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy">ResetTerraformAttributionLabelAdditionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint">ResetTpuCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint">ResetTranscoderCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain">ResetUniverseDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride">ResetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint">ResetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint">ResetVmwareengineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint">ResetVpcAccessCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint">ResetWorkbenchCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint">ResetWorkflowsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.provider.GoogleProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.provider.GoogleProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.provider.GoogleProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.provider.GoogleProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.provider.GoogleProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccessApprovalCustomEndpoint` <a name="ResetAccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint"></a>

```go
func ResetAccessApprovalCustomEndpoint()
```

##### `ResetAccessContextManagerCustomEndpoint` <a name="ResetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint"></a>

```go
func ResetAccessContextManagerCustomEndpoint()
```

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetActiveDirectoryCustomEndpoint` <a name="ResetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint"></a>

```go
func ResetActiveDirectoryCustomEndpoint()
```

##### `ResetAddTerraformAttributionLabel` <a name="ResetAddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel"></a>

```go
func ResetAddTerraformAttributionLabel()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-google.provider.GoogleProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAlloydbCustomEndpoint` <a name="ResetAlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint"></a>

```go
func ResetAlloydbCustomEndpoint()
```

##### `ResetApigeeCustomEndpoint` <a name="ResetApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint"></a>

```go
func ResetApigeeCustomEndpoint()
```

##### `ResetApihubCustomEndpoint` <a name="ResetApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint"></a>

```go
func ResetApihubCustomEndpoint()
```

##### `ResetApikeysCustomEndpoint` <a name="ResetApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint"></a>

```go
func ResetApikeysCustomEndpoint()
```

##### `ResetAppEngineCustomEndpoint` <a name="ResetAppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint"></a>

```go
func ResetAppEngineCustomEndpoint()
```

##### `ResetApphubCustomEndpoint` <a name="ResetApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint"></a>

```go
func ResetApphubCustomEndpoint()
```

##### `ResetArtifactRegistryCustomEndpoint` <a name="ResetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint"></a>

```go
func ResetArtifactRegistryCustomEndpoint()
```

##### `ResetAssuredWorkloadsCustomEndpoint` <a name="ResetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```go
func ResetAssuredWorkloadsCustomEndpoint()
```

##### `ResetBackupDrCustomEndpoint` <a name="ResetBackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint"></a>

```go
func ResetBackupDrCustomEndpoint()
```

##### `ResetBatching` <a name="ResetBatching" id="@cdktf/provider-google.provider.GoogleProvider.resetBatching"></a>

```go
func ResetBatching()
```

##### `ResetBeyondcorpCustomEndpoint` <a name="ResetBeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint"></a>

```go
func ResetBeyondcorpCustomEndpoint()
```

##### `ResetBiglakeCustomEndpoint` <a name="ResetBiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint"></a>

```go
func ResetBiglakeCustomEndpoint()
```

##### `ResetBigqueryAnalyticsHubCustomEndpoint` <a name="ResetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```go
func ResetBigqueryAnalyticsHubCustomEndpoint()
```

##### `ResetBigqueryConnectionCustomEndpoint` <a name="ResetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint"></a>

```go
func ResetBigqueryConnectionCustomEndpoint()
```

##### `ResetBigQueryCustomEndpoint` <a name="ResetBigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint"></a>

```go
func ResetBigQueryCustomEndpoint()
```

##### `ResetBigqueryDatapolicyCustomEndpoint` <a name="ResetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```go
func ResetBigqueryDatapolicyCustomEndpoint()
```

##### `ResetBigqueryDataTransferCustomEndpoint` <a name="ResetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```go
func ResetBigqueryDataTransferCustomEndpoint()
```

##### `ResetBigqueryReservationCustomEndpoint` <a name="ResetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint"></a>

```go
func ResetBigqueryReservationCustomEndpoint()
```

##### `ResetBigtableCustomEndpoint` <a name="ResetBigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint"></a>

```go
func ResetBigtableCustomEndpoint()
```

##### `ResetBillingCustomEndpoint` <a name="ResetBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint"></a>

```go
func ResetBillingCustomEndpoint()
```

##### `ResetBillingProject` <a name="ResetBillingProject" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingProject"></a>

```go
func ResetBillingProject()
```

##### `ResetBinaryAuthorizationCustomEndpoint` <a name="ResetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```go
func ResetBinaryAuthorizationCustomEndpoint()
```

##### `ResetBlockchainNodeEngineCustomEndpoint` <a name="ResetBlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```go
func ResetBlockchainNodeEngineCustomEndpoint()
```

##### `ResetCertificateManagerCustomEndpoint` <a name="ResetCertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint"></a>

```go
func ResetCertificateManagerCustomEndpoint()
```

##### `ResetChronicleCustomEndpoint` <a name="ResetChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint"></a>

```go
func ResetChronicleCustomEndpoint()
```

##### `ResetCloudAssetCustomEndpoint` <a name="ResetCloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint"></a>

```go
func ResetCloudAssetCustomEndpoint()
```

##### `ResetCloudBillingCustomEndpoint` <a name="ResetCloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint"></a>

```go
func ResetCloudBillingCustomEndpoint()
```

##### `ResetCloudBuildCustomEndpoint` <a name="ResetCloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint"></a>

```go
func ResetCloudBuildCustomEndpoint()
```

##### `ResetCloudbuildv2CustomEndpoint` <a name="ResetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint"></a>

```go
func ResetCloudbuildv2CustomEndpoint()
```

##### `ResetCloudBuildWorkerPoolCustomEndpoint` <a name="ResetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```go
func ResetCloudBuildWorkerPoolCustomEndpoint()
```

##### `ResetClouddeployCustomEndpoint` <a name="ResetClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint"></a>

```go
func ResetClouddeployCustomEndpoint()
```

##### `ResetClouddomainsCustomEndpoint` <a name="ResetClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint"></a>

```go
func ResetClouddomainsCustomEndpoint()
```

##### `ResetCloudfunctions2CustomEndpoint` <a name="ResetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint"></a>

```go
func ResetCloudfunctions2CustomEndpoint()
```

##### `ResetCloudFunctionsCustomEndpoint` <a name="ResetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint"></a>

```go
func ResetCloudFunctionsCustomEndpoint()
```

##### `ResetCloudIdentityCustomEndpoint` <a name="ResetCloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint"></a>

```go
func ResetCloudIdentityCustomEndpoint()
```

##### `ResetCloudIdsCustomEndpoint` <a name="ResetCloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint"></a>

```go
func ResetCloudIdsCustomEndpoint()
```

##### `ResetCloudQuotasCustomEndpoint` <a name="ResetCloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint"></a>

```go
func ResetCloudQuotasCustomEndpoint()
```

##### `ResetCloudResourceManagerCustomEndpoint` <a name="ResetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint"></a>

```go
func ResetCloudResourceManagerCustomEndpoint()
```

##### `ResetCloudRunCustomEndpoint` <a name="ResetCloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint"></a>

```go
func ResetCloudRunCustomEndpoint()
```

##### `ResetCloudRunV2CustomEndpoint` <a name="ResetCloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint"></a>

```go
func ResetCloudRunV2CustomEndpoint()
```

##### `ResetCloudSchedulerCustomEndpoint` <a name="ResetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint"></a>

```go
func ResetCloudSchedulerCustomEndpoint()
```

##### `ResetCloudTasksCustomEndpoint` <a name="ResetCloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint"></a>

```go
func ResetCloudTasksCustomEndpoint()
```

##### `ResetColabCustomEndpoint` <a name="ResetColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetColabCustomEndpoint"></a>

```go
func ResetColabCustomEndpoint()
```

##### `ResetComposerCustomEndpoint` <a name="ResetComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint"></a>

```go
func ResetComposerCustomEndpoint()
```

##### `ResetComputeCustomEndpoint` <a name="ResetComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint"></a>

```go
func ResetComputeCustomEndpoint()
```

##### `ResetContainerAnalysisCustomEndpoint` <a name="ResetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint"></a>

```go
func ResetContainerAnalysisCustomEndpoint()
```

##### `ResetContainerAttachedCustomEndpoint` <a name="ResetContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint"></a>

```go
func ResetContainerAttachedCustomEndpoint()
```

##### `ResetContainerAwsCustomEndpoint` <a name="ResetContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint"></a>

```go
func ResetContainerAwsCustomEndpoint()
```

##### `ResetContainerAzureCustomEndpoint` <a name="ResetContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint"></a>

```go
func ResetContainerAzureCustomEndpoint()
```

##### `ResetContainerCustomEndpoint` <a name="ResetContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint"></a>

```go
func ResetContainerCustomEndpoint()
```

##### `ResetCoreBillingCustomEndpoint` <a name="ResetCoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint"></a>

```go
func ResetCoreBillingCustomEndpoint()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDatabaseMigrationServiceCustomEndpoint` <a name="ResetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```go
func ResetDatabaseMigrationServiceCustomEndpoint()
```

##### `ResetDataCatalogCustomEndpoint` <a name="ResetDataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint"></a>

```go
func ResetDataCatalogCustomEndpoint()
```

##### `ResetDataflowCustomEndpoint` <a name="ResetDataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint"></a>

```go
func ResetDataflowCustomEndpoint()
```

##### `ResetDataFusionCustomEndpoint` <a name="ResetDataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint"></a>

```go
func ResetDataFusionCustomEndpoint()
```

##### `ResetDataLossPreventionCustomEndpoint` <a name="ResetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint"></a>

```go
func ResetDataLossPreventionCustomEndpoint()
```

##### `ResetDataPipelineCustomEndpoint` <a name="ResetDataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint"></a>

```go
func ResetDataPipelineCustomEndpoint()
```

##### `ResetDataplexCustomEndpoint` <a name="ResetDataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint"></a>

```go
func ResetDataplexCustomEndpoint()
```

##### `ResetDataprocCustomEndpoint` <a name="ResetDataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint"></a>

```go
func ResetDataprocCustomEndpoint()
```

##### `ResetDataprocGdcCustomEndpoint` <a name="ResetDataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint"></a>

```go
func ResetDataprocGdcCustomEndpoint()
```

##### `ResetDataprocMetastoreCustomEndpoint` <a name="ResetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint"></a>

```go
func ResetDataprocMetastoreCustomEndpoint()
```

##### `ResetDatastreamCustomEndpoint` <a name="ResetDatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint"></a>

```go
func ResetDatastreamCustomEndpoint()
```

##### `ResetDefaultLabels` <a name="ResetDefaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels"></a>

```go
func ResetDefaultLabels()
```

##### `ResetDeploymentManagerCustomEndpoint` <a name="ResetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint"></a>

```go
func ResetDeploymentManagerCustomEndpoint()
```

##### `ResetDeveloperConnectCustomEndpoint` <a name="ResetDeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint"></a>

```go
func ResetDeveloperConnectCustomEndpoint()
```

##### `ResetDialogflowCustomEndpoint` <a name="ResetDialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint"></a>

```go
func ResetDialogflowCustomEndpoint()
```

##### `ResetDialogflowCxCustomEndpoint` <a name="ResetDialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint"></a>

```go
func ResetDialogflowCxCustomEndpoint()
```

##### `ResetDiscoveryEngineCustomEndpoint` <a name="ResetDiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint"></a>

```go
func ResetDiscoveryEngineCustomEndpoint()
```

##### `ResetDnsCustomEndpoint` <a name="ResetDnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint"></a>

```go
func ResetDnsCustomEndpoint()
```

##### `ResetDocumentAiCustomEndpoint` <a name="ResetDocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint"></a>

```go
func ResetDocumentAiCustomEndpoint()
```

##### `ResetDocumentAiWarehouseCustomEndpoint` <a name="ResetDocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```go
func ResetDocumentAiWarehouseCustomEndpoint()
```

##### `ResetEdgecontainerCustomEndpoint` <a name="ResetEdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint"></a>

```go
func ResetEdgecontainerCustomEndpoint()
```

##### `ResetEdgenetworkCustomEndpoint` <a name="ResetEdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint"></a>

```go
func ResetEdgenetworkCustomEndpoint()
```

##### `ResetEssentialContactsCustomEndpoint` <a name="ResetEssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint"></a>

```go
func ResetEssentialContactsCustomEndpoint()
```

##### `ResetEventarcCustomEndpoint` <a name="ResetEventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint"></a>

```go
func ResetEventarcCustomEndpoint()
```

##### `ResetExternalCredentials` <a name="ResetExternalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetExternalCredentials"></a>

```go
func ResetExternalCredentials()
```

##### `ResetFilestoreCustomEndpoint` <a name="ResetFilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint"></a>

```go
func ResetFilestoreCustomEndpoint()
```

##### `ResetFirebaseAppCheckCustomEndpoint` <a name="ResetFirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```go
func ResetFirebaseAppCheckCustomEndpoint()
```

##### `ResetFirebaseAppHostingCustomEndpoint` <a name="ResetFirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint"></a>

```go
func ResetFirebaseAppHostingCustomEndpoint()
```

##### `ResetFirebaseDataConnectCustomEndpoint` <a name="ResetFirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint"></a>

```go
func ResetFirebaseDataConnectCustomEndpoint()
```

##### `ResetFirebaserulesCustomEndpoint` <a name="ResetFirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint"></a>

```go
func ResetFirebaserulesCustomEndpoint()
```

##### `ResetFirestoreCustomEndpoint` <a name="ResetFirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint"></a>

```go
func ResetFirestoreCustomEndpoint()
```

##### `ResetGeminiCustomEndpoint` <a name="ResetGeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint"></a>

```go
func ResetGeminiCustomEndpoint()
```

##### `ResetGkeBackupCustomEndpoint` <a name="ResetGkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint"></a>

```go
func ResetGkeBackupCustomEndpoint()
```

##### `ResetGkeHub2CustomEndpoint` <a name="ResetGkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint"></a>

```go
func ResetGkeHub2CustomEndpoint()
```

##### `ResetGkeHubCustomEndpoint` <a name="ResetGkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint"></a>

```go
func ResetGkeHubCustomEndpoint()
```

##### `ResetGkehubFeatureCustomEndpoint` <a name="ResetGkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkehubFeatureCustomEndpoint"></a>

```go
func ResetGkehubFeatureCustomEndpoint()
```

##### `ResetGkeonpremCustomEndpoint` <a name="ResetGkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint"></a>

```go
func ResetGkeonpremCustomEndpoint()
```

##### `ResetHealthcareCustomEndpoint` <a name="ResetHealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint"></a>

```go
func ResetHealthcareCustomEndpoint()
```

##### `ResetIam2CustomEndpoint` <a name="ResetIam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint"></a>

```go
func ResetIam2CustomEndpoint()
```

##### `ResetIam3CustomEndpoint` <a name="ResetIam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint"></a>

```go
func ResetIam3CustomEndpoint()
```

##### `ResetIamBetaCustomEndpoint` <a name="ResetIamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint"></a>

```go
func ResetIamBetaCustomEndpoint()
```

##### `ResetIamCredentialsCustomEndpoint` <a name="ResetIamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint"></a>

```go
func ResetIamCredentialsCustomEndpoint()
```

##### `ResetIamCustomEndpoint` <a name="ResetIamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint"></a>

```go
func ResetIamCustomEndpoint()
```

##### `ResetIamWorkforcePoolCustomEndpoint` <a name="ResetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```go
func ResetIamWorkforcePoolCustomEndpoint()
```

##### `ResetIapCustomEndpoint` <a name="ResetIapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint"></a>

```go
func ResetIapCustomEndpoint()
```

##### `ResetIdentityPlatformCustomEndpoint` <a name="ResetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint"></a>

```go
func ResetIdentityPlatformCustomEndpoint()
```

##### `ResetImpersonateServiceAccount` <a name="ResetImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount"></a>

```go
func ResetImpersonateServiceAccount()
```

##### `ResetImpersonateServiceAccountDelegates` <a name="ResetImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates"></a>

```go
func ResetImpersonateServiceAccountDelegates()
```

##### `ResetIntegrationConnectorsCustomEndpoint` <a name="ResetIntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```go
func ResetIntegrationConnectorsCustomEndpoint()
```

##### `ResetIntegrationsCustomEndpoint` <a name="ResetIntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint"></a>

```go
func ResetIntegrationsCustomEndpoint()
```

##### `ResetKmsCustomEndpoint` <a name="ResetKmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint"></a>

```go
func ResetKmsCustomEndpoint()
```

##### `ResetLoggingCustomEndpoint` <a name="ResetLoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint"></a>

```go
func ResetLoggingCustomEndpoint()
```

##### `ResetLookerCustomEndpoint` <a name="ResetLookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint"></a>

```go
func ResetLookerCustomEndpoint()
```

##### `ResetLustreCustomEndpoint` <a name="ResetLustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint"></a>

```go
func ResetLustreCustomEndpoint()
```

##### `ResetManagedKafkaCustomEndpoint` <a name="ResetManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint"></a>

```go
func ResetManagedKafkaCustomEndpoint()
```

##### `ResetMemcacheCustomEndpoint` <a name="ResetMemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint"></a>

```go
func ResetMemcacheCustomEndpoint()
```

##### `ResetMemorystoreCustomEndpoint` <a name="ResetMemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint"></a>

```go
func ResetMemorystoreCustomEndpoint()
```

##### `ResetMigrationCenterCustomEndpoint` <a name="ResetMigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint"></a>

```go
func ResetMigrationCenterCustomEndpoint()
```

##### `ResetMlEngineCustomEndpoint` <a name="ResetMlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint"></a>

```go
func ResetMlEngineCustomEndpoint()
```

##### `ResetMonitoringCustomEndpoint` <a name="ResetMonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint"></a>

```go
func ResetMonitoringCustomEndpoint()
```

##### `ResetNetappCustomEndpoint` <a name="ResetNetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint"></a>

```go
func ResetNetappCustomEndpoint()
```

##### `ResetNetworkConnectivityCustomEndpoint` <a name="ResetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint"></a>

```go
func ResetNetworkConnectivityCustomEndpoint()
```

##### `ResetNetworkManagementCustomEndpoint` <a name="ResetNetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint"></a>

```go
func ResetNetworkManagementCustomEndpoint()
```

##### `ResetNetworkSecurityCustomEndpoint` <a name="ResetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint"></a>

```go
func ResetNetworkSecurityCustomEndpoint()
```

##### `ResetNetworkServicesCustomEndpoint` <a name="ResetNetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint"></a>

```go
func ResetNetworkServicesCustomEndpoint()
```

##### `ResetNotebooksCustomEndpoint` <a name="ResetNotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint"></a>

```go
func ResetNotebooksCustomEndpoint()
```

##### `ResetOracleDatabaseCustomEndpoint` <a name="ResetOracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint"></a>

```go
func ResetOracleDatabaseCustomEndpoint()
```

##### `ResetOrgPolicyCustomEndpoint` <a name="ResetOrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint"></a>

```go
func ResetOrgPolicyCustomEndpoint()
```

##### `ResetOsConfigCustomEndpoint` <a name="ResetOsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint"></a>

```go
func ResetOsConfigCustomEndpoint()
```

##### `ResetOsConfigV2CustomEndpoint` <a name="ResetOsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint"></a>

```go
func ResetOsConfigV2CustomEndpoint()
```

##### `ResetOsLoginCustomEndpoint` <a name="ResetOsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint"></a>

```go
func ResetOsLoginCustomEndpoint()
```

##### `ResetParallelstoreCustomEndpoint` <a name="ResetParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint"></a>

```go
func ResetParallelstoreCustomEndpoint()
```

##### `ResetParameterManagerCustomEndpoint` <a name="ResetParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint"></a>

```go
func ResetParameterManagerCustomEndpoint()
```

##### `ResetParameterManagerRegionalCustomEndpoint` <a name="ResetParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint"></a>

```go
func ResetParameterManagerRegionalCustomEndpoint()
```

##### `ResetPrivatecaCustomEndpoint` <a name="ResetPrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint"></a>

```go
func ResetPrivatecaCustomEndpoint()
```

##### `ResetPrivilegedAccessManagerCustomEndpoint` <a name="ResetPrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```go
func ResetPrivilegedAccessManagerCustomEndpoint()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.provider.GoogleProvider.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublicCaCustomEndpoint` <a name="ResetPublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint"></a>

```go
func ResetPublicCaCustomEndpoint()
```

##### `ResetPubsubCustomEndpoint` <a name="ResetPubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint"></a>

```go
func ResetPubsubCustomEndpoint()
```

##### `ResetPubsubLiteCustomEndpoint` <a name="ResetPubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint"></a>

```go
func ResetPubsubLiteCustomEndpoint()
```

##### `ResetRecaptchaEnterpriseCustomEndpoint` <a name="ResetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```go
func ResetRecaptchaEnterpriseCustomEndpoint()
```

##### `ResetRedisCustomEndpoint` <a name="ResetRedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint"></a>

```go
func ResetRedisCustomEndpoint()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.provider.GoogleProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRequestReason` <a name="ResetRequestReason" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestReason"></a>

```go
func ResetRequestReason()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetResourceManagerCustomEndpoint` <a name="ResetResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint"></a>

```go
func ResetResourceManagerCustomEndpoint()
```

##### `ResetResourceManagerV3CustomEndpoint` <a name="ResetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint"></a>

```go
func ResetResourceManagerV3CustomEndpoint()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.provider.GoogleProvider.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretManagerCustomEndpoint` <a name="ResetSecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint"></a>

```go
func ResetSecretManagerCustomEndpoint()
```

##### `ResetSecretManagerRegionalCustomEndpoint` <a name="ResetSecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```go
func ResetSecretManagerRegionalCustomEndpoint()
```

##### `ResetSecureSourceManagerCustomEndpoint` <a name="ResetSecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint"></a>

```go
func ResetSecureSourceManagerCustomEndpoint()
```

##### `ResetSecurityCenterCustomEndpoint` <a name="ResetSecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint"></a>

```go
func ResetSecurityCenterCustomEndpoint()
```

##### `ResetSecurityCenterManagementCustomEndpoint` <a name="ResetSecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```go
func ResetSecurityCenterManagementCustomEndpoint()
```

##### `ResetSecurityCenterV2CustomEndpoint` <a name="ResetSecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint"></a>

```go
func ResetSecurityCenterV2CustomEndpoint()
```

##### `ResetSecuritypostureCustomEndpoint` <a name="ResetSecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint"></a>

```go
func ResetSecuritypostureCustomEndpoint()
```

##### `ResetServiceManagementCustomEndpoint` <a name="ResetServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint"></a>

```go
func ResetServiceManagementCustomEndpoint()
```

##### `ResetServiceNetworkingCustomEndpoint` <a name="ResetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint"></a>

```go
func ResetServiceNetworkingCustomEndpoint()
```

##### `ResetServiceUsageCustomEndpoint` <a name="ResetServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint"></a>

```go
func ResetServiceUsageCustomEndpoint()
```

##### `ResetSiteVerificationCustomEndpoint` <a name="ResetSiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint"></a>

```go
func ResetSiteVerificationCustomEndpoint()
```

##### `ResetSourceRepoCustomEndpoint` <a name="ResetSourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint"></a>

```go
func ResetSourceRepoCustomEndpoint()
```

##### `ResetSpannerCustomEndpoint` <a name="ResetSpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint"></a>

```go
func ResetSpannerCustomEndpoint()
```

##### `ResetSqlCustomEndpoint` <a name="ResetSqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint"></a>

```go
func ResetSqlCustomEndpoint()
```

##### `ResetStorageBatchOperationsCustomEndpoint` <a name="ResetStorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint"></a>

```go
func ResetStorageBatchOperationsCustomEndpoint()
```

##### `ResetStorageControlCustomEndpoint` <a name="ResetStorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint"></a>

```go
func ResetStorageControlCustomEndpoint()
```

##### `ResetStorageCustomEndpoint` <a name="ResetStorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint"></a>

```go
func ResetStorageCustomEndpoint()
```

##### `ResetStorageInsightsCustomEndpoint` <a name="ResetStorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint"></a>

```go
func ResetStorageInsightsCustomEndpoint()
```

##### `ResetStorageTransferCustomEndpoint` <a name="ResetStorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint"></a>

```go
func ResetStorageTransferCustomEndpoint()
```

##### `ResetTagsCustomEndpoint` <a name="ResetTagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint"></a>

```go
func ResetTagsCustomEndpoint()
```

##### `ResetTagsLocationCustomEndpoint` <a name="ResetTagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint"></a>

```go
func ResetTagsLocationCustomEndpoint()
```

##### `ResetTerraformAttributionLabelAdditionStrategy` <a name="ResetTerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```go
func ResetTerraformAttributionLabelAdditionStrategy()
```

##### `ResetTpuCustomEndpoint` <a name="ResetTpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint"></a>

```go
func ResetTpuCustomEndpoint()
```

##### `ResetTranscoderCustomEndpoint` <a name="ResetTranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint"></a>

```go
func ResetTranscoderCustomEndpoint()
```

##### `ResetUniverseDomain` <a name="ResetUniverseDomain" id="@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain"></a>

```go
func ResetUniverseDomain()
```

##### `ResetUserProjectOverride` <a name="ResetUserProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride"></a>

```go
func ResetUserProjectOverride()
```

##### `ResetVertexAiCustomEndpoint` <a name="ResetVertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint"></a>

```go
func ResetVertexAiCustomEndpoint()
```

##### `ResetVmwareengineCustomEndpoint` <a name="ResetVmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint"></a>

```go
func ResetVmwareengineCustomEndpoint()
```

##### `ResetVpcAccessCustomEndpoint` <a name="ResetVpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint"></a>

```go
func ResetVpcAccessCustomEndpoint()
```

##### `ResetWorkbenchCustomEndpoint` <a name="ResetWorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint"></a>

```go
func ResetWorkbenchCustomEndpoint()
```

##### `ResetWorkflowsCustomEndpoint` <a name="ResetWorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint"></a>

```go
func ResetWorkflowsCustomEndpoint()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.provider.GoogleProvider.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

provider.GoogleProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

provider.GoogleProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

provider.GoogleProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

provider.GoogleProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput">AccessApprovalCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput">AccessContextManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput">ActiveDirectoryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput">AddTerraformAttributionLabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput">AlloydbCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput">ApigeeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput">ApihubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput">ApikeysCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput">AppEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput">ApphubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput">ArtifactRegistryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput">AssuredWorkloadsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput">BackupDrCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batchingInput">BatchingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput">BeyondcorpCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput">BiglakeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput">BigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput">BigqueryConnectionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput">BigQueryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput">BigqueryDatapolicyCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput">BigqueryDataTransferCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput">BigqueryReservationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput">BigtableCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput">BillingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput">BillingProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput">BinaryAuthorizationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput">BlockchainNodeEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput">CertificateManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput">ChronicleCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput">CloudAssetCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput">CloudBillingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput">CloudBuildCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput">Cloudbuildv2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput">CloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput">ClouddeployCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput">ClouddomainsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput">Cloudfunctions2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput">CloudFunctionsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput">CloudIdentityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput">CloudIdsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput">CloudQuotasCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput">CloudResourceManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput">CloudRunCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput">CloudRunV2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput">CloudSchedulerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput">CloudTasksCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput">ColabCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput">ComposerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput">ComputeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput">ContainerAnalysisCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput">ContainerAttachedCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput">ContainerAwsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput">ContainerAzureCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput">ContainerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput">CoreBillingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput">DatabaseMigrationServiceCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput">DataCatalogCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput">DataflowCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput">DataFusionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput">DataLossPreventionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput">DataPipelineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput">DataplexCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput">DataprocCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput">DataprocGdcCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput">DataprocMetastoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput">DatastreamCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput">DefaultLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput">DeploymentManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput">DeveloperConnectCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput">DialogflowCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput">DialogflowCxCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput">DiscoveryEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput">DnsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput">DocumentAiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput">DocumentAiWarehouseCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput">EdgecontainerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput">EdgenetworkCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput">EssentialContactsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput">EventarcCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.externalCredentialsInput">ExternalCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput">FilestoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput">FirebaseAppCheckCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput">FirebaseAppHostingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput">FirebaseDataConnectCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput">FirebaserulesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput">FirestoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput">GeminiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput">GkeBackupCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput">GkeHub2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput">GkeHubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpointInput">GkehubFeatureCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput">GkeonpremCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput">HealthcareCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput">Iam2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput">Iam3CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput">IamBetaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput">IamCredentialsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput">IamCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput">IamWorkforcePoolCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput">IapCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput">IdentityPlatformCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput">ImpersonateServiceAccountDelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput">IntegrationConnectorsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput">IntegrationsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput">KmsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput">LoggingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput">LookerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput">LustreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput">ManagedKafkaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput">MemcacheCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput">MemorystoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput">MigrationCenterCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput">MlEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput">MonitoringCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput">NetappCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput">NetworkConnectivityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput">NetworkManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput">NetworkSecurityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput">NetworkServicesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput">NotebooksCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput">OracleDatabaseCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput">OrgPolicyCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput">OsConfigCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput">OsConfigV2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput">OsLoginCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput">ParallelstoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput">ParameterManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput">ParameterManagerRegionalCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput">PrivatecaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput">PrivilegedAccessManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput">PublicCaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput">PubsubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput">PubsubLiteCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput">RecaptchaEnterpriseCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput">RedisCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput">RequestReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput">ResourceManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput">ResourceManagerV3CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput">SecretManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput">SecretManagerRegionalCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput">SecureSourceManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput">SecurityCenterCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput">SecurityCenterManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput">SecurityCenterV2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput">SecuritypostureCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput">ServiceManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput">ServiceNetworkingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput">ServiceUsageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput">SiteVerificationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput">SourceRepoCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput">SpannerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput">SqlCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput">StorageBatchOperationsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput">StorageControlCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput">StorageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput">StorageInsightsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput">StorageTransferCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput">TagsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput">TagsLocationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput">TerraformAttributionLabelAdditionStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput">TpuCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput">TranscoderCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput">UniverseDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput">UserProjectOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput">VertexAiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput">VmwareengineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput">VpcAccessCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput">WorkbenchCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput">WorkflowsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel">AddTerraformAttributionLabel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint">ApihubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint">ApphubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint">BackupDrCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batching">Batching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint">BiglakeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProject">BillingProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint">BlockchainNodeEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint">ChronicleCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint">ClouddomainsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint">CloudQuotasCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpoint">ColabCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint">CoreBillingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint">DataPipelineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint">DataprocGdcCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels">DefaultLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint">DeveloperConnectCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint">DiscoveryEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint">DocumentAiWarehouseCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint">EdgecontainerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint">EdgenetworkCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.externalCredentials">ExternalCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint">FirebaseAppCheckCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint">FirebaseAppHostingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint">FirebaseDataConnectCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint">GeminiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint">GkeHub2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpoint">GkehubFeatureCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint">Iam3CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint">IntegrationConnectorsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint">IntegrationsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint">LookerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint">LustreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint">ManagedKafkaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint">MemorystoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint">MigrationCenterCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint">NetappCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint">OracleDatabaseCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint">OsConfigV2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint">ParallelstoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint">ParameterManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint">ParameterManagerRegionalCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint">PrivilegedAccessManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint">PublicCaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReason">RequestReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint">SecretManagerRegionalCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint">SecureSourceManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint">SecurityCenterManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint">SecurityCenterV2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint">SecuritypostureCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint">SiteVerificationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint">StorageBatchOperationsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint">StorageControlCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint">StorageInsightsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy">TerraformAttributionLabelAdditionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint">TranscoderCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomain">UniverseDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride">UserProjectOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint">VmwareengineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint">WorkbenchCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.provider.GoogleProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.provider.GoogleProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google.provider.GoogleProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="AccessApprovalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput"></a>

```go
func AccessApprovalCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AccessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput"></a>

```go
func AccessContextManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput"></a>

```go
func ActiveDirectoryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AddTerraformAttributionLabelInput`<sup>Optional</sup> <a name="AddTerraformAttributionLabelInput" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput"></a>

```go
func AddTerraformAttributionLabelInput() interface{}
```

- *Type:* interface{}

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google.provider.GoogleProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AlloydbCustomEndpointInput`<sup>Optional</sup> <a name="AlloydbCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput"></a>

```go
func AlloydbCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApigeeCustomEndpointInput`<sup>Optional</sup> <a name="ApigeeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput"></a>

```go
func ApigeeCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApihubCustomEndpointInput`<sup>Optional</sup> <a name="ApihubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput"></a>

```go
func ApihubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApikeysCustomEndpointInput`<sup>Optional</sup> <a name="ApikeysCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput"></a>

```go
func ApikeysCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AppEngineCustomEndpointInput`<sup>Optional</sup> <a name="AppEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput"></a>

```go
func AppEngineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ApphubCustomEndpointInput`<sup>Optional</sup> <a name="ApphubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput"></a>

```go
func ApphubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ArtifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput"></a>

```go
func ArtifactRegistryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `AssuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```go
func AssuredWorkloadsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BackupDrCustomEndpointInput`<sup>Optional</sup> <a name="BackupDrCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput"></a>

```go
func BackupDrCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BatchingInput`<sup>Optional</sup> <a name="BatchingInput" id="@cdktf/provider-google.provider.GoogleProvider.property.batchingInput"></a>

```go
func BatchingInput() interface{}
```

- *Type:* interface{}

---

##### `BeyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="BeyondcorpCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput"></a>

```go
func BeyondcorpCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BiglakeCustomEndpointInput`<sup>Optional</sup> <a name="BiglakeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput"></a>

```go
func BiglakeCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```go
func BigqueryAnalyticsHubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```go
func BigqueryConnectionCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigQueryCustomEndpointInput`<sup>Optional</sup> <a name="BigQueryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput"></a>

```go
func BigQueryCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```go
func BigqueryDatapolicyCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```go
func BigqueryDataTransferCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput"></a>

```go
func BigqueryReservationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BigtableCustomEndpointInput`<sup>Optional</sup> <a name="BigtableCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput"></a>

```go
func BigtableCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BillingCustomEndpointInput`<sup>Optional</sup> <a name="BillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput"></a>

```go
func BillingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput"></a>

```go
func BillingProjectInput() *string
```

- *Type:* *string

---

##### `BinaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```go
func BinaryAuthorizationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `BlockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```go
func BlockchainNodeEngineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CertificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="CertificateManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput"></a>

```go
func CertificateManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ChronicleCustomEndpointInput`<sup>Optional</sup> <a name="ChronicleCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput"></a>

```go
func ChronicleCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="CloudAssetCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput"></a>

```go
func CloudAssetCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="CloudBillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput"></a>

```go
func CloudBillingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput"></a>

```go
func CloudBuildCustomEndpointInput() *string
```

- *Type:* *string

---

##### `Cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput"></a>

```go
func Cloudbuildv2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudBuildWorkerPoolCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput"></a>

```go
func CloudBuildWorkerPoolCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ClouddeployCustomEndpointInput`<sup>Optional</sup> <a name="ClouddeployCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput"></a>

```go
func ClouddeployCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ClouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="ClouddomainsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput"></a>

```go
func ClouddomainsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `Cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput"></a>

```go
func Cloudfunctions2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput"></a>

```go
func CloudFunctionsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdentityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput"></a>

```go
func CloudIdentityCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput"></a>

```go
func CloudIdsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="CloudQuotasCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput"></a>

```go
func CloudQuotasCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```go
func CloudResourceManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudRunCustomEndpointInput`<sup>Optional</sup> <a name="CloudRunCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput"></a>

```go
func CloudRunCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="CloudRunV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput"></a>

```go
func CloudRunV2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput"></a>

```go
func CloudSchedulerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="CloudTasksCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput"></a>

```go
func CloudTasksCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ColabCustomEndpointInput`<sup>Optional</sup> <a name="ColabCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput"></a>

```go
func ColabCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ComposerCustomEndpointInput`<sup>Optional</sup> <a name="ComposerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput"></a>

```go
func ComposerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ComputeCustomEndpointInput`<sup>Optional</sup> <a name="ComputeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput"></a>

```go
func ComputeCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput"></a>

```go
func ContainerAnalysisCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput"></a>

```go
func ContainerAttachedCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAwsCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAwsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput"></a>

```go
func ContainerAwsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerAzureCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAzureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput"></a>

```go
func ContainerAzureCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ContainerCustomEndpointInput`<sup>Optional</sup> <a name="ContainerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput"></a>

```go
func ContainerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CoreBillingCustomEndpointInput`<sup>Optional</sup> <a name="CoreBillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput"></a>

```go
func CoreBillingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput"></a>

```go
func CredentialsInput() *string
```

- *Type:* *string

---

##### `DatabaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```go
func DatabaseMigrationServiceCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="DataCatalogCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput"></a>

```go
func DataCatalogCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataflowCustomEndpointInput`<sup>Optional</sup> <a name="DataflowCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput"></a>

```go
func DataflowCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataFusionCustomEndpointInput`<sup>Optional</sup> <a name="DataFusionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput"></a>

```go
func DataFusionCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput"></a>

```go
func DataLossPreventionCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="DataPipelineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput"></a>

```go
func DataPipelineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataplexCustomEndpointInput`<sup>Optional</sup> <a name="DataplexCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput"></a>

```go
func DataplexCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataprocCustomEndpointInput`<sup>Optional</sup> <a name="DataprocCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput"></a>

```go
func DataprocCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="DataprocGdcCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput"></a>

```go
func DataprocGdcCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```go
func DataprocMetastoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DatastreamCustomEndpointInput`<sup>Optional</sup> <a name="DatastreamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput"></a>

```go
func DatastreamCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DefaultLabelsInput`<sup>Optional</sup> <a name="DefaultLabelsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput"></a>

```go
func DefaultLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput"></a>

```go
func DeploymentManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DeveloperConnectCustomEndpointInput`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput"></a>

```go
func DeveloperConnectCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DialogflowCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput"></a>

```go
func DialogflowCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCxCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput"></a>

```go
func DialogflowCxCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DiscoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput"></a>

```go
func DiscoveryEngineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DnsCustomEndpointInput`<sup>Optional</sup> <a name="DnsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput"></a>

```go
func DnsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DocumentAiCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput"></a>

```go
func DocumentAiCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DocumentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```go
func DocumentAiWarehouseCustomEndpointInput() *string
```

- *Type:* *string

---

##### `EdgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="EdgecontainerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput"></a>

```go
func EdgecontainerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `EdgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="EdgenetworkCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput"></a>

```go
func EdgenetworkCustomEndpointInput() *string
```

- *Type:* *string

---

##### `EssentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="EssentialContactsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput"></a>

```go
func EssentialContactsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `EventarcCustomEndpointInput`<sup>Optional</sup> <a name="EventarcCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput"></a>

```go
func EventarcCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ExternalCredentialsInput`<sup>Optional</sup> <a name="ExternalCredentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.externalCredentialsInput"></a>

```go
func ExternalCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `FilestoreCustomEndpointInput`<sup>Optional</sup> <a name="FilestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput"></a>

```go
func FilestoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```go
func FirebaseAppCheckCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseAppHostingCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseAppHostingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput"></a>

```go
func FirebaseAppHostingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaseDataConnectCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseDataConnectCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput"></a>

```go
func FirebaseDataConnectCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="FirebaserulesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput"></a>

```go
func FirebaserulesCustomEndpointInput() *string
```

- *Type:* *string

---

##### `FirestoreCustomEndpointInput`<sup>Optional</sup> <a name="FirestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput"></a>

```go
func FirestoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GeminiCustomEndpointInput`<sup>Optional</sup> <a name="GeminiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput"></a>

```go
func GeminiCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="GkeBackupCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput"></a>

```go
func GkeBackupCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="GkeHub2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput"></a>

```go
func GkeHub2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeHubCustomEndpointInput`<sup>Optional</sup> <a name="GkeHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput"></a>

```go
func GkeHubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkehubFeatureCustomEndpointInput`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpointInput"></a>

```go
func GkehubFeatureCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="GkeonpremCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput"></a>

```go
func GkeonpremCustomEndpointInput() *string
```

- *Type:* *string

---

##### `HealthcareCustomEndpointInput`<sup>Optional</sup> <a name="HealthcareCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput"></a>

```go
func HealthcareCustomEndpointInput() *string
```

- *Type:* *string

---

##### `Iam2CustomEndpointInput`<sup>Optional</sup> <a name="Iam2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput"></a>

```go
func Iam2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `Iam3CustomEndpointInput`<sup>Optional</sup> <a name="Iam3CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput"></a>

```go
func Iam3CustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamBetaCustomEndpointInput`<sup>Optional</sup> <a name="IamBetaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput"></a>

```go
func IamBetaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="IamCredentialsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput"></a>

```go
func IamCredentialsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamCustomEndpointInput`<sup>Optional</sup> <a name="IamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput"></a>

```go
func IamCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```go
func IamWorkforcePoolCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IapCustomEndpointInput`<sup>Optional</sup> <a name="IapCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput"></a>

```go
func IapCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IdentityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput"></a>

```go
func IdentityPlatformCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ImpersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegatesInput" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput"></a>

```go
func ImpersonateServiceAccountDelegatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ImpersonateServiceAccountInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountInput" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput"></a>

```go
func ImpersonateServiceAccountInput() *string
```

- *Type:* *string

---

##### `IntegrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput"></a>

```go
func IntegrationConnectorsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `IntegrationsCustomEndpointInput`<sup>Optional</sup> <a name="IntegrationsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput"></a>

```go
func IntegrationsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `KmsCustomEndpointInput`<sup>Optional</sup> <a name="KmsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput"></a>

```go
func KmsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `LoggingCustomEndpointInput`<sup>Optional</sup> <a name="LoggingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput"></a>

```go
func LoggingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `LookerCustomEndpointInput`<sup>Optional</sup> <a name="LookerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput"></a>

```go
func LookerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `LustreCustomEndpointInput`<sup>Optional</sup> <a name="LustreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput"></a>

```go
func LustreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ManagedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput"></a>

```go
func ManagedKafkaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MemcacheCustomEndpointInput`<sup>Optional</sup> <a name="MemcacheCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput"></a>

```go
func MemcacheCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MemorystoreCustomEndpointInput`<sup>Optional</sup> <a name="MemorystoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput"></a>

```go
func MemorystoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MigrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="MigrationCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput"></a>

```go
func MigrationCenterCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MlEngineCustomEndpointInput`<sup>Optional</sup> <a name="MlEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput"></a>

```go
func MlEngineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `MonitoringCustomEndpointInput`<sup>Optional</sup> <a name="MonitoringCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput"></a>

```go
func MonitoringCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetappCustomEndpointInput`<sup>Optional</sup> <a name="NetappCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput"></a>

```go
func NetappCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput"></a>

```go
func NetworkConnectivityCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkManagementCustomEndpointInput`<sup>Optional</sup> <a name="NetworkManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput"></a>

```go
func NetworkManagementCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput"></a>

```go
func NetworkSecurityCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NetworkServicesCustomEndpointInput`<sup>Optional</sup> <a name="NetworkServicesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput"></a>

```go
func NetworkServicesCustomEndpointInput() *string
```

- *Type:* *string

---

##### `NotebooksCustomEndpointInput`<sup>Optional</sup> <a name="NotebooksCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput"></a>

```go
func NotebooksCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput"></a>

```go
func OracleDatabaseCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OrgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="OrgPolicyCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput"></a>

```go
func OrgPolicyCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OsConfigCustomEndpointInput`<sup>Optional</sup> <a name="OsConfigCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput"></a>

```go
func OsConfigCustomEndpointInput() *string
```

- *Type:* *string

---

##### `OsConfigV2CustomEndpointInput`<sup>Optional</sup> <a name="OsConfigV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput"></a>

```go
func OsConfigV2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `OsLoginCustomEndpointInput`<sup>Optional</sup> <a name="OsLoginCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput"></a>

```go
func OsLoginCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ParallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="ParallelstoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput"></a>

```go
func ParallelstoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ParameterManagerCustomEndpointInput`<sup>Optional</sup> <a name="ParameterManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput"></a>

```go
func ParameterManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ParameterManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput"></a>

```go
func ParameterManagerRegionalCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PrivatecaCustomEndpointInput`<sup>Optional</sup> <a name="PrivatecaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput"></a>

```go
func PrivatecaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PrivilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```go
func PrivilegedAccessManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublicCaCustomEndpointInput`<sup>Optional</sup> <a name="PublicCaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput"></a>

```go
func PublicCaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PubsubCustomEndpointInput`<sup>Optional</sup> <a name="PubsubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput"></a>

```go
func PubsubCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="PubsubLiteCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput"></a>

```go
func PubsubLiteCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RecaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```go
func RecaptchaEnterpriseCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RedisCustomEndpointInput`<sup>Optional</sup> <a name="RedisCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput"></a>

```go
func RedisCustomEndpointInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.provider.GoogleProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RequestReasonInput`<sup>Optional</sup> <a name="RequestReasonInput" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput"></a>

```go
func RequestReasonInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *string
```

- *Type:* *string

---

##### `ResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput"></a>

```go
func ResourceManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput"></a>

```go
func ResourceManagerV3CustomEndpointInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.provider.GoogleProvider.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput"></a>

```go
func SecretManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```go
func SecretManagerRegionalCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput"></a>

```go
func SecureSourceManagerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecurityCenterCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput"></a>

```go
func SecurityCenterCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecurityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput"></a>

```go
func SecurityCenterManagementCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecurityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput"></a>

```go
func SecurityCenterV2CustomEndpointInput() *string
```

- *Type:* *string

---

##### `SecuritypostureCustomEndpointInput`<sup>Optional</sup> <a name="SecuritypostureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput"></a>

```go
func SecuritypostureCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceManagementCustomEndpointInput`<sup>Optional</sup> <a name="ServiceManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput"></a>

```go
func ServiceManagementCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput"></a>

```go
func ServiceNetworkingCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ServiceUsageCustomEndpointInput`<sup>Optional</sup> <a name="ServiceUsageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput"></a>

```go
func ServiceUsageCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SiteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="SiteVerificationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput"></a>

```go
func SiteVerificationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="SourceRepoCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput"></a>

```go
func SourceRepoCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SpannerCustomEndpointInput`<sup>Optional</sup> <a name="SpannerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput"></a>

```go
func SpannerCustomEndpointInput() *string
```

- *Type:* *string

---

##### `SqlCustomEndpointInput`<sup>Optional</sup> <a name="SqlCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput"></a>

```go
func SqlCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageBatchOperationsCustomEndpointInput`<sup>Optional</sup> <a name="StorageBatchOperationsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput"></a>

```go
func StorageBatchOperationsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageControlCustomEndpointInput`<sup>Optional</sup> <a name="StorageControlCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput"></a>

```go
func StorageControlCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageCustomEndpointInput`<sup>Optional</sup> <a name="StorageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput"></a>

```go
func StorageCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="StorageInsightsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput"></a>

```go
func StorageInsightsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `StorageTransferCustomEndpointInput`<sup>Optional</sup> <a name="StorageTransferCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput"></a>

```go
func StorageTransferCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TagsCustomEndpointInput`<sup>Optional</sup> <a name="TagsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput"></a>

```go
func TagsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="TagsLocationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput"></a>

```go
func TagsLocationCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TerraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategyInput" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```go
func TerraformAttributionLabelAdditionStrategyInput() *string
```

- *Type:* *string

---

##### `TpuCustomEndpointInput`<sup>Optional</sup> <a name="TpuCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput"></a>

```go
func TpuCustomEndpointInput() *string
```

- *Type:* *string

---

##### `TranscoderCustomEndpointInput`<sup>Optional</sup> <a name="TranscoderCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput"></a>

```go
func TranscoderCustomEndpointInput() *string
```

- *Type:* *string

---

##### `UniverseDomainInput`<sup>Optional</sup> <a name="UniverseDomainInput" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput"></a>

```go
func UniverseDomainInput() *string
```

- *Type:* *string

---

##### `UserProjectOverrideInput`<sup>Optional</sup> <a name="UserProjectOverrideInput" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput"></a>

```go
func UserProjectOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `VertexAiCustomEndpointInput`<sup>Optional</sup> <a name="VertexAiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput"></a>

```go
func VertexAiCustomEndpointInput() *string
```

- *Type:* *string

---

##### `VmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="VmwareengineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput"></a>

```go
func VmwareengineCustomEndpointInput() *string
```

- *Type:* *string

---

##### `VpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="VpcAccessCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput"></a>

```go
func VpcAccessCustomEndpointInput() *string
```

- *Type:* *string

---

##### `WorkbenchCustomEndpointInput`<sup>Optional</sup> <a name="WorkbenchCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput"></a>

```go
func WorkbenchCustomEndpointInput() *string
```

- *Type:* *string

---

##### `WorkflowsCustomEndpointInput`<sup>Optional</sup> <a name="WorkflowsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput"></a>

```go
func WorkflowsCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.provider.GoogleProvider.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint"></a>

```go
func AccessApprovalCustomEndpoint() *string
```

- *Type:* *string

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint"></a>

```go
func AccessContextManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.provider.GoogleProvider.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint"></a>

```go
func ActiveDirectoryCustomEndpoint() *string
```

- *Type:* *string

---

##### `AddTerraformAttributionLabel`<sup>Optional</sup> <a name="AddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel"></a>

```go
func AddTerraformAttributionLabel() interface{}
```

- *Type:* interface{}

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint"></a>

```go
func AlloydbCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint"></a>

```go
func ApigeeCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApihubCustomEndpoint`<sup>Optional</sup> <a name="ApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint"></a>

```go
func ApihubCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint"></a>

```go
func ApikeysCustomEndpoint() *string
```

- *Type:* *string

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint"></a>

```go
func AppEngineCustomEndpoint() *string
```

- *Type:* *string

---

##### `ApphubCustomEndpoint`<sup>Optional</sup> <a name="ApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint"></a>

```go
func ApphubCustomEndpoint() *string
```

- *Type:* *string

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint"></a>

```go
func ArtifactRegistryCustomEndpoint() *string
```

- *Type:* *string

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint"></a>

```go
func AssuredWorkloadsCustomEndpoint() *string
```

- *Type:* *string

---

##### `BackupDrCustomEndpoint`<sup>Optional</sup> <a name="BackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint"></a>

```go
func BackupDrCustomEndpoint() *string
```

- *Type:* *string

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google.provider.GoogleProvider.property.batching"></a>

```go
func Batching() interface{}
```

- *Type:* interface{}

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint"></a>

```go
func BeyondcorpCustomEndpoint() *string
```

- *Type:* *string

---

##### `BiglakeCustomEndpoint`<sup>Optional</sup> <a name="BiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint"></a>

```go
func BiglakeCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```go
func BigqueryAnalyticsHubCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint"></a>

```go
func BigqueryConnectionCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint"></a>

```go
func BigQueryCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```go
func BigqueryDatapolicyCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```go
func BigqueryDataTransferCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint"></a>

```go
func BigqueryReservationCustomEndpoint() *string
```

- *Type:* *string

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint"></a>

```go
func BigtableCustomEndpoint() *string
```

- *Type:* *string

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint"></a>

```go
func BillingCustomEndpoint() *string
```

- *Type:* *string

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProject"></a>

```go
func BillingProject() *string
```

- *Type:* *string

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint"></a>

```go
func BinaryAuthorizationCustomEndpoint() *string
```

- *Type:* *string

---

##### `BlockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```go
func BlockchainNodeEngineCustomEndpoint() *string
```

- *Type:* *string

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint"></a>

```go
func CertificateManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ChronicleCustomEndpoint`<sup>Optional</sup> <a name="ChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint"></a>

```go
func ChronicleCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint"></a>

```go
func CloudAssetCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint"></a>

```go
func CloudBillingCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint"></a>

```go
func CloudBuildCustomEndpoint() *string
```

- *Type:* *string

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint"></a>

```go
func Cloudbuildv2CustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```go
func CloudBuildWorkerPoolCustomEndpoint() *string
```

- *Type:* *string

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint"></a>

```go
func ClouddeployCustomEndpoint() *string
```

- *Type:* *string

---

##### `ClouddomainsCustomEndpoint`<sup>Optional</sup> <a name="ClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint"></a>

```go
func ClouddomainsCustomEndpoint() *string
```

- *Type:* *string

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint"></a>

```go
func Cloudfunctions2CustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint"></a>

```go
func CloudFunctionsCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint"></a>

```go
func CloudIdentityCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint"></a>

```go
func CloudIdsCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="CloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint"></a>

```go
func CloudQuotasCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint"></a>

```go
func CloudResourceManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint"></a>

```go
func CloudRunCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint"></a>

```go
func CloudRunV2CustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint"></a>

```go
func CloudSchedulerCustomEndpoint() *string
```

- *Type:* *string

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint"></a>

```go
func CloudTasksCustomEndpoint() *string
```

- *Type:* *string

---

##### `ColabCustomEndpoint`<sup>Optional</sup> <a name="ColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpoint"></a>

```go
func ColabCustomEndpoint() *string
```

- *Type:* *string

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint"></a>

```go
func ComposerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint"></a>

```go
func ComputeCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint"></a>

```go
func ContainerAnalysisCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint"></a>

```go
func ContainerAttachedCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint"></a>

```go
func ContainerAwsCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint"></a>

```go
func ContainerAzureCustomEndpoint() *string
```

- *Type:* *string

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint"></a>

```go
func ContainerCustomEndpoint() *string
```

- *Type:* *string

---

##### `CoreBillingCustomEndpoint`<sup>Optional</sup> <a name="CoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint"></a>

```go
func CoreBillingCustomEndpoint() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.provider.GoogleProvider.property.credentials"></a>

```go
func Credentials() *string
```

- *Type:* *string

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```go
func DatabaseMigrationServiceCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint"></a>

```go
func DataCatalogCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint"></a>

```go
func DataflowCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint"></a>

```go
func DataFusionCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint"></a>

```go
func DataLossPreventionCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataPipelineCustomEndpoint`<sup>Optional</sup> <a name="DataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint"></a>

```go
func DataPipelineCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint"></a>

```go
func DataplexCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint"></a>

```go
func DataprocCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="DataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint"></a>

```go
func DataprocGdcCustomEndpoint() *string
```

- *Type:* *string

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint"></a>

```go
func DataprocMetastoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint"></a>

```go
func DatastreamCustomEndpoint() *string
```

- *Type:* *string

---

##### `DefaultLabels`<sup>Optional</sup> <a name="DefaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels"></a>

```go
func DefaultLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint"></a>

```go
func DeploymentManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `DeveloperConnectCustomEndpoint`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint"></a>

```go
func DeveloperConnectCustomEndpoint() *string
```

- *Type:* *string

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint"></a>

```go
func DialogflowCustomEndpoint() *string
```

- *Type:* *string

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint"></a>

```go
func DialogflowCxCustomEndpoint() *string
```

- *Type:* *string

---

##### `DiscoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint"></a>

```go
func DiscoveryEngineCustomEndpoint() *string
```

- *Type:* *string

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint"></a>

```go
func DnsCustomEndpoint() *string
```

- *Type:* *string

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint"></a>

```go
func DocumentAiCustomEndpoint() *string
```

- *Type:* *string

---

##### `DocumentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint"></a>

```go
func DocumentAiWarehouseCustomEndpoint() *string
```

- *Type:* *string

---

##### `EdgecontainerCustomEndpoint`<sup>Optional</sup> <a name="EdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint"></a>

```go
func EdgecontainerCustomEndpoint() *string
```

- *Type:* *string

---

##### `EdgenetworkCustomEndpoint`<sup>Optional</sup> <a name="EdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint"></a>

```go
func EdgenetworkCustomEndpoint() *string
```

- *Type:* *string

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint"></a>

```go
func EssentialContactsCustomEndpoint() *string
```

- *Type:* *string

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint"></a>

```go
func EventarcCustomEndpoint() *string
```

- *Type:* *string

---

##### `ExternalCredentials`<sup>Optional</sup> <a name="ExternalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.property.externalCredentials"></a>

```go
func ExternalCredentials() interface{}
```

- *Type:* interface{}

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint"></a>

```go
func FilestoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint"></a>

```go
func FirebaseAppCheckCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint"></a>

```go
func FirebaseAppHostingCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint"></a>

```go
func FirebaseDataConnectCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint"></a>

```go
func FirebaserulesCustomEndpoint() *string
```

- *Type:* *string

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint"></a>

```go
func FirestoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `GeminiCustomEndpoint`<sup>Optional</sup> <a name="GeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint"></a>

```go
func GeminiCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint"></a>

```go
func GkeBackupCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeHub2CustomEndpoint`<sup>Optional</sup> <a name="GkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint"></a>

```go
func GkeHub2CustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint"></a>

```go
func GkeHubCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkehubFeatureCustomEndpoint"></a>

```go
func GkehubFeatureCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint"></a>

```go
func GkeonpremCustomEndpoint() *string
```

- *Type:* *string

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint"></a>

```go
func HealthcareCustomEndpoint() *string
```

- *Type:* *string

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint"></a>

```go
func Iam2CustomEndpoint() *string
```

- *Type:* *string

---

##### `Iam3CustomEndpoint`<sup>Optional</sup> <a name="Iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint"></a>

```go
func Iam3CustomEndpoint() *string
```

- *Type:* *string

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint"></a>

```go
func IamBetaCustomEndpoint() *string
```

- *Type:* *string

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint"></a>

```go
func IamCredentialsCustomEndpoint() *string
```

- *Type:* *string

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint"></a>

```go
func IamCustomEndpoint() *string
```

- *Type:* *string

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```go
func IamWorkforcePoolCustomEndpoint() *string
```

- *Type:* *string

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint"></a>

```go
func IapCustomEndpoint() *string
```

- *Type:* *string

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint"></a>

```go
func IdentityPlatformCustomEndpoint() *string
```

- *Type:* *string

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount"></a>

```go
func ImpersonateServiceAccount() *string
```

- *Type:* *string

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates"></a>

```go
func ImpersonateServiceAccountDelegates() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint"></a>

```go
func IntegrationConnectorsCustomEndpoint() *string
```

- *Type:* *string

---

##### `IntegrationsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint"></a>

```go
func IntegrationsCustomEndpoint() *string
```

- *Type:* *string

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint"></a>

```go
func KmsCustomEndpoint() *string
```

- *Type:* *string

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint"></a>

```go
func LoggingCustomEndpoint() *string
```

- *Type:* *string

---

##### `LookerCustomEndpoint`<sup>Optional</sup> <a name="LookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint"></a>

```go
func LookerCustomEndpoint() *string
```

- *Type:* *string

---

##### `LustreCustomEndpoint`<sup>Optional</sup> <a name="LustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint"></a>

```go
func LustreCustomEndpoint() *string
```

- *Type:* *string

---

##### `ManagedKafkaCustomEndpoint`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint"></a>

```go
func ManagedKafkaCustomEndpoint() *string
```

- *Type:* *string

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint"></a>

```go
func MemcacheCustomEndpoint() *string
```

- *Type:* *string

---

##### `MemorystoreCustomEndpoint`<sup>Optional</sup> <a name="MemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint"></a>

```go
func MemorystoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `MigrationCenterCustomEndpoint`<sup>Optional</sup> <a name="MigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint"></a>

```go
func MigrationCenterCustomEndpoint() *string
```

- *Type:* *string

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint"></a>

```go
func MlEngineCustomEndpoint() *string
```

- *Type:* *string

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint"></a>

```go
func MonitoringCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetappCustomEndpoint`<sup>Optional</sup> <a name="NetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint"></a>

```go
func NetappCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint"></a>

```go
func NetworkConnectivityCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint"></a>

```go
func NetworkManagementCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint"></a>

```go
func NetworkSecurityCustomEndpoint() *string
```

- *Type:* *string

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint"></a>

```go
func NetworkServicesCustomEndpoint() *string
```

- *Type:* *string

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint"></a>

```go
func NotebooksCustomEndpoint() *string
```

- *Type:* *string

---

##### `OracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint"></a>

```go
func OracleDatabaseCustomEndpoint() *string
```

- *Type:* *string

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint"></a>

```go
func OrgPolicyCustomEndpoint() *string
```

- *Type:* *string

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint"></a>

```go
func OsConfigCustomEndpoint() *string
```

- *Type:* *string

---

##### `OsConfigV2CustomEndpoint`<sup>Optional</sup> <a name="OsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint"></a>

```go
func OsConfigV2CustomEndpoint() *string
```

- *Type:* *string

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint"></a>

```go
func OsLoginCustomEndpoint() *string
```

- *Type:* *string

---

##### `ParallelstoreCustomEndpoint`<sup>Optional</sup> <a name="ParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint"></a>

```go
func ParallelstoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `ParameterManagerCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint"></a>

```go
func ParameterManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ParameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint"></a>

```go
func ParameterManagerRegionalCustomEndpoint() *string
```

- *Type:* *string

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint"></a>

```go
func PrivatecaCustomEndpoint() *string
```

- *Type:* *string

---

##### `PrivilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```go
func PrivilegedAccessManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.provider.GoogleProvider.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PublicCaCustomEndpoint`<sup>Optional</sup> <a name="PublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint"></a>

```go
func PublicCaCustomEndpoint() *string
```

- *Type:* *string

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint"></a>

```go
func PubsubCustomEndpoint() *string
```

- *Type:* *string

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint"></a>

```go
func PubsubLiteCustomEndpoint() *string
```

- *Type:* *string

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```go
func RecaptchaEnterpriseCustomEndpoint() *string
```

- *Type:* *string

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint"></a>

```go
func RedisCustomEndpoint() *string
```

- *Type:* *string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.provider.GoogleProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReason"></a>

```go
func RequestReason() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout"></a>

```go
func RequestTimeout() *string
```

- *Type:* *string

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint"></a>

```go
func ResourceManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint"></a>

```go
func ResourceManagerV3CustomEndpoint() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.provider.GoogleProvider.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint"></a>

```go
func SecretManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint"></a>

```go
func SecretManagerRegionalCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint"></a>

```go
func SecureSourceManagerCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint"></a>

```go
func SecurityCenterCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecurityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint"></a>

```go
func SecurityCenterManagementCustomEndpoint() *string
```

- *Type:* *string

---

##### `SecurityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint"></a>

```go
func SecurityCenterV2CustomEndpoint() *string
```

- *Type:* *string

---

##### `SecuritypostureCustomEndpoint`<sup>Optional</sup> <a name="SecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint"></a>

```go
func SecuritypostureCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint"></a>

```go
func ServiceManagementCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint"></a>

```go
func ServiceNetworkingCustomEndpoint() *string
```

- *Type:* *string

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint"></a>

```go
func ServiceUsageCustomEndpoint() *string
```

- *Type:* *string

---

##### `SiteVerificationCustomEndpoint`<sup>Optional</sup> <a name="SiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint"></a>

```go
func SiteVerificationCustomEndpoint() *string
```

- *Type:* *string

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint"></a>

```go
func SourceRepoCustomEndpoint() *string
```

- *Type:* *string

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint"></a>

```go
func SpannerCustomEndpoint() *string
```

- *Type:* *string

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint"></a>

```go
func SqlCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="StorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint"></a>

```go
func StorageBatchOperationsCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageControlCustomEndpoint`<sup>Optional</sup> <a name="StorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint"></a>

```go
func StorageControlCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint"></a>

```go
func StorageCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageInsightsCustomEndpoint`<sup>Optional</sup> <a name="StorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint"></a>

```go
func StorageInsightsCustomEndpoint() *string
```

- *Type:* *string

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint"></a>

```go
func StorageTransferCustomEndpoint() *string
```

- *Type:* *string

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint"></a>

```go
func TagsCustomEndpoint() *string
```

- *Type:* *string

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint"></a>

```go
func TagsLocationCustomEndpoint() *string
```

- *Type:* *string

---

##### `TerraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```go
func TerraformAttributionLabelAdditionStrategy() *string
```

- *Type:* *string

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint"></a>

```go
func TpuCustomEndpoint() *string
```

- *Type:* *string

---

##### `TranscoderCustomEndpoint`<sup>Optional</sup> <a name="TranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint"></a>

```go
func TranscoderCustomEndpoint() *string
```

- *Type:* *string

---

##### `UniverseDomain`<sup>Optional</sup> <a name="UniverseDomain" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomain"></a>

```go
func UniverseDomain() *string
```

- *Type:* *string

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride"></a>

```go
func UserProjectOverride() interface{}
```

- *Type:* interface{}

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint"></a>

```go
func VertexAiCustomEndpoint() *string
```

- *Type:* *string

---

##### `VmwareengineCustomEndpoint`<sup>Optional</sup> <a name="VmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint"></a>

```go
func VmwareengineCustomEndpoint() *string
```

- *Type:* *string

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint"></a>

```go
func VpcAccessCustomEndpoint() *string
```

- *Type:* *string

---

##### `WorkbenchCustomEndpoint`<sup>Optional</sup> <a name="WorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint"></a>

```go
func WorkbenchCustomEndpoint() *string
```

- *Type:* *string

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint"></a>

```go
func WorkflowsCustomEndpoint() *string
```

- *Type:* *string

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.provider.GoogleProvider.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProviderBatching <a name="GoogleProviderBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderBatching.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

&provider.GoogleProviderBatching {
	EnableBatching: interface{},
	SendAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching">EnableBatching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#enable_batching GoogleProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter">SendAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#send_after GoogleProvider#send_after}. |

---

##### `EnableBatching`<sup>Optional</sup> <a name="EnableBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching"></a>

```go
EnableBatching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#enable_batching GoogleProvider#enable_batching}.

---

##### `SendAfter`<sup>Optional</sup> <a name="SendAfter" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter"></a>

```go
SendAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#send_after GoogleProvider#send_after}.

---

### GoogleProviderConfig <a name="GoogleProviderConfig" id="@cdktf/provider-google.provider.GoogleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

&provider.GoogleProviderConfig {
	AccessApprovalCustomEndpoint: *string,
	AccessContextManagerCustomEndpoint: *string,
	AccessToken: *string,
	ActiveDirectoryCustomEndpoint: *string,
	AddTerraformAttributionLabel: interface{},
	Alias: *string,
	AlloydbCustomEndpoint: *string,
	ApigeeCustomEndpoint: *string,
	ApihubCustomEndpoint: *string,
	ApikeysCustomEndpoint: *string,
	AppEngineCustomEndpoint: *string,
	ApphubCustomEndpoint: *string,
	ArtifactRegistryCustomEndpoint: *string,
	AssuredWorkloadsCustomEndpoint: *string,
	BackupDrCustomEndpoint: *string,
	Batching: interface{},
	BeyondcorpCustomEndpoint: *string,
	BiglakeCustomEndpoint: *string,
	BigqueryAnalyticsHubCustomEndpoint: *string,
	BigqueryConnectionCustomEndpoint: *string,
	BigQueryCustomEndpoint: *string,
	BigqueryDatapolicyCustomEndpoint: *string,
	BigqueryDataTransferCustomEndpoint: *string,
	BigqueryReservationCustomEndpoint: *string,
	BigtableCustomEndpoint: *string,
	BillingCustomEndpoint: *string,
	BillingProject: *string,
	BinaryAuthorizationCustomEndpoint: *string,
	BlockchainNodeEngineCustomEndpoint: *string,
	CertificateManagerCustomEndpoint: *string,
	ChronicleCustomEndpoint: *string,
	CloudAssetCustomEndpoint: *string,
	CloudBillingCustomEndpoint: *string,
	CloudBuildCustomEndpoint: *string,
	Cloudbuildv2CustomEndpoint: *string,
	CloudBuildWorkerPoolCustomEndpoint: *string,
	ClouddeployCustomEndpoint: *string,
	ClouddomainsCustomEndpoint: *string,
	Cloudfunctions2CustomEndpoint: *string,
	CloudFunctionsCustomEndpoint: *string,
	CloudIdentityCustomEndpoint: *string,
	CloudIdsCustomEndpoint: *string,
	CloudQuotasCustomEndpoint: *string,
	CloudResourceManagerCustomEndpoint: *string,
	CloudRunCustomEndpoint: *string,
	CloudRunV2CustomEndpoint: *string,
	CloudSchedulerCustomEndpoint: *string,
	CloudTasksCustomEndpoint: *string,
	ColabCustomEndpoint: *string,
	ComposerCustomEndpoint: *string,
	ComputeCustomEndpoint: *string,
	ContainerAnalysisCustomEndpoint: *string,
	ContainerAttachedCustomEndpoint: *string,
	ContainerAwsCustomEndpoint: *string,
	ContainerAzureCustomEndpoint: *string,
	ContainerCustomEndpoint: *string,
	CoreBillingCustomEndpoint: *string,
	Credentials: *string,
	DatabaseMigrationServiceCustomEndpoint: *string,
	DataCatalogCustomEndpoint: *string,
	DataflowCustomEndpoint: *string,
	DataFusionCustomEndpoint: *string,
	DataLossPreventionCustomEndpoint: *string,
	DataPipelineCustomEndpoint: *string,
	DataplexCustomEndpoint: *string,
	DataprocCustomEndpoint: *string,
	DataprocGdcCustomEndpoint: *string,
	DataprocMetastoreCustomEndpoint: *string,
	DatastreamCustomEndpoint: *string,
	DefaultLabels: *map[string]*string,
	DeploymentManagerCustomEndpoint: *string,
	DeveloperConnectCustomEndpoint: *string,
	DialogflowCustomEndpoint: *string,
	DialogflowCxCustomEndpoint: *string,
	DiscoveryEngineCustomEndpoint: *string,
	DnsCustomEndpoint: *string,
	DocumentAiCustomEndpoint: *string,
	DocumentAiWarehouseCustomEndpoint: *string,
	EdgecontainerCustomEndpoint: *string,
	EdgenetworkCustomEndpoint: *string,
	EssentialContactsCustomEndpoint: *string,
	EventarcCustomEndpoint: *string,
	ExternalCredentials: interface{},
	FilestoreCustomEndpoint: *string,
	FirebaseAppCheckCustomEndpoint: *string,
	FirebaseAppHostingCustomEndpoint: *string,
	FirebaseDataConnectCustomEndpoint: *string,
	FirebaserulesCustomEndpoint: *string,
	FirestoreCustomEndpoint: *string,
	GeminiCustomEndpoint: *string,
	GkeBackupCustomEndpoint: *string,
	GkeHub2CustomEndpoint: *string,
	GkeHubCustomEndpoint: *string,
	GkehubFeatureCustomEndpoint: *string,
	GkeonpremCustomEndpoint: *string,
	HealthcareCustomEndpoint: *string,
	Iam2CustomEndpoint: *string,
	Iam3CustomEndpoint: *string,
	IamBetaCustomEndpoint: *string,
	IamCredentialsCustomEndpoint: *string,
	IamCustomEndpoint: *string,
	IamWorkforcePoolCustomEndpoint: *string,
	IapCustomEndpoint: *string,
	IdentityPlatformCustomEndpoint: *string,
	ImpersonateServiceAccount: *string,
	ImpersonateServiceAccountDelegates: *[]*string,
	IntegrationConnectorsCustomEndpoint: *string,
	IntegrationsCustomEndpoint: *string,
	KmsCustomEndpoint: *string,
	LoggingCustomEndpoint: *string,
	LookerCustomEndpoint: *string,
	LustreCustomEndpoint: *string,
	ManagedKafkaCustomEndpoint: *string,
	MemcacheCustomEndpoint: *string,
	MemorystoreCustomEndpoint: *string,
	MigrationCenterCustomEndpoint: *string,
	MlEngineCustomEndpoint: *string,
	MonitoringCustomEndpoint: *string,
	NetappCustomEndpoint: *string,
	NetworkConnectivityCustomEndpoint: *string,
	NetworkManagementCustomEndpoint: *string,
	NetworkSecurityCustomEndpoint: *string,
	NetworkServicesCustomEndpoint: *string,
	NotebooksCustomEndpoint: *string,
	OracleDatabaseCustomEndpoint: *string,
	OrgPolicyCustomEndpoint: *string,
	OsConfigCustomEndpoint: *string,
	OsConfigV2CustomEndpoint: *string,
	OsLoginCustomEndpoint: *string,
	ParallelstoreCustomEndpoint: *string,
	ParameterManagerCustomEndpoint: *string,
	ParameterManagerRegionalCustomEndpoint: *string,
	PrivatecaCustomEndpoint: *string,
	PrivilegedAccessManagerCustomEndpoint: *string,
	Project: *string,
	PublicCaCustomEndpoint: *string,
	PubsubCustomEndpoint: *string,
	PubsubLiteCustomEndpoint: *string,
	RecaptchaEnterpriseCustomEndpoint: *string,
	RedisCustomEndpoint: *string,
	Region: *string,
	RequestReason: *string,
	RequestTimeout: *string,
	ResourceManagerCustomEndpoint: *string,
	ResourceManagerV3CustomEndpoint: *string,
	Scopes: *[]*string,
	SecretManagerCustomEndpoint: *string,
	SecretManagerRegionalCustomEndpoint: *string,
	SecureSourceManagerCustomEndpoint: *string,
	SecurityCenterCustomEndpoint: *string,
	SecurityCenterManagementCustomEndpoint: *string,
	SecurityCenterV2CustomEndpoint: *string,
	SecuritypostureCustomEndpoint: *string,
	ServiceManagementCustomEndpoint: *string,
	ServiceNetworkingCustomEndpoint: *string,
	ServiceUsageCustomEndpoint: *string,
	SiteVerificationCustomEndpoint: *string,
	SourceRepoCustomEndpoint: *string,
	SpannerCustomEndpoint: *string,
	SqlCustomEndpoint: *string,
	StorageBatchOperationsCustomEndpoint: *string,
	StorageControlCustomEndpoint: *string,
	StorageCustomEndpoint: *string,
	StorageInsightsCustomEndpoint: *string,
	StorageTransferCustomEndpoint: *string,
	TagsCustomEndpoint: *string,
	TagsLocationCustomEndpoint: *string,
	TerraformAttributionLabelAdditionStrategy: *string,
	TpuCustomEndpoint: *string,
	TranscoderCustomEndpoint: *string,
	UniverseDomain: *string,
	UserProjectOverride: interface{},
	VertexAiCustomEndpoint: *string,
	VmwareengineCustomEndpoint: *string,
	VpcAccessCustomEndpoint: *string,
	WorkbenchCustomEndpoint: *string,
	WorkflowsCustomEndpoint: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel">AddTerraformAttributionLabel</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint">ApihubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint">ApphubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint">BackupDrCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.batching">Batching</a></code> | <code>interface{}</code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint">BiglakeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject">BillingProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint">BlockchainNodeEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint">ChronicleCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint">ClouddomainsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint">CloudQuotasCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint">ColabCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint">CoreBillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials">Credentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint">DataPipelineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint">DataprocGdcCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels">DefaultLabels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint">DeveloperConnectCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint">DiscoveryEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint">DocumentAiWarehouseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint">EdgecontainerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint">EdgenetworkCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.externalCredentials">ExternalCredentials</a></code> | <code>interface{}</code> | external_credentials block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint">FirebaseAppCheckCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint">FirebaseAppHostingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint">FirebaseDataConnectCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint">GeminiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint">GkeHub2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkehubFeatureCustomEndpoint">GkehubFeatureCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint">Iam3CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint">IntegrationConnectorsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint">IntegrationsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint">LookerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint">LustreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint">ManagedKafkaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint">MemorystoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint">MigrationCenterCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint">NetappCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint">OracleDatabaseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint">OsConfigV2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint">ParallelstoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint">ParameterManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint">ParameterManagerRegionalCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint">PrivilegedAccessManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint">PublicCaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason">RequestReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint">SecretManagerRegionalCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint">SecureSourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint">SecurityCenterManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint">SecurityCenterV2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint">SecuritypostureCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint">SiteVerificationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint">StorageBatchOperationsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint">StorageControlCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint">StorageInsightsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy">TerraformAttributionLabelAdditionStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint">TranscoderCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain">UniverseDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride">UserProjectOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint">VmwareengineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint">WorkbenchCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#zone GoogleProvider#zone}. |

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint"></a>

```go
AccessApprovalCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```go
AccessContextManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#access_token GoogleProvider#access_token}.

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```go
ActiveDirectoryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `AddTerraformAttributionLabel`<sup>Optional</sup> <a name="AddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel"></a>

```go
AddTerraformAttributionLabel interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#alias GoogleProvider#alias}

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint"></a>

```go
AlloydbCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint"></a>

```go
ApigeeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `ApihubCustomEndpoint`<sup>Optional</sup> <a name="ApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint"></a>

```go
ApihubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}.

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint"></a>

```go
ApikeysCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint"></a>

```go
AppEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `ApphubCustomEndpoint`<sup>Optional</sup> <a name="ApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint"></a>

```go
ApphubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```go
ArtifactRegistryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```go
AssuredWorkloadsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `BackupDrCustomEndpoint`<sup>Optional</sup> <a name="BackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint"></a>

```go
BackupDrCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}.

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.batching"></a>

```go
Batching interface{}
```

- *Type:* interface{}

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#batching GoogleProvider#batching}

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint"></a>

```go
BeyondcorpCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `BiglakeCustomEndpoint`<sup>Optional</sup> <a name="BiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint"></a>

```go
BiglakeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```go
BigqueryAnalyticsHubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```go
BigqueryConnectionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint"></a>

```go
BigQueryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```go
BigqueryDatapolicyCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```go
BigqueryDataTransferCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```go
BigqueryReservationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint"></a>

```go
BigtableCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint"></a>

```go
BillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject"></a>

```go
BillingProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#billing_project GoogleProvider#billing_project}.

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```go
BinaryAuthorizationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `BlockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```go
BlockchainNodeEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint"></a>

```go
CertificateManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `ChronicleCustomEndpoint`<sup>Optional</sup> <a name="ChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint"></a>

```go
ChronicleCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}.

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint"></a>

```go
CloudAssetCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint"></a>

```go
CloudBillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint"></a>

```go
CloudBuildCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```go
Cloudbuildv2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```go
CloudBuildWorkerPoolCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint"></a>

```go
ClouddeployCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `ClouddomainsCustomEndpoint`<sup>Optional</sup> <a name="ClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint"></a>

```go
ClouddomainsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```go
Cloudfunctions2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```go
CloudFunctionsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```go
CloudIdentityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint"></a>

```go
CloudIdsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `CloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="CloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```go
CloudQuotasCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```go
CloudResourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint"></a>

```go
CloudRunCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```go
CloudRunV2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```go
CloudSchedulerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint"></a>

```go
CloudTasksCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `ColabCustomEndpoint`<sup>Optional</sup> <a name="ColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint"></a>

```go
ColabCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}.

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint"></a>

```go
ComposerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint"></a>

```go
ComputeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```go
ContainerAnalysisCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint"></a>

```go
ContainerAttachedCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint"></a>

```go
ContainerAwsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint"></a>

```go
ContainerAzureCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint"></a>

```go
ContainerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `CoreBillingCustomEndpoint`<sup>Optional</sup> <a name="CoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint"></a>

```go
CoreBillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#credentials GoogleProvider#credentials}.

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```go
DatabaseMigrationServiceCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint"></a>

```go
DataCatalogCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint"></a>

```go
DataflowCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint"></a>

```go
DataFusionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```go
DataLossPreventionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `DataPipelineCustomEndpoint`<sup>Optional</sup> <a name="DataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint"></a>

```go
DataPipelineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint"></a>

```go
DataplexCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint"></a>

```go
DataprocCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `DataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="DataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```go
DataprocGdcCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}.

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```go
DataprocMetastoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint"></a>

```go
DatastreamCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `DefaultLabels`<sup>Optional</sup> <a name="DefaultLabels" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels"></a>

```go
DefaultLabels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#default_labels GoogleProvider#default_labels}.

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```go
DeploymentManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `DeveloperConnectCustomEndpoint`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint"></a>

```go
DeveloperConnectCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}.

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint"></a>

```go
DialogflowCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```go
DialogflowCxCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `DiscoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```go
DiscoveryEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint"></a>

```go
DnsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint"></a>

```go
DocumentAiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `DocumentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```go
DocumentAiWarehouseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `EdgecontainerCustomEndpoint`<sup>Optional</sup> <a name="EdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint"></a>

```go
EdgecontainerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `EdgenetworkCustomEndpoint`<sup>Optional</sup> <a name="EdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint"></a>

```go
EdgenetworkCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint"></a>

```go
EssentialContactsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint"></a>

```go
EventarcCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `ExternalCredentials`<sup>Optional</sup> <a name="ExternalCredentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.externalCredentials"></a>

```go
ExternalCredentials interface{}
```

- *Type:* interface{}

external_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#external_credentials GoogleProvider#external_credentials}

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint"></a>

```go
FilestoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `FirebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```go
FirebaseAppCheckCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `FirebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint"></a>

```go
FirebaseAppHostingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}.

---

##### `FirebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint"></a>

```go
FirebaseDataConnectCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}.

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint"></a>

```go
FirebaserulesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint"></a>

```go
FirestoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `GeminiCustomEndpoint`<sup>Optional</sup> <a name="GeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint"></a>

```go
GeminiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}.

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint"></a>

```go
GkeBackupCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `GkeHub2CustomEndpoint`<sup>Optional</sup> <a name="GkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint"></a>

```go
GkeHub2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint"></a>

```go
GkeHubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `GkehubFeatureCustomEndpoint`<sup>Optional</sup> <a name="GkehubFeatureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkehubFeatureCustomEndpoint"></a>

```go
GkehubFeatureCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}.

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint"></a>

```go
GkeonpremCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint"></a>

```go
HealthcareCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint"></a>

```go
Iam2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `Iam3CustomEndpoint`<sup>Optional</sup> <a name="Iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint"></a>

```go
Iam3CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}.

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint"></a>

```go
IamBetaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```go
IamCredentialsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint"></a>

```go
IamCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```go
IamWorkforcePoolCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint"></a>

```go
IapCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint"></a>

```go
IdentityPlatformCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount"></a>

```go
ImpersonateServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates"></a>

```go
ImpersonateServiceAccountDelegates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `IntegrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```go
IntegrationConnectorsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `IntegrationsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint"></a>

```go
IntegrationsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint"></a>

```go
KmsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint"></a>

```go
LoggingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `LookerCustomEndpoint`<sup>Optional</sup> <a name="LookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint"></a>

```go
LookerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `LustreCustomEndpoint`<sup>Optional</sup> <a name="LustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint"></a>

```go
LustreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}.

---

##### `ManagedKafkaCustomEndpoint`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint"></a>

```go
ManagedKafkaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}.

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint"></a>

```go
MemcacheCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `MemorystoreCustomEndpoint`<sup>Optional</sup> <a name="MemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint"></a>

```go
MemorystoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}.

---

##### `MigrationCenterCustomEndpoint`<sup>Optional</sup> <a name="MigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint"></a>

```go
MigrationCenterCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint"></a>

```go
MlEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint"></a>

```go
MonitoringCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `NetappCustomEndpoint`<sup>Optional</sup> <a name="NetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint"></a>

```go
NetappCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```go
NetworkConnectivityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint"></a>

```go
NetworkManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint"></a>

```go
NetworkSecurityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint"></a>

```go
NetworkServicesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint"></a>

```go
NotebooksCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `OracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```go
OracleDatabaseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}.

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint"></a>

```go
OrgPolicyCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint"></a>

```go
OsConfigCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `OsConfigV2CustomEndpoint`<sup>Optional</sup> <a name="OsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint"></a>

```go
OsConfigV2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}.

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint"></a>

```go
OsLoginCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `ParallelstoreCustomEndpoint`<sup>Optional</sup> <a name="ParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint"></a>

```go
ParallelstoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}.

---

##### `ParameterManagerCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint"></a>

```go
ParameterManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}.

---

##### `ParameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint"></a>

```go
ParameterManagerRegionalCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}.

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint"></a>

```go
PrivatecaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `PrivilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```go
PrivilegedAccessManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#project GoogleProvider#project}.

---

##### `PublicCaCustomEndpoint`<sup>Optional</sup> <a name="PublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint"></a>

```go
PublicCaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint"></a>

```go
PubsubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```go
PubsubLiteCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```go
RecaptchaEnterpriseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint"></a>

```go
RedisCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#region GoogleProvider#region}.

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason"></a>

```go
RequestReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#request_reason GoogleProvider#request_reason}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint"></a>

```go
ResourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```go
ResourceManagerV3CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#scopes GoogleProvider#scopes}.

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint"></a>

```go
SecretManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `SecretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```go
SecretManagerRegionalCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}.

---

##### `SecureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```go
SecureSourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint"></a>

```go
SecurityCenterCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `SecurityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```go
SecurityCenterManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}.

---

##### `SecurityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```go
SecurityCenterV2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}.

---

##### `SecuritypostureCustomEndpoint`<sup>Optional</sup> <a name="SecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint"></a>

```go
SecuritypostureCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint"></a>

```go
ServiceManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```go
ServiceNetworkingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint"></a>

```go
ServiceUsageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `SiteVerificationCustomEndpoint`<sup>Optional</sup> <a name="SiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint"></a>

```go
SiteVerificationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}.

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint"></a>

```go
SourceRepoCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint"></a>

```go
SpannerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint"></a>

```go
SqlCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `StorageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="StorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint"></a>

```go
StorageBatchOperationsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}.

---

##### `StorageControlCustomEndpoint`<sup>Optional</sup> <a name="StorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint"></a>

```go
StorageControlCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}.

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint"></a>

```go
StorageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `StorageInsightsCustomEndpoint`<sup>Optional</sup> <a name="StorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint"></a>

```go
StorageInsightsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint"></a>

```go
StorageTransferCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint"></a>

```go
TagsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint"></a>

```go
TagsLocationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `TerraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```go
TerraformAttributionLabelAdditionStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint"></a>

```go
TpuCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `TranscoderCustomEndpoint`<sup>Optional</sup> <a name="TranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint"></a>

```go
TranscoderCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}.

---

##### `UniverseDomain`<sup>Optional</sup> <a name="UniverseDomain" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain"></a>

```go
UniverseDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride"></a>

```go
UserProjectOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint"></a>

```go
VertexAiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `VmwareengineCustomEndpoint`<sup>Optional</sup> <a name="VmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint"></a>

```go
VmwareengineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint"></a>

```go
VpcAccessCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `WorkbenchCustomEndpoint`<sup>Optional</sup> <a name="WorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint"></a>

```go
WorkbenchCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint"></a>

```go
WorkflowsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#zone GoogleProvider#zone}.

---

### GoogleProviderExternalCredentials <a name="GoogleProviderExternalCredentials" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/provider"

&provider.GoogleProviderExternalCredentials {
	Audience: *string,
	IdentityToken: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.audience">Audience</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#audience GoogleProvider#audience}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken">IdentityToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#identity_token GoogleProvider#identity_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_account_email GoogleProvider#service_account_email}. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#audience GoogleProvider#audience}.

---

##### `IdentityToken`<sup>Required</sup> <a name="IdentityToken" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken"></a>

```go
IdentityToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#identity_token GoogleProvider#identity_token}.

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs#service_account_email GoogleProvider#service_account_email}.

---



