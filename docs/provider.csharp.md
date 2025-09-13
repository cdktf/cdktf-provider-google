# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProvider <a name="GoogleProvider" id="@cdktf/provider-google.provider.GoogleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs google}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.provider.GoogleProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GoogleProvider(Construct Scope, string Id, GoogleProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig">GoogleProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.provider.GoogleProvider.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContactCenterInsightsCustomEndpoint">ResetContactCenterInsightsCustomEndpoint</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetModelArmorCustomEndpoint">ResetModelArmorCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetModelArmorGlobalCustomEndpoint">ResetModelArmorGlobalCustomEndpoint</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.provider.GoogleProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.provider.GoogleProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.provider.GoogleProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.provider.GoogleProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.provider.GoogleProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.provider.GoogleProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessApprovalCustomEndpoint` <a name="ResetAccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint"></a>

```csharp
private void ResetAccessApprovalCustomEndpoint()
```

##### `ResetAccessContextManagerCustomEndpoint` <a name="ResetAccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint"></a>

```csharp
private void ResetAccessContextManagerCustomEndpoint()
```

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google.provider.GoogleProvider.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetActiveDirectoryCustomEndpoint` <a name="ResetActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint"></a>

```csharp
private void ResetActiveDirectoryCustomEndpoint()
```

##### `ResetAddTerraformAttributionLabel` <a name="ResetAddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel"></a>

```csharp
private void ResetAddTerraformAttributionLabel()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-google.provider.GoogleProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAlloydbCustomEndpoint` <a name="ResetAlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint"></a>

```csharp
private void ResetAlloydbCustomEndpoint()
```

##### `ResetApigeeCustomEndpoint` <a name="ResetApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint"></a>

```csharp
private void ResetApigeeCustomEndpoint()
```

##### `ResetApihubCustomEndpoint` <a name="ResetApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint"></a>

```csharp
private void ResetApihubCustomEndpoint()
```

##### `ResetApikeysCustomEndpoint` <a name="ResetApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint"></a>

```csharp
private void ResetApikeysCustomEndpoint()
```

##### `ResetAppEngineCustomEndpoint` <a name="ResetAppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint"></a>

```csharp
private void ResetAppEngineCustomEndpoint()
```

##### `ResetApphubCustomEndpoint` <a name="ResetApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint"></a>

```csharp
private void ResetApphubCustomEndpoint()
```

##### `ResetArtifactRegistryCustomEndpoint` <a name="ResetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint"></a>

```csharp
private void ResetArtifactRegistryCustomEndpoint()
```

##### `ResetAssuredWorkloadsCustomEndpoint` <a name="ResetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```csharp
private void ResetAssuredWorkloadsCustomEndpoint()
```

##### `ResetBackupDrCustomEndpoint` <a name="ResetBackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint"></a>

```csharp
private void ResetBackupDrCustomEndpoint()
```

##### `ResetBatching` <a name="ResetBatching" id="@cdktf/provider-google.provider.GoogleProvider.resetBatching"></a>

```csharp
private void ResetBatching()
```

##### `ResetBeyondcorpCustomEndpoint` <a name="ResetBeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint"></a>

```csharp
private void ResetBeyondcorpCustomEndpoint()
```

##### `ResetBiglakeCustomEndpoint` <a name="ResetBiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint"></a>

```csharp
private void ResetBiglakeCustomEndpoint()
```

##### `ResetBigqueryAnalyticsHubCustomEndpoint` <a name="ResetBigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```csharp
private void ResetBigqueryAnalyticsHubCustomEndpoint()
```

##### `ResetBigqueryConnectionCustomEndpoint` <a name="ResetBigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint"></a>

```csharp
private void ResetBigqueryConnectionCustomEndpoint()
```

##### `ResetBigQueryCustomEndpoint` <a name="ResetBigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint"></a>

```csharp
private void ResetBigQueryCustomEndpoint()
```

##### `ResetBigqueryDatapolicyCustomEndpoint` <a name="ResetBigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```csharp
private void ResetBigqueryDatapolicyCustomEndpoint()
```

##### `ResetBigqueryDataTransferCustomEndpoint` <a name="ResetBigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```csharp
private void ResetBigqueryDataTransferCustomEndpoint()
```

##### `ResetBigqueryReservationCustomEndpoint` <a name="ResetBigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint"></a>

```csharp
private void ResetBigqueryReservationCustomEndpoint()
```

##### `ResetBigtableCustomEndpoint` <a name="ResetBigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint"></a>

```csharp
private void ResetBigtableCustomEndpoint()
```

##### `ResetBillingCustomEndpoint` <a name="ResetBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint"></a>

```csharp
private void ResetBillingCustomEndpoint()
```

##### `ResetBillingProject` <a name="ResetBillingProject" id="@cdktf/provider-google.provider.GoogleProvider.resetBillingProject"></a>

```csharp
private void ResetBillingProject()
```

##### `ResetBinaryAuthorizationCustomEndpoint` <a name="ResetBinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```csharp
private void ResetBinaryAuthorizationCustomEndpoint()
```

##### `ResetBlockchainNodeEngineCustomEndpoint` <a name="ResetBlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```csharp
private void ResetBlockchainNodeEngineCustomEndpoint()
```

##### `ResetCertificateManagerCustomEndpoint` <a name="ResetCertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint"></a>

```csharp
private void ResetCertificateManagerCustomEndpoint()
```

##### `ResetChronicleCustomEndpoint` <a name="ResetChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint"></a>

```csharp
private void ResetChronicleCustomEndpoint()
```

##### `ResetCloudAssetCustomEndpoint` <a name="ResetCloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint"></a>

```csharp
private void ResetCloudAssetCustomEndpoint()
```

##### `ResetCloudBillingCustomEndpoint` <a name="ResetCloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint"></a>

```csharp
private void ResetCloudBillingCustomEndpoint()
```

##### `ResetCloudBuildCustomEndpoint` <a name="ResetCloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint"></a>

```csharp
private void ResetCloudBuildCustomEndpoint()
```

##### `ResetCloudbuildv2CustomEndpoint` <a name="ResetCloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint"></a>

```csharp
private void ResetCloudbuildv2CustomEndpoint()
```

##### `ResetClouddeployCustomEndpoint` <a name="ResetClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint"></a>

```csharp
private void ResetClouddeployCustomEndpoint()
```

##### `ResetClouddomainsCustomEndpoint` <a name="ResetClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint"></a>

```csharp
private void ResetClouddomainsCustomEndpoint()
```

##### `ResetCloudfunctions2CustomEndpoint` <a name="ResetCloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint"></a>

```csharp
private void ResetCloudfunctions2CustomEndpoint()
```

##### `ResetCloudFunctionsCustomEndpoint` <a name="ResetCloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint"></a>

```csharp
private void ResetCloudFunctionsCustomEndpoint()
```

##### `ResetCloudIdentityCustomEndpoint` <a name="ResetCloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint"></a>

```csharp
private void ResetCloudIdentityCustomEndpoint()
```

##### `ResetCloudIdsCustomEndpoint` <a name="ResetCloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint"></a>

```csharp
private void ResetCloudIdsCustomEndpoint()
```

##### `ResetCloudQuotasCustomEndpoint` <a name="ResetCloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint"></a>

```csharp
private void ResetCloudQuotasCustomEndpoint()
```

##### `ResetCloudResourceManagerCustomEndpoint` <a name="ResetCloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint"></a>

```csharp
private void ResetCloudResourceManagerCustomEndpoint()
```

##### `ResetCloudRunCustomEndpoint` <a name="ResetCloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint"></a>

```csharp
private void ResetCloudRunCustomEndpoint()
```

##### `ResetCloudRunV2CustomEndpoint` <a name="ResetCloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint"></a>

```csharp
private void ResetCloudRunV2CustomEndpoint()
```

##### `ResetCloudSchedulerCustomEndpoint` <a name="ResetCloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint"></a>

```csharp
private void ResetCloudSchedulerCustomEndpoint()
```

##### `ResetCloudTasksCustomEndpoint` <a name="ResetCloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint"></a>

```csharp
private void ResetCloudTasksCustomEndpoint()
```

##### `ResetColabCustomEndpoint` <a name="ResetColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetColabCustomEndpoint"></a>

```csharp
private void ResetColabCustomEndpoint()
```

##### `ResetComposerCustomEndpoint` <a name="ResetComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint"></a>

```csharp
private void ResetComposerCustomEndpoint()
```

##### `ResetComputeCustomEndpoint` <a name="ResetComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint"></a>

```csharp
private void ResetComputeCustomEndpoint()
```

##### `ResetContactCenterInsightsCustomEndpoint` <a name="ResetContactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContactCenterInsightsCustomEndpoint"></a>

```csharp
private void ResetContactCenterInsightsCustomEndpoint()
```

##### `ResetContainerAnalysisCustomEndpoint` <a name="ResetContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint"></a>

```csharp
private void ResetContainerAnalysisCustomEndpoint()
```

##### `ResetContainerAttachedCustomEndpoint` <a name="ResetContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint"></a>

```csharp
private void ResetContainerAttachedCustomEndpoint()
```

##### `ResetContainerAwsCustomEndpoint` <a name="ResetContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint"></a>

```csharp
private void ResetContainerAwsCustomEndpoint()
```

##### `ResetContainerAzureCustomEndpoint` <a name="ResetContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint"></a>

```csharp
private void ResetContainerAzureCustomEndpoint()
```

##### `ResetContainerCustomEndpoint` <a name="ResetContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint"></a>

```csharp
private void ResetContainerCustomEndpoint()
```

##### `ResetCoreBillingCustomEndpoint` <a name="ResetCoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint"></a>

```csharp
private void ResetCoreBillingCustomEndpoint()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDatabaseMigrationServiceCustomEndpoint` <a name="ResetDatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```csharp
private void ResetDatabaseMigrationServiceCustomEndpoint()
```

##### `ResetDataCatalogCustomEndpoint` <a name="ResetDataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint"></a>

```csharp
private void ResetDataCatalogCustomEndpoint()
```

##### `ResetDataflowCustomEndpoint` <a name="ResetDataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint"></a>

```csharp
private void ResetDataflowCustomEndpoint()
```

##### `ResetDataFusionCustomEndpoint` <a name="ResetDataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint"></a>

```csharp
private void ResetDataFusionCustomEndpoint()
```

##### `ResetDataLossPreventionCustomEndpoint` <a name="ResetDataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint"></a>

```csharp
private void ResetDataLossPreventionCustomEndpoint()
```

##### `ResetDataPipelineCustomEndpoint` <a name="ResetDataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint"></a>

```csharp
private void ResetDataPipelineCustomEndpoint()
```

##### `ResetDataplexCustomEndpoint` <a name="ResetDataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint"></a>

```csharp
private void ResetDataplexCustomEndpoint()
```

##### `ResetDataprocCustomEndpoint` <a name="ResetDataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint"></a>

```csharp
private void ResetDataprocCustomEndpoint()
```

##### `ResetDataprocGdcCustomEndpoint` <a name="ResetDataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint"></a>

```csharp
private void ResetDataprocGdcCustomEndpoint()
```

##### `ResetDataprocMetastoreCustomEndpoint` <a name="ResetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint"></a>

```csharp
private void ResetDataprocMetastoreCustomEndpoint()
```

##### `ResetDatastreamCustomEndpoint` <a name="ResetDatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint"></a>

```csharp
private void ResetDatastreamCustomEndpoint()
```

##### `ResetDefaultLabels` <a name="ResetDefaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.resetDefaultLabels"></a>

```csharp
private void ResetDefaultLabels()
```

##### `ResetDeploymentManagerCustomEndpoint` <a name="ResetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint"></a>

```csharp
private void ResetDeploymentManagerCustomEndpoint()
```

##### `ResetDeveloperConnectCustomEndpoint` <a name="ResetDeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint"></a>

```csharp
private void ResetDeveloperConnectCustomEndpoint()
```

##### `ResetDialogflowCustomEndpoint` <a name="ResetDialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint"></a>

```csharp
private void ResetDialogflowCustomEndpoint()
```

##### `ResetDialogflowCxCustomEndpoint` <a name="ResetDialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint"></a>

```csharp
private void ResetDialogflowCxCustomEndpoint()
```

##### `ResetDiscoveryEngineCustomEndpoint` <a name="ResetDiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint"></a>

```csharp
private void ResetDiscoveryEngineCustomEndpoint()
```

##### `ResetDnsCustomEndpoint` <a name="ResetDnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint"></a>

```csharp
private void ResetDnsCustomEndpoint()
```

##### `ResetDocumentAiCustomEndpoint` <a name="ResetDocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint"></a>

```csharp
private void ResetDocumentAiCustomEndpoint()
```

##### `ResetDocumentAiWarehouseCustomEndpoint` <a name="ResetDocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```csharp
private void ResetDocumentAiWarehouseCustomEndpoint()
```

##### `ResetEdgecontainerCustomEndpoint` <a name="ResetEdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint"></a>

```csharp
private void ResetEdgecontainerCustomEndpoint()
```

##### `ResetEdgenetworkCustomEndpoint` <a name="ResetEdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint"></a>

```csharp
private void ResetEdgenetworkCustomEndpoint()
```

##### `ResetEssentialContactsCustomEndpoint` <a name="ResetEssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint"></a>

```csharp
private void ResetEssentialContactsCustomEndpoint()
```

##### `ResetEventarcCustomEndpoint` <a name="ResetEventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint"></a>

```csharp
private void ResetEventarcCustomEndpoint()
```

##### `ResetExternalCredentials` <a name="ResetExternalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetExternalCredentials"></a>

```csharp
private void ResetExternalCredentials()
```

##### `ResetFilestoreCustomEndpoint` <a name="ResetFilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint"></a>

```csharp
private void ResetFilestoreCustomEndpoint()
```

##### `ResetFirebaseAppCheckCustomEndpoint` <a name="ResetFirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```csharp
private void ResetFirebaseAppCheckCustomEndpoint()
```

##### `ResetFirebaseAppHostingCustomEndpoint` <a name="ResetFirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint"></a>

```csharp
private void ResetFirebaseAppHostingCustomEndpoint()
```

##### `ResetFirebaseDataConnectCustomEndpoint` <a name="ResetFirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint"></a>

```csharp
private void ResetFirebaseDataConnectCustomEndpoint()
```

##### `ResetFirebaserulesCustomEndpoint` <a name="ResetFirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint"></a>

```csharp
private void ResetFirebaserulesCustomEndpoint()
```

##### `ResetFirestoreCustomEndpoint` <a name="ResetFirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint"></a>

```csharp
private void ResetFirestoreCustomEndpoint()
```

##### `ResetGeminiCustomEndpoint` <a name="ResetGeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint"></a>

```csharp
private void ResetGeminiCustomEndpoint()
```

##### `ResetGkeBackupCustomEndpoint` <a name="ResetGkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint"></a>

```csharp
private void ResetGkeBackupCustomEndpoint()
```

##### `ResetGkeHub2CustomEndpoint` <a name="ResetGkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint"></a>

```csharp
private void ResetGkeHub2CustomEndpoint()
```

##### `ResetGkeHubCustomEndpoint` <a name="ResetGkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint"></a>

```csharp
private void ResetGkeHubCustomEndpoint()
```

##### `ResetGkeonpremCustomEndpoint` <a name="ResetGkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint"></a>

```csharp
private void ResetGkeonpremCustomEndpoint()
```

##### `ResetHealthcareCustomEndpoint` <a name="ResetHealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint"></a>

```csharp
private void ResetHealthcareCustomEndpoint()
```

##### `ResetIam2CustomEndpoint` <a name="ResetIam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint"></a>

```csharp
private void ResetIam2CustomEndpoint()
```

##### `ResetIam3CustomEndpoint` <a name="ResetIam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint"></a>

```csharp
private void ResetIam3CustomEndpoint()
```

##### `ResetIamBetaCustomEndpoint` <a name="ResetIamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint"></a>

```csharp
private void ResetIamBetaCustomEndpoint()
```

##### `ResetIamCredentialsCustomEndpoint` <a name="ResetIamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint"></a>

```csharp
private void ResetIamCredentialsCustomEndpoint()
```

##### `ResetIamCustomEndpoint` <a name="ResetIamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint"></a>

```csharp
private void ResetIamCustomEndpoint()
```

##### `ResetIamWorkforcePoolCustomEndpoint` <a name="ResetIamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```csharp
private void ResetIamWorkforcePoolCustomEndpoint()
```

##### `ResetIapCustomEndpoint` <a name="ResetIapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint"></a>

```csharp
private void ResetIapCustomEndpoint()
```

##### `ResetIdentityPlatformCustomEndpoint` <a name="ResetIdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint"></a>

```csharp
private void ResetIdentityPlatformCustomEndpoint()
```

##### `ResetImpersonateServiceAccount` <a name="ResetImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount"></a>

```csharp
private void ResetImpersonateServiceAccount()
```

##### `ResetImpersonateServiceAccountDelegates` <a name="ResetImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates"></a>

```csharp
private void ResetImpersonateServiceAccountDelegates()
```

##### `ResetIntegrationConnectorsCustomEndpoint` <a name="ResetIntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```csharp
private void ResetIntegrationConnectorsCustomEndpoint()
```

##### `ResetIntegrationsCustomEndpoint` <a name="ResetIntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint"></a>

```csharp
private void ResetIntegrationsCustomEndpoint()
```

##### `ResetKmsCustomEndpoint` <a name="ResetKmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint"></a>

```csharp
private void ResetKmsCustomEndpoint()
```

##### `ResetLoggingCustomEndpoint` <a name="ResetLoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint"></a>

```csharp
private void ResetLoggingCustomEndpoint()
```

##### `ResetLookerCustomEndpoint` <a name="ResetLookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint"></a>

```csharp
private void ResetLookerCustomEndpoint()
```

##### `ResetLustreCustomEndpoint` <a name="ResetLustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint"></a>

```csharp
private void ResetLustreCustomEndpoint()
```

##### `ResetManagedKafkaCustomEndpoint` <a name="ResetManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint"></a>

```csharp
private void ResetManagedKafkaCustomEndpoint()
```

##### `ResetMemcacheCustomEndpoint` <a name="ResetMemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint"></a>

```csharp
private void ResetMemcacheCustomEndpoint()
```

##### `ResetMemorystoreCustomEndpoint` <a name="ResetMemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint"></a>

```csharp
private void ResetMemorystoreCustomEndpoint()
```

##### `ResetMigrationCenterCustomEndpoint` <a name="ResetMigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint"></a>

```csharp
private void ResetMigrationCenterCustomEndpoint()
```

##### `ResetMlEngineCustomEndpoint` <a name="ResetMlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint"></a>

```csharp
private void ResetMlEngineCustomEndpoint()
```

##### `ResetModelArmorCustomEndpoint` <a name="ResetModelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetModelArmorCustomEndpoint"></a>

```csharp
private void ResetModelArmorCustomEndpoint()
```

##### `ResetModelArmorGlobalCustomEndpoint` <a name="ResetModelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetModelArmorGlobalCustomEndpoint"></a>

```csharp
private void ResetModelArmorGlobalCustomEndpoint()
```

##### `ResetMonitoringCustomEndpoint` <a name="ResetMonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint"></a>

```csharp
private void ResetMonitoringCustomEndpoint()
```

##### `ResetNetappCustomEndpoint` <a name="ResetNetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint"></a>

```csharp
private void ResetNetappCustomEndpoint()
```

##### `ResetNetworkConnectivityCustomEndpoint` <a name="ResetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint"></a>

```csharp
private void ResetNetworkConnectivityCustomEndpoint()
```

##### `ResetNetworkManagementCustomEndpoint` <a name="ResetNetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint"></a>

```csharp
private void ResetNetworkManagementCustomEndpoint()
```

##### `ResetNetworkSecurityCustomEndpoint` <a name="ResetNetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint"></a>

```csharp
private void ResetNetworkSecurityCustomEndpoint()
```

##### `ResetNetworkServicesCustomEndpoint` <a name="ResetNetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint"></a>

```csharp
private void ResetNetworkServicesCustomEndpoint()
```

##### `ResetNotebooksCustomEndpoint` <a name="ResetNotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint"></a>

```csharp
private void ResetNotebooksCustomEndpoint()
```

##### `ResetOracleDatabaseCustomEndpoint` <a name="ResetOracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint"></a>

```csharp
private void ResetOracleDatabaseCustomEndpoint()
```

##### `ResetOrgPolicyCustomEndpoint` <a name="ResetOrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint"></a>

```csharp
private void ResetOrgPolicyCustomEndpoint()
```

##### `ResetOsConfigCustomEndpoint` <a name="ResetOsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint"></a>

```csharp
private void ResetOsConfigCustomEndpoint()
```

##### `ResetOsConfigV2CustomEndpoint` <a name="ResetOsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint"></a>

```csharp
private void ResetOsConfigV2CustomEndpoint()
```

##### `ResetOsLoginCustomEndpoint` <a name="ResetOsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint"></a>

```csharp
private void ResetOsLoginCustomEndpoint()
```

##### `ResetParallelstoreCustomEndpoint` <a name="ResetParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint"></a>

```csharp
private void ResetParallelstoreCustomEndpoint()
```

##### `ResetParameterManagerCustomEndpoint` <a name="ResetParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint"></a>

```csharp
private void ResetParameterManagerCustomEndpoint()
```

##### `ResetParameterManagerRegionalCustomEndpoint` <a name="ResetParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint"></a>

```csharp
private void ResetParameterManagerRegionalCustomEndpoint()
```

##### `ResetPrivatecaCustomEndpoint` <a name="ResetPrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint"></a>

```csharp
private void ResetPrivatecaCustomEndpoint()
```

##### `ResetPrivilegedAccessManagerCustomEndpoint` <a name="ResetPrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```csharp
private void ResetPrivilegedAccessManagerCustomEndpoint()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.provider.GoogleProvider.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicCaCustomEndpoint` <a name="ResetPublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint"></a>

```csharp
private void ResetPublicCaCustomEndpoint()
```

##### `ResetPubsubCustomEndpoint` <a name="ResetPubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint"></a>

```csharp
private void ResetPubsubCustomEndpoint()
```

##### `ResetPubsubLiteCustomEndpoint` <a name="ResetPubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint"></a>

```csharp
private void ResetPubsubLiteCustomEndpoint()
```

##### `ResetRecaptchaEnterpriseCustomEndpoint` <a name="ResetRecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```csharp
private void ResetRecaptchaEnterpriseCustomEndpoint()
```

##### `ResetRedisCustomEndpoint` <a name="ResetRedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint"></a>

```csharp
private void ResetRedisCustomEndpoint()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.provider.GoogleProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRequestReason` <a name="ResetRequestReason" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestReason"></a>

```csharp
private void ResetRequestReason()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetResourceManagerCustomEndpoint` <a name="ResetResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint"></a>

```csharp
private void ResetResourceManagerCustomEndpoint()
```

##### `ResetResourceManagerV3CustomEndpoint` <a name="ResetResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint"></a>

```csharp
private void ResetResourceManagerV3CustomEndpoint()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.provider.GoogleProvider.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecretManagerCustomEndpoint` <a name="ResetSecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint"></a>

```csharp
private void ResetSecretManagerCustomEndpoint()
```

##### `ResetSecretManagerRegionalCustomEndpoint` <a name="ResetSecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```csharp
private void ResetSecretManagerRegionalCustomEndpoint()
```

##### `ResetSecureSourceManagerCustomEndpoint` <a name="ResetSecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint"></a>

```csharp
private void ResetSecureSourceManagerCustomEndpoint()
```

##### `ResetSecurityCenterCustomEndpoint` <a name="ResetSecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint"></a>

```csharp
private void ResetSecurityCenterCustomEndpoint()
```

##### `ResetSecurityCenterManagementCustomEndpoint` <a name="ResetSecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```csharp
private void ResetSecurityCenterManagementCustomEndpoint()
```

##### `ResetSecurityCenterV2CustomEndpoint` <a name="ResetSecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint"></a>

```csharp
private void ResetSecurityCenterV2CustomEndpoint()
```

##### `ResetSecuritypostureCustomEndpoint` <a name="ResetSecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint"></a>

```csharp
private void ResetSecuritypostureCustomEndpoint()
```

##### `ResetServiceManagementCustomEndpoint` <a name="ResetServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint"></a>

```csharp
private void ResetServiceManagementCustomEndpoint()
```

##### `ResetServiceNetworkingCustomEndpoint` <a name="ResetServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint"></a>

```csharp
private void ResetServiceNetworkingCustomEndpoint()
```

##### `ResetServiceUsageCustomEndpoint` <a name="ResetServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint"></a>

```csharp
private void ResetServiceUsageCustomEndpoint()
```

##### `ResetSiteVerificationCustomEndpoint` <a name="ResetSiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint"></a>

```csharp
private void ResetSiteVerificationCustomEndpoint()
```

##### `ResetSourceRepoCustomEndpoint` <a name="ResetSourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint"></a>

```csharp
private void ResetSourceRepoCustomEndpoint()
```

##### `ResetSpannerCustomEndpoint` <a name="ResetSpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint"></a>

```csharp
private void ResetSpannerCustomEndpoint()
```

##### `ResetSqlCustomEndpoint` <a name="ResetSqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint"></a>

```csharp
private void ResetSqlCustomEndpoint()
```

##### `ResetStorageBatchOperationsCustomEndpoint` <a name="ResetStorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint"></a>

```csharp
private void ResetStorageBatchOperationsCustomEndpoint()
```

##### `ResetStorageControlCustomEndpoint` <a name="ResetStorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint"></a>

```csharp
private void ResetStorageControlCustomEndpoint()
```

##### `ResetStorageCustomEndpoint` <a name="ResetStorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint"></a>

```csharp
private void ResetStorageCustomEndpoint()
```

##### `ResetStorageInsightsCustomEndpoint` <a name="ResetStorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint"></a>

```csharp
private void ResetStorageInsightsCustomEndpoint()
```

##### `ResetStorageTransferCustomEndpoint` <a name="ResetStorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint"></a>

```csharp
private void ResetStorageTransferCustomEndpoint()
```

##### `ResetTagsCustomEndpoint` <a name="ResetTagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint"></a>

```csharp
private void ResetTagsCustomEndpoint()
```

##### `ResetTagsLocationCustomEndpoint` <a name="ResetTagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint"></a>

```csharp
private void ResetTagsLocationCustomEndpoint()
```

##### `ResetTerraformAttributionLabelAdditionStrategy` <a name="ResetTerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```csharp
private void ResetTerraformAttributionLabelAdditionStrategy()
```

##### `ResetTpuCustomEndpoint` <a name="ResetTpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint"></a>

```csharp
private void ResetTpuCustomEndpoint()
```

##### `ResetTranscoderCustomEndpoint` <a name="ResetTranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint"></a>

```csharp
private void ResetTranscoderCustomEndpoint()
```

##### `ResetUniverseDomain` <a name="ResetUniverseDomain" id="@cdktf/provider-google.provider.GoogleProvider.resetUniverseDomain"></a>

```csharp
private void ResetUniverseDomain()
```

##### `ResetUserProjectOverride` <a name="ResetUserProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride"></a>

```csharp
private void ResetUserProjectOverride()
```

##### `ResetVertexAiCustomEndpoint` <a name="ResetVertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint"></a>

```csharp
private void ResetVertexAiCustomEndpoint()
```

##### `ResetVmwareengineCustomEndpoint` <a name="ResetVmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint"></a>

```csharp
private void ResetVmwareengineCustomEndpoint()
```

##### `ResetVpcAccessCustomEndpoint` <a name="ResetVpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint"></a>

```csharp
private void ResetVpcAccessCustomEndpoint()
```

##### `ResetWorkbenchCustomEndpoint` <a name="ResetWorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint"></a>

```csharp
private void ResetWorkbenchCustomEndpoint()
```

##### `ResetWorkflowsCustomEndpoint` <a name="ResetWorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint"></a>

```csharp
private void ResetWorkflowsCustomEndpoint()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.provider.GoogleProvider.resetZone"></a>

```csharp
private void ResetZone()
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

```csharp
using HashiCorp.Cdktf.Providers.Google;

GoogleProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GoogleProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GoogleProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GoogleProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput">AccessApprovalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput">AccessContextManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput">ActiveDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput">AddTerraformAttributionLabelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput">AlloydbCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput">ApigeeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput">ApihubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput">ApikeysCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput">AppEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput">ApphubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput">ArtifactRegistryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput">AssuredWorkloadsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput">BackupDrCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batchingInput">BatchingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput">BeyondcorpCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput">BiglakeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput">BigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput">BigqueryConnectionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput">BigQueryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput">BigqueryDatapolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput">BigqueryDataTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput">BigqueryReservationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput">BigtableCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput">BillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput">BillingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput">BinaryAuthorizationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput">BlockchainNodeEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput">CertificateManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput">ChronicleCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput">CloudAssetCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput">CloudBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput">CloudBuildCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput">Cloudbuildv2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput">ClouddeployCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput">ClouddomainsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput">Cloudfunctions2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput">CloudFunctionsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput">CloudIdentityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput">CloudIdsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput">CloudQuotasCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput">CloudResourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput">CloudRunCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput">CloudRunV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput">CloudSchedulerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput">CloudTasksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput">ColabCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput">ComposerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput">ComputeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpointInput">ContactCenterInsightsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput">ContainerAnalysisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput">ContainerAttachedCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput">ContainerAwsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput">ContainerAzureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput">ContainerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput">CoreBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput">DatabaseMigrationServiceCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput">DataCatalogCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput">DataflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput">DataFusionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput">DataLossPreventionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput">DataPipelineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput">DataplexCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput">DataprocCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput">DataprocGdcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput">DataprocMetastoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput">DatastreamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput">DefaultLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput">DeploymentManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput">DeveloperConnectCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput">DialogflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput">DialogflowCxCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput">DiscoveryEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput">DnsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput">DocumentAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput">DocumentAiWarehouseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput">EdgecontainerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput">EdgenetworkCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput">EssentialContactsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput">EventarcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.externalCredentialsInput">ExternalCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput">FilestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput">FirebaseAppCheckCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput">FirebaseAppHostingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput">FirebaseDataConnectCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput">FirebaserulesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput">FirestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput">GeminiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput">GkeBackupCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput">GkeHub2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput">GkeHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput">GkeonpremCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput">HealthcareCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput">Iam2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput">Iam3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput">IamBetaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput">IamCredentialsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput">IamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput">IamWorkforcePoolCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput">IapCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput">IdentityPlatformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput">ImpersonateServiceAccountDelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput">IntegrationConnectorsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput">IntegrationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput">KmsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput">LoggingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput">LookerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput">LustreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput">ManagedKafkaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput">MemcacheCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput">MemorystoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput">MigrationCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput">MlEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpointInput">ModelArmorCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpointInput">ModelArmorGlobalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput">MonitoringCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput">NetappCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput">NetworkConnectivityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput">NetworkManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput">NetworkSecurityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput">NetworkServicesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput">NotebooksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput">OracleDatabaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput">OrgPolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput">OsConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput">OsConfigV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput">OsLoginCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput">ParallelstoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput">ParameterManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput">ParameterManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput">PrivatecaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput">PrivilegedAccessManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput">PublicCaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput">PubsubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput">PubsubLiteCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput">RecaptchaEnterpriseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput">RedisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput">RequestReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput">ResourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput">ResourceManagerV3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput">SecretManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput">SecretManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput">SecureSourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput">SecurityCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput">SecurityCenterManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput">SecurityCenterV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput">SecuritypostureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput">ServiceManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput">ServiceNetworkingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput">ServiceUsageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput">SiteVerificationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput">SourceRepoCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput">SpannerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput">SqlCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput">StorageBatchOperationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput">StorageControlCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput">StorageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput">StorageInsightsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput">StorageTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput">TagsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput">TagsLocationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput">TerraformAttributionLabelAdditionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput">TpuCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput">TranscoderCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput">UniverseDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput">UserProjectOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput">VertexAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput">VmwareengineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput">VpcAccessCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput">WorkbenchCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput">WorkflowsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel">AddTerraformAttributionLabel</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint">ApihubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint">ApphubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint">BackupDrCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batching">Batching</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint">BiglakeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.billingProject">BillingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint">BlockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint">ChronicleCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint">ClouddomainsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint">CloudQuotasCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpoint">ColabCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpoint">ContactCenterInsightsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint">CoreBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint">DataPipelineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint">DataprocGdcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels">DefaultLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint">DeveloperConnectCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint">DiscoveryEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint">DocumentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint">EdgecontainerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint">EdgenetworkCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.externalCredentials">ExternalCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint">FirebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint">FirebaseAppHostingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint">FirebaseDataConnectCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint">GeminiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint">GkeHub2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint">Iam3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint">IntegrationConnectorsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint">IntegrationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint">LookerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint">LustreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint">ManagedKafkaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint">MemorystoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint">MigrationCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpoint">ModelArmorCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpoint">ModelArmorGlobalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint">NetappCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint">OracleDatabaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint">OsConfigV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint">ParallelstoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint">ParameterManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint">ParameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint">PrivilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint">PublicCaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestReason">RequestReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout">RequestTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint">SecretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint">SecureSourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint">SecurityCenterManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint">SecurityCenterV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint">SecuritypostureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint">SiteVerificationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint">StorageBatchOperationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint">StorageControlCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint">StorageInsightsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy">TerraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint">TranscoderCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.universeDomain">UniverseDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride">UserProjectOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint">VmwareengineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint">WorkbenchCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.provider.GoogleProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.provider.GoogleProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.provider.GoogleProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.provider.GoogleProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-google.provider.GoogleProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google.provider.GoogleProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="AccessApprovalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput"></a>

```csharp
public string AccessApprovalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AccessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput"></a>

```csharp
public string AccessContextManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google.provider.GoogleProvider.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput"></a>

```csharp
public string ActiveDirectoryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AddTerraformAttributionLabelInput`<sup>Optional</sup> <a name="AddTerraformAttributionLabelInput" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput"></a>

```csharp
public object AddTerraformAttributionLabelInput { get; }
```

- *Type:* object

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google.provider.GoogleProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AlloydbCustomEndpointInput`<sup>Optional</sup> <a name="AlloydbCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput"></a>

```csharp
public string AlloydbCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApigeeCustomEndpointInput`<sup>Optional</sup> <a name="ApigeeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput"></a>

```csharp
public string ApigeeCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApihubCustomEndpointInput`<sup>Optional</sup> <a name="ApihubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput"></a>

```csharp
public string ApihubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApikeysCustomEndpointInput`<sup>Optional</sup> <a name="ApikeysCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput"></a>

```csharp
public string ApikeysCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AppEngineCustomEndpointInput`<sup>Optional</sup> <a name="AppEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput"></a>

```csharp
public string AppEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ApphubCustomEndpointInput`<sup>Optional</sup> <a name="ApphubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput"></a>

```csharp
public string ApphubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ArtifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput"></a>

```csharp
public string ArtifactRegistryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `AssuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```csharp
public string AssuredWorkloadsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BackupDrCustomEndpointInput`<sup>Optional</sup> <a name="BackupDrCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput"></a>

```csharp
public string BackupDrCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BatchingInput`<sup>Optional</sup> <a name="BatchingInput" id="@cdktf/provider-google.provider.GoogleProvider.property.batchingInput"></a>

```csharp
public object BatchingInput { get; }
```

- *Type:* object

---

##### `BeyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="BeyondcorpCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput"></a>

```csharp
public string BeyondcorpCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BiglakeCustomEndpointInput`<sup>Optional</sup> <a name="BiglakeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput"></a>

```csharp
public string BiglakeCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```csharp
public string BigqueryAnalyticsHubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```csharp
public string BigqueryConnectionCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigQueryCustomEndpointInput`<sup>Optional</sup> <a name="BigQueryCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput"></a>

```csharp
public string BigQueryCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```csharp
public string BigqueryDatapolicyCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```csharp
public string BigqueryDataTransferCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput"></a>

```csharp
public string BigqueryReservationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BigtableCustomEndpointInput`<sup>Optional</sup> <a name="BigtableCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput"></a>

```csharp
public string BigtableCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BillingCustomEndpointInput`<sup>Optional</sup> <a name="BillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput"></a>

```csharp
public string BillingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProjectInput"></a>

```csharp
public string BillingProjectInput { get; }
```

- *Type:* string

---

##### `BinaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```csharp
public string BinaryAuthorizationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `BlockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```csharp
public string BlockchainNodeEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CertificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="CertificateManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput"></a>

```csharp
public string CertificateManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ChronicleCustomEndpointInput`<sup>Optional</sup> <a name="ChronicleCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput"></a>

```csharp
public string ChronicleCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="CloudAssetCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput"></a>

```csharp
public string CloudAssetCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="CloudBillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput"></a>

```csharp
public string CloudBillingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="CloudBuildCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput"></a>

```csharp
public string CloudBuildCustomEndpointInput { get; }
```

- *Type:* string

---

##### `Cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput"></a>

```csharp
public string Cloudbuildv2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `ClouddeployCustomEndpointInput`<sup>Optional</sup> <a name="ClouddeployCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput"></a>

```csharp
public string ClouddeployCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ClouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="ClouddomainsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput"></a>

```csharp
public string ClouddomainsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `Cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput"></a>

```csharp
public string Cloudfunctions2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput"></a>

```csharp
public string CloudFunctionsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdentityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput"></a>

```csharp
public string CloudIdentityCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="CloudIdsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput"></a>

```csharp
public string CloudIdsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="CloudQuotasCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput"></a>

```csharp
public string CloudQuotasCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```csharp
public string CloudResourceManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudRunCustomEndpointInput`<sup>Optional</sup> <a name="CloudRunCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput"></a>

```csharp
public string CloudRunCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="CloudRunV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput"></a>

```csharp
public string CloudRunV2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput"></a>

```csharp
public string CloudSchedulerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="CloudTasksCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput"></a>

```csharp
public string CloudTasksCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ColabCustomEndpointInput`<sup>Optional</sup> <a name="ColabCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput"></a>

```csharp
public string ColabCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ComposerCustomEndpointInput`<sup>Optional</sup> <a name="ComposerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput"></a>

```csharp
public string ComposerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ComputeCustomEndpointInput`<sup>Optional</sup> <a name="ComputeCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput"></a>

```csharp
public string ComputeCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContactCenterInsightsCustomEndpointInput`<sup>Optional</sup> <a name="ContactCenterInsightsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpointInput"></a>

```csharp
public string ContactCenterInsightsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput"></a>

```csharp
public string ContainerAnalysisCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput"></a>

```csharp
public string ContainerAttachedCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAwsCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAwsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput"></a>

```csharp
public string ContainerAwsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerAzureCustomEndpointInput`<sup>Optional</sup> <a name="ContainerAzureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput"></a>

```csharp
public string ContainerAzureCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ContainerCustomEndpointInput`<sup>Optional</sup> <a name="ContainerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput"></a>

```csharp
public string ContainerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CoreBillingCustomEndpointInput`<sup>Optional</sup> <a name="CoreBillingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput"></a>

```csharp
public string CoreBillingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `DatabaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```csharp
public string DatabaseMigrationServiceCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="DataCatalogCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput"></a>

```csharp
public string DataCatalogCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataflowCustomEndpointInput`<sup>Optional</sup> <a name="DataflowCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput"></a>

```csharp
public string DataflowCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataFusionCustomEndpointInput`<sup>Optional</sup> <a name="DataFusionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput"></a>

```csharp
public string DataFusionCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput"></a>

```csharp
public string DataLossPreventionCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="DataPipelineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput"></a>

```csharp
public string DataPipelineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataplexCustomEndpointInput`<sup>Optional</sup> <a name="DataplexCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput"></a>

```csharp
public string DataplexCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataprocCustomEndpointInput`<sup>Optional</sup> <a name="DataprocCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput"></a>

```csharp
public string DataprocCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="DataprocGdcCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput"></a>

```csharp
public string DataprocGdcCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```csharp
public string DataprocMetastoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DatastreamCustomEndpointInput`<sup>Optional</sup> <a name="DatastreamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput"></a>

```csharp
public string DatastreamCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DefaultLabelsInput`<sup>Optional</sup> <a name="DefaultLabelsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput"></a>

```csharp
public string DeploymentManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DeveloperConnectCustomEndpointInput`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput"></a>

```csharp
public string DeveloperConnectCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DialogflowCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput"></a>

```csharp
public string DialogflowCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="DialogflowCxCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput"></a>

```csharp
public string DialogflowCxCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DiscoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput"></a>

```csharp
public string DiscoveryEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DnsCustomEndpointInput`<sup>Optional</sup> <a name="DnsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput"></a>

```csharp
public string DnsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DocumentAiCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput"></a>

```csharp
public string DocumentAiCustomEndpointInput { get; }
```

- *Type:* string

---

##### `DocumentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```csharp
public string DocumentAiWarehouseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EdgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="EdgecontainerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput"></a>

```csharp
public string EdgecontainerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EdgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="EdgenetworkCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput"></a>

```csharp
public string EdgenetworkCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EssentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="EssentialContactsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput"></a>

```csharp
public string EssentialContactsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `EventarcCustomEndpointInput`<sup>Optional</sup> <a name="EventarcCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput"></a>

```csharp
public string EventarcCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ExternalCredentialsInput`<sup>Optional</sup> <a name="ExternalCredentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.externalCredentialsInput"></a>

```csharp
public object ExternalCredentialsInput { get; }
```

- *Type:* object

---

##### `FilestoreCustomEndpointInput`<sup>Optional</sup> <a name="FilestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput"></a>

```csharp
public string FilestoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```csharp
public string FirebaseAppCheckCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseAppHostingCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseAppHostingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput"></a>

```csharp
public string FirebaseAppHostingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaseDataConnectCustomEndpointInput`<sup>Optional</sup> <a name="FirebaseDataConnectCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput"></a>

```csharp
public string FirebaseDataConnectCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="FirebaserulesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput"></a>

```csharp
public string FirebaserulesCustomEndpointInput { get; }
```

- *Type:* string

---

##### `FirestoreCustomEndpointInput`<sup>Optional</sup> <a name="FirestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput"></a>

```csharp
public string FirestoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GeminiCustomEndpointInput`<sup>Optional</sup> <a name="GeminiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput"></a>

```csharp
public string GeminiCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="GkeBackupCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput"></a>

```csharp
public string GkeBackupCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="GkeHub2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput"></a>

```csharp
public string GkeHub2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeHubCustomEndpointInput`<sup>Optional</sup> <a name="GkeHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput"></a>

```csharp
public string GkeHubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `GkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="GkeonpremCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput"></a>

```csharp
public string GkeonpremCustomEndpointInput { get; }
```

- *Type:* string

---

##### `HealthcareCustomEndpointInput`<sup>Optional</sup> <a name="HealthcareCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput"></a>

```csharp
public string HealthcareCustomEndpointInput { get; }
```

- *Type:* string

---

##### `Iam2CustomEndpointInput`<sup>Optional</sup> <a name="Iam2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput"></a>

```csharp
public string Iam2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `Iam3CustomEndpointInput`<sup>Optional</sup> <a name="Iam3CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput"></a>

```csharp
public string Iam3CustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamBetaCustomEndpointInput`<sup>Optional</sup> <a name="IamBetaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput"></a>

```csharp
public string IamBetaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="IamCredentialsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput"></a>

```csharp
public string IamCredentialsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamCustomEndpointInput`<sup>Optional</sup> <a name="IamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput"></a>

```csharp
public string IamCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```csharp
public string IamWorkforcePoolCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IapCustomEndpointInput`<sup>Optional</sup> <a name="IapCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput"></a>

```csharp
public string IapCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IdentityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput"></a>

```csharp
public string IdentityPlatformCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ImpersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegatesInput" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput"></a>

```csharp
public string[] ImpersonateServiceAccountDelegatesInput { get; }
```

- *Type:* string[]

---

##### `ImpersonateServiceAccountInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountInput" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput"></a>

```csharp
public string ImpersonateServiceAccountInput { get; }
```

- *Type:* string

---

##### `IntegrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput"></a>

```csharp
public string IntegrationConnectorsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `IntegrationsCustomEndpointInput`<sup>Optional</sup> <a name="IntegrationsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput"></a>

```csharp
public string IntegrationsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `KmsCustomEndpointInput`<sup>Optional</sup> <a name="KmsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput"></a>

```csharp
public string KmsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `LoggingCustomEndpointInput`<sup>Optional</sup> <a name="LoggingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput"></a>

```csharp
public string LoggingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `LookerCustomEndpointInput`<sup>Optional</sup> <a name="LookerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput"></a>

```csharp
public string LookerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `LustreCustomEndpointInput`<sup>Optional</sup> <a name="LustreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput"></a>

```csharp
public string LustreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ManagedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput"></a>

```csharp
public string ManagedKafkaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MemcacheCustomEndpointInput`<sup>Optional</sup> <a name="MemcacheCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput"></a>

```csharp
public string MemcacheCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MemorystoreCustomEndpointInput`<sup>Optional</sup> <a name="MemorystoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput"></a>

```csharp
public string MemorystoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MigrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="MigrationCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput"></a>

```csharp
public string MigrationCenterCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MlEngineCustomEndpointInput`<sup>Optional</sup> <a name="MlEngineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput"></a>

```csharp
public string MlEngineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ModelArmorCustomEndpointInput`<sup>Optional</sup> <a name="ModelArmorCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpointInput"></a>

```csharp
public string ModelArmorCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ModelArmorGlobalCustomEndpointInput`<sup>Optional</sup> <a name="ModelArmorGlobalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpointInput"></a>

```csharp
public string ModelArmorGlobalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `MonitoringCustomEndpointInput`<sup>Optional</sup> <a name="MonitoringCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput"></a>

```csharp
public string MonitoringCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetappCustomEndpointInput`<sup>Optional</sup> <a name="NetappCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput"></a>

```csharp
public string NetappCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput"></a>

```csharp
public string NetworkConnectivityCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkManagementCustomEndpointInput`<sup>Optional</sup> <a name="NetworkManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput"></a>

```csharp
public string NetworkManagementCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput"></a>

```csharp
public string NetworkSecurityCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NetworkServicesCustomEndpointInput`<sup>Optional</sup> <a name="NetworkServicesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput"></a>

```csharp
public string NetworkServicesCustomEndpointInput { get; }
```

- *Type:* string

---

##### `NotebooksCustomEndpointInput`<sup>Optional</sup> <a name="NotebooksCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput"></a>

```csharp
public string NotebooksCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput"></a>

```csharp
public string OracleDatabaseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OrgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="OrgPolicyCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput"></a>

```csharp
public string OrgPolicyCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OsConfigCustomEndpointInput`<sup>Optional</sup> <a name="OsConfigCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput"></a>

```csharp
public string OsConfigCustomEndpointInput { get; }
```

- *Type:* string

---

##### `OsConfigV2CustomEndpointInput`<sup>Optional</sup> <a name="OsConfigV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput"></a>

```csharp
public string OsConfigV2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `OsLoginCustomEndpointInput`<sup>Optional</sup> <a name="OsLoginCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput"></a>

```csharp
public string OsLoginCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ParallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="ParallelstoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput"></a>

```csharp
public string ParallelstoreCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ParameterManagerCustomEndpointInput`<sup>Optional</sup> <a name="ParameterManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput"></a>

```csharp
public string ParameterManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ParameterManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput"></a>

```csharp
public string ParameterManagerRegionalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PrivatecaCustomEndpointInput`<sup>Optional</sup> <a name="PrivatecaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput"></a>

```csharp
public string PrivatecaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PrivilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```csharp
public string PrivilegedAccessManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicCaCustomEndpointInput`<sup>Optional</sup> <a name="PublicCaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput"></a>

```csharp
public string PublicCaCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PubsubCustomEndpointInput`<sup>Optional</sup> <a name="PubsubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput"></a>

```csharp
public string PubsubCustomEndpointInput { get; }
```

- *Type:* string

---

##### `PubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="PubsubLiteCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput"></a>

```csharp
public string PubsubLiteCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RecaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```csharp
public string RecaptchaEnterpriseCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RedisCustomEndpointInput`<sup>Optional</sup> <a name="RedisCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput"></a>

```csharp
public string RedisCustomEndpointInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.provider.GoogleProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RequestReasonInput`<sup>Optional</sup> <a name="RequestReasonInput" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReasonInput"></a>

```csharp
public string RequestReasonInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeoutInput"></a>

```csharp
public string RequestTimeoutInput { get; }
```

- *Type:* string

---

##### `ResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput"></a>

```csharp
public string ResourceManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput"></a>

```csharp
public string ResourceManagerV3CustomEndpointInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.provider.GoogleProvider.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput"></a>

```csharp
public string SecretManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```csharp
public string SecretManagerRegionalCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput"></a>

```csharp
public string SecureSourceManagerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityCenterCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput"></a>

```csharp
public string SecurityCenterCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput"></a>

```csharp
public string SecurityCenterManagementCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecurityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput"></a>

```csharp
public string SecurityCenterV2CustomEndpointInput { get; }
```

- *Type:* string

---

##### `SecuritypostureCustomEndpointInput`<sup>Optional</sup> <a name="SecuritypostureCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput"></a>

```csharp
public string SecuritypostureCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceManagementCustomEndpointInput`<sup>Optional</sup> <a name="ServiceManagementCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput"></a>

```csharp
public string ServiceManagementCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput"></a>

```csharp
public string ServiceNetworkingCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ServiceUsageCustomEndpointInput`<sup>Optional</sup> <a name="ServiceUsageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput"></a>

```csharp
public string ServiceUsageCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SiteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="SiteVerificationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput"></a>

```csharp
public string SiteVerificationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="SourceRepoCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput"></a>

```csharp
public string SourceRepoCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SpannerCustomEndpointInput`<sup>Optional</sup> <a name="SpannerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput"></a>

```csharp
public string SpannerCustomEndpointInput { get; }
```

- *Type:* string

---

##### `SqlCustomEndpointInput`<sup>Optional</sup> <a name="SqlCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput"></a>

```csharp
public string SqlCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageBatchOperationsCustomEndpointInput`<sup>Optional</sup> <a name="StorageBatchOperationsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput"></a>

```csharp
public string StorageBatchOperationsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageControlCustomEndpointInput`<sup>Optional</sup> <a name="StorageControlCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput"></a>

```csharp
public string StorageControlCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageCustomEndpointInput`<sup>Optional</sup> <a name="StorageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput"></a>

```csharp
public string StorageCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="StorageInsightsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput"></a>

```csharp
public string StorageInsightsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `StorageTransferCustomEndpointInput`<sup>Optional</sup> <a name="StorageTransferCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput"></a>

```csharp
public string StorageTransferCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TagsCustomEndpointInput`<sup>Optional</sup> <a name="TagsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput"></a>

```csharp
public string TagsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="TagsLocationCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput"></a>

```csharp
public string TagsLocationCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TerraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategyInput" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```csharp
public string TerraformAttributionLabelAdditionStrategyInput { get; }
```

- *Type:* string

---

##### `TpuCustomEndpointInput`<sup>Optional</sup> <a name="TpuCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput"></a>

```csharp
public string TpuCustomEndpointInput { get; }
```

- *Type:* string

---

##### `TranscoderCustomEndpointInput`<sup>Optional</sup> <a name="TranscoderCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput"></a>

```csharp
public string TranscoderCustomEndpointInput { get; }
```

- *Type:* string

---

##### `UniverseDomainInput`<sup>Optional</sup> <a name="UniverseDomainInput" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomainInput"></a>

```csharp
public string UniverseDomainInput { get; }
```

- *Type:* string

---

##### `UserProjectOverrideInput`<sup>Optional</sup> <a name="UserProjectOverrideInput" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput"></a>

```csharp
public object UserProjectOverrideInput { get; }
```

- *Type:* object

---

##### `VertexAiCustomEndpointInput`<sup>Optional</sup> <a name="VertexAiCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput"></a>

```csharp
public string VertexAiCustomEndpointInput { get; }
```

- *Type:* string

---

##### `VmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="VmwareengineCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput"></a>

```csharp
public string VmwareengineCustomEndpointInput { get; }
```

- *Type:* string

---

##### `VpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="VpcAccessCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput"></a>

```csharp
public string VpcAccessCustomEndpointInput { get; }
```

- *Type:* string

---

##### `WorkbenchCustomEndpointInput`<sup>Optional</sup> <a name="WorkbenchCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput"></a>

```csharp
public string WorkbenchCustomEndpointInput { get; }
```

- *Type:* string

---

##### `WorkflowsCustomEndpointInput`<sup>Optional</sup> <a name="WorkflowsCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput"></a>

```csharp
public string WorkflowsCustomEndpointInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.provider.GoogleProvider.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint"></a>

```csharp
public string AccessApprovalCustomEndpoint { get; }
```

- *Type:* string

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint"></a>

```csharp
public string AccessContextManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.provider.GoogleProvider.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint"></a>

```csharp
public string ActiveDirectoryCustomEndpoint { get; }
```

- *Type:* string

---

##### `AddTerraformAttributionLabel`<sup>Optional</sup> <a name="AddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel"></a>

```csharp
public object AddTerraformAttributionLabel { get; }
```

- *Type:* object

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint"></a>

```csharp
public string AlloydbCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint"></a>

```csharp
public string ApigeeCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApihubCustomEndpoint`<sup>Optional</sup> <a name="ApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint"></a>

```csharp
public string ApihubCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint"></a>

```csharp
public string ApikeysCustomEndpoint { get; }
```

- *Type:* string

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint"></a>

```csharp
public string AppEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `ApphubCustomEndpoint`<sup>Optional</sup> <a name="ApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint"></a>

```csharp
public string ApphubCustomEndpoint { get; }
```

- *Type:* string

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint"></a>

```csharp
public string ArtifactRegistryCustomEndpoint { get; }
```

- *Type:* string

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint"></a>

```csharp
public string AssuredWorkloadsCustomEndpoint { get; }
```

- *Type:* string

---

##### `BackupDrCustomEndpoint`<sup>Optional</sup> <a name="BackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint"></a>

```csharp
public string BackupDrCustomEndpoint { get; }
```

- *Type:* string

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google.provider.GoogleProvider.property.batching"></a>

```csharp
public object Batching { get; }
```

- *Type:* object

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint"></a>

```csharp
public string BeyondcorpCustomEndpoint { get; }
```

- *Type:* string

---

##### `BiglakeCustomEndpoint`<sup>Optional</sup> <a name="BiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint"></a>

```csharp
public string BiglakeCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```csharp
public string BigqueryAnalyticsHubCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint"></a>

```csharp
public string BigqueryConnectionCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint"></a>

```csharp
public string BigQueryCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```csharp
public string BigqueryDatapolicyCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```csharp
public string BigqueryDataTransferCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint"></a>

```csharp
public string BigqueryReservationCustomEndpoint { get; }
```

- *Type:* string

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint"></a>

```csharp
public string BigtableCustomEndpoint { get; }
```

- *Type:* string

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.billingCustomEndpoint"></a>

```csharp
public string BillingCustomEndpoint { get; }
```

- *Type:* string

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.provider.GoogleProvider.property.billingProject"></a>

```csharp
public string BillingProject { get; }
```

- *Type:* string

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint"></a>

```csharp
public string BinaryAuthorizationCustomEndpoint { get; }
```

- *Type:* string

---

##### `BlockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```csharp
public string BlockchainNodeEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint"></a>

```csharp
public string CertificateManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ChronicleCustomEndpoint`<sup>Optional</sup> <a name="ChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint"></a>

```csharp
public string ChronicleCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint"></a>

```csharp
public string CloudAssetCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint"></a>

```csharp
public string CloudBillingCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint"></a>

```csharp
public string CloudBuildCustomEndpoint { get; }
```

- *Type:* string

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint"></a>

```csharp
public string Cloudbuildv2CustomEndpoint { get; }
```

- *Type:* string

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint"></a>

```csharp
public string ClouddeployCustomEndpoint { get; }
```

- *Type:* string

---

##### `ClouddomainsCustomEndpoint`<sup>Optional</sup> <a name="ClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint"></a>

```csharp
public string ClouddomainsCustomEndpoint { get; }
```

- *Type:* string

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint"></a>

```csharp
public string Cloudfunctions2CustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint"></a>

```csharp
public string CloudFunctionsCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint"></a>

```csharp
public string CloudIdentityCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint"></a>

```csharp
public string CloudIdsCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="CloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint"></a>

```csharp
public string CloudQuotasCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint"></a>

```csharp
public string CloudResourceManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint"></a>

```csharp
public string CloudRunCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint"></a>

```csharp
public string CloudRunV2CustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint"></a>

```csharp
public string CloudSchedulerCustomEndpoint { get; }
```

- *Type:* string

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint"></a>

```csharp
public string CloudTasksCustomEndpoint { get; }
```

- *Type:* string

---

##### `ColabCustomEndpoint`<sup>Optional</sup> <a name="ColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.colabCustomEndpoint"></a>

```csharp
public string ColabCustomEndpoint { get; }
```

- *Type:* string

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint"></a>

```csharp
public string ComposerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint"></a>

```csharp
public string ComputeCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="ContactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpoint"></a>

```csharp
public string ContactCenterInsightsCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint"></a>

```csharp
public string ContainerAnalysisCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint"></a>

```csharp
public string ContainerAttachedCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint"></a>

```csharp
public string ContainerAwsCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint"></a>

```csharp
public string ContainerAzureCustomEndpoint { get; }
```

- *Type:* string

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint"></a>

```csharp
public string ContainerCustomEndpoint { get; }
```

- *Type:* string

---

##### `CoreBillingCustomEndpoint`<sup>Optional</sup> <a name="CoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint"></a>

```csharp
public string CoreBillingCustomEndpoint { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.provider.GoogleProvider.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```csharp
public string DatabaseMigrationServiceCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint"></a>

```csharp
public string DataCatalogCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint"></a>

```csharp
public string DataflowCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint"></a>

```csharp
public string DataFusionCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint"></a>

```csharp
public string DataLossPreventionCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataPipelineCustomEndpoint`<sup>Optional</sup> <a name="DataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint"></a>

```csharp
public string DataPipelineCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint"></a>

```csharp
public string DataplexCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint"></a>

```csharp
public string DataprocCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="DataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint"></a>

```csharp
public string DataprocGdcCustomEndpoint { get; }
```

- *Type:* string

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint"></a>

```csharp
public string DataprocMetastoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint"></a>

```csharp
public string DatastreamCustomEndpoint { get; }
```

- *Type:* string

---

##### `DefaultLabels`<sup>Optional</sup> <a name="DefaultLabels" id="@cdktf/provider-google.provider.GoogleProvider.property.defaultLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint"></a>

```csharp
public string DeploymentManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `DeveloperConnectCustomEndpoint`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint"></a>

```csharp
public string DeveloperConnectCustomEndpoint { get; }
```

- *Type:* string

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint"></a>

```csharp
public string DialogflowCustomEndpoint { get; }
```

- *Type:* string

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint"></a>

```csharp
public string DialogflowCxCustomEndpoint { get; }
```

- *Type:* string

---

##### `DiscoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint"></a>

```csharp
public string DiscoveryEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint"></a>

```csharp
public string DnsCustomEndpoint { get; }
```

- *Type:* string

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint"></a>

```csharp
public string DocumentAiCustomEndpoint { get; }
```

- *Type:* string

---

##### `DocumentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint"></a>

```csharp
public string DocumentAiWarehouseCustomEndpoint { get; }
```

- *Type:* string

---

##### `EdgecontainerCustomEndpoint`<sup>Optional</sup> <a name="EdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint"></a>

```csharp
public string EdgecontainerCustomEndpoint { get; }
```

- *Type:* string

---

##### `EdgenetworkCustomEndpoint`<sup>Optional</sup> <a name="EdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint"></a>

```csharp
public string EdgenetworkCustomEndpoint { get; }
```

- *Type:* string

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint"></a>

```csharp
public string EssentialContactsCustomEndpoint { get; }
```

- *Type:* string

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint"></a>

```csharp
public string EventarcCustomEndpoint { get; }
```

- *Type:* string

---

##### `ExternalCredentials`<sup>Optional</sup> <a name="ExternalCredentials" id="@cdktf/provider-google.provider.GoogleProvider.property.externalCredentials"></a>

```csharp
public object ExternalCredentials { get; }
```

- *Type:* object

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint"></a>

```csharp
public string FilestoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint"></a>

```csharp
public string FirebaseAppCheckCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint"></a>

```csharp
public string FirebaseAppHostingCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint"></a>

```csharp
public string FirebaseDataConnectCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint"></a>

```csharp
public string FirebaserulesCustomEndpoint { get; }
```

- *Type:* string

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint"></a>

```csharp
public string FirestoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `GeminiCustomEndpoint`<sup>Optional</sup> <a name="GeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint"></a>

```csharp
public string GeminiCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint"></a>

```csharp
public string GkeBackupCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeHub2CustomEndpoint`<sup>Optional</sup> <a name="GkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint"></a>

```csharp
public string GkeHub2CustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint"></a>

```csharp
public string GkeHubCustomEndpoint { get; }
```

- *Type:* string

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint"></a>

```csharp
public string GkeonpremCustomEndpoint { get; }
```

- *Type:* string

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint"></a>

```csharp
public string HealthcareCustomEndpoint { get; }
```

- *Type:* string

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint"></a>

```csharp
public string Iam2CustomEndpoint { get; }
```

- *Type:* string

---

##### `Iam3CustomEndpoint`<sup>Optional</sup> <a name="Iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint"></a>

```csharp
public string Iam3CustomEndpoint { get; }
```

- *Type:* string

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint"></a>

```csharp
public string IamBetaCustomEndpoint { get; }
```

- *Type:* string

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint"></a>

```csharp
public string IamCredentialsCustomEndpoint { get; }
```

- *Type:* string

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint"></a>

```csharp
public string IamCustomEndpoint { get; }
```

- *Type:* string

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```csharp
public string IamWorkforcePoolCustomEndpoint { get; }
```

- *Type:* string

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint"></a>

```csharp
public string IapCustomEndpoint { get; }
```

- *Type:* string

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint"></a>

```csharp
public string IdentityPlatformCustomEndpoint { get; }
```

- *Type:* string

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount"></a>

```csharp
public string ImpersonateServiceAccount { get; }
```

- *Type:* string

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates"></a>

```csharp
public string[] ImpersonateServiceAccountDelegates { get; }
```

- *Type:* string[]

---

##### `IntegrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint"></a>

```csharp
public string IntegrationConnectorsCustomEndpoint { get; }
```

- *Type:* string

---

##### `IntegrationsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint"></a>

```csharp
public string IntegrationsCustomEndpoint { get; }
```

- *Type:* string

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint"></a>

```csharp
public string KmsCustomEndpoint { get; }
```

- *Type:* string

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint"></a>

```csharp
public string LoggingCustomEndpoint { get; }
```

- *Type:* string

---

##### `LookerCustomEndpoint`<sup>Optional</sup> <a name="LookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint"></a>

```csharp
public string LookerCustomEndpoint { get; }
```

- *Type:* string

---

##### `LustreCustomEndpoint`<sup>Optional</sup> <a name="LustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint"></a>

```csharp
public string LustreCustomEndpoint { get; }
```

- *Type:* string

---

##### `ManagedKafkaCustomEndpoint`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint"></a>

```csharp
public string ManagedKafkaCustomEndpoint { get; }
```

- *Type:* string

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint"></a>

```csharp
public string MemcacheCustomEndpoint { get; }
```

- *Type:* string

---

##### `MemorystoreCustomEndpoint`<sup>Optional</sup> <a name="MemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint"></a>

```csharp
public string MemorystoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `MigrationCenterCustomEndpoint`<sup>Optional</sup> <a name="MigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint"></a>

```csharp
public string MigrationCenterCustomEndpoint { get; }
```

- *Type:* string

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint"></a>

```csharp
public string MlEngineCustomEndpoint { get; }
```

- *Type:* string

---

##### `ModelArmorCustomEndpoint`<sup>Optional</sup> <a name="ModelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpoint"></a>

```csharp
public string ModelArmorCustomEndpoint { get; }
```

- *Type:* string

---

##### `ModelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="ModelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpoint"></a>

```csharp
public string ModelArmorGlobalCustomEndpoint { get; }
```

- *Type:* string

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint"></a>

```csharp
public string MonitoringCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetappCustomEndpoint`<sup>Optional</sup> <a name="NetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.netappCustomEndpoint"></a>

```csharp
public string NetappCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint"></a>

```csharp
public string NetworkConnectivityCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint"></a>

```csharp
public string NetworkManagementCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint"></a>

```csharp
public string NetworkSecurityCustomEndpoint { get; }
```

- *Type:* string

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint"></a>

```csharp
public string NetworkServicesCustomEndpoint { get; }
```

- *Type:* string

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint"></a>

```csharp
public string NotebooksCustomEndpoint { get; }
```

- *Type:* string

---

##### `OracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint"></a>

```csharp
public string OracleDatabaseCustomEndpoint { get; }
```

- *Type:* string

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint"></a>

```csharp
public string OrgPolicyCustomEndpoint { get; }
```

- *Type:* string

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint"></a>

```csharp
public string OsConfigCustomEndpoint { get; }
```

- *Type:* string

---

##### `OsConfigV2CustomEndpoint`<sup>Optional</sup> <a name="OsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint"></a>

```csharp
public string OsConfigV2CustomEndpoint { get; }
```

- *Type:* string

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint"></a>

```csharp
public string OsLoginCustomEndpoint { get; }
```

- *Type:* string

---

##### `ParallelstoreCustomEndpoint`<sup>Optional</sup> <a name="ParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint"></a>

```csharp
public string ParallelstoreCustomEndpoint { get; }
```

- *Type:* string

---

##### `ParameterManagerCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint"></a>

```csharp
public string ParameterManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ParameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint"></a>

```csharp
public string ParameterManagerRegionalCustomEndpoint { get; }
```

- *Type:* string

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint"></a>

```csharp
public string PrivatecaCustomEndpoint { get; }
```

- *Type:* string

---

##### `PrivilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```csharp
public string PrivilegedAccessManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.provider.GoogleProvider.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PublicCaCustomEndpoint`<sup>Optional</sup> <a name="PublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint"></a>

```csharp
public string PublicCaCustomEndpoint { get; }
```

- *Type:* string

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint"></a>

```csharp
public string PubsubCustomEndpoint { get; }
```

- *Type:* string

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint"></a>

```csharp
public string PubsubLiteCustomEndpoint { get; }
```

- *Type:* string

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```csharp
public string RecaptchaEnterpriseCustomEndpoint { get; }
```

- *Type:* string

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.redisCustomEndpoint"></a>

```csharp
public string RedisCustomEndpoint { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.provider.GoogleProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google.provider.GoogleProvider.property.requestReason"></a>

```csharp
public string RequestReason { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google.provider.GoogleProvider.property.requestTimeout"></a>

```csharp
public string RequestTimeout { get; }
```

- *Type:* string

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint"></a>

```csharp
public string ResourceManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint"></a>

```csharp
public string ResourceManagerV3CustomEndpoint { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.provider.GoogleProvider.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint"></a>

```csharp
public string SecretManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint"></a>

```csharp
public string SecretManagerRegionalCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint"></a>

```csharp
public string SecureSourceManagerCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint"></a>

```csharp
public string SecurityCenterCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint"></a>

```csharp
public string SecurityCenterManagementCustomEndpoint { get; }
```

- *Type:* string

---

##### `SecurityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint"></a>

```csharp
public string SecurityCenterV2CustomEndpoint { get; }
```

- *Type:* string

---

##### `SecuritypostureCustomEndpoint`<sup>Optional</sup> <a name="SecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint"></a>

```csharp
public string SecuritypostureCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint"></a>

```csharp
public string ServiceManagementCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint"></a>

```csharp
public string ServiceNetworkingCustomEndpoint { get; }
```

- *Type:* string

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint"></a>

```csharp
public string ServiceUsageCustomEndpoint { get; }
```

- *Type:* string

---

##### `SiteVerificationCustomEndpoint`<sup>Optional</sup> <a name="SiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint"></a>

```csharp
public string SiteVerificationCustomEndpoint { get; }
```

- *Type:* string

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint"></a>

```csharp
public string SourceRepoCustomEndpoint { get; }
```

- *Type:* string

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint"></a>

```csharp
public string SpannerCustomEndpoint { get; }
```

- *Type:* string

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint"></a>

```csharp
public string SqlCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="StorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint"></a>

```csharp
public string StorageBatchOperationsCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageControlCustomEndpoint`<sup>Optional</sup> <a name="StorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint"></a>

```csharp
public string StorageControlCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint"></a>

```csharp
public string StorageCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageInsightsCustomEndpoint`<sup>Optional</sup> <a name="StorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint"></a>

```csharp
public string StorageInsightsCustomEndpoint { get; }
```

- *Type:* string

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint"></a>

```csharp
public string StorageTransferCustomEndpoint { get; }
```

- *Type:* string

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint"></a>

```csharp
public string TagsCustomEndpoint { get; }
```

- *Type:* string

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint"></a>

```csharp
public string TagsLocationCustomEndpoint { get; }
```

- *Type:* string

---

##### `TerraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```csharp
public string TerraformAttributionLabelAdditionStrategy { get; }
```

- *Type:* string

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint"></a>

```csharp
public string TpuCustomEndpoint { get; }
```

- *Type:* string

---

##### `TranscoderCustomEndpoint`<sup>Optional</sup> <a name="TranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint"></a>

```csharp
public string TranscoderCustomEndpoint { get; }
```

- *Type:* string

---

##### `UniverseDomain`<sup>Optional</sup> <a name="UniverseDomain" id="@cdktf/provider-google.provider.GoogleProvider.property.universeDomain"></a>

```csharp
public string UniverseDomain { get; }
```

- *Type:* string

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride"></a>

```csharp
public object UserProjectOverride { get; }
```

- *Type:* object

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint"></a>

```csharp
public string VertexAiCustomEndpoint { get; }
```

- *Type:* string

---

##### `VmwareengineCustomEndpoint`<sup>Optional</sup> <a name="VmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint"></a>

```csharp
public string VmwareengineCustomEndpoint { get; }
```

- *Type:* string

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint"></a>

```csharp
public string VpcAccessCustomEndpoint { get; }
```

- *Type:* string

---

##### `WorkbenchCustomEndpoint`<sup>Optional</sup> <a name="WorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint"></a>

```csharp
public string WorkbenchCustomEndpoint { get; }
```

- *Type:* string

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint"></a>

```csharp
public string WorkflowsCustomEndpoint { get; }
```

- *Type:* string

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.provider.GoogleProvider.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.provider.GoogleProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProviderBatching <a name="GoogleProviderBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderBatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GoogleProviderBatching {
    object EnableBatching = null,
    string SendAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching">EnableBatching</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#enable_batching GoogleProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter">SendAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#send_after GoogleProvider#send_after}. |

---

##### `EnableBatching`<sup>Optional</sup> <a name="EnableBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching"></a>

```csharp
public object EnableBatching { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#enable_batching GoogleProvider#enable_batching}.

---

##### `SendAfter`<sup>Optional</sup> <a name="SendAfter" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter"></a>

```csharp
public string SendAfter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#send_after GoogleProvider#send_after}.

---

### GoogleProviderConfig <a name="GoogleProviderConfig" id="@cdktf/provider-google.provider.GoogleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GoogleProviderConfig {
    string AccessApprovalCustomEndpoint = null,
    string AccessContextManagerCustomEndpoint = null,
    string AccessToken = null,
    string ActiveDirectoryCustomEndpoint = null,
    object AddTerraformAttributionLabel = null,
    string Alias = null,
    string AlloydbCustomEndpoint = null,
    string ApigeeCustomEndpoint = null,
    string ApihubCustomEndpoint = null,
    string ApikeysCustomEndpoint = null,
    string AppEngineCustomEndpoint = null,
    string ApphubCustomEndpoint = null,
    string ArtifactRegistryCustomEndpoint = null,
    string AssuredWorkloadsCustomEndpoint = null,
    string BackupDrCustomEndpoint = null,
    object Batching = null,
    string BeyondcorpCustomEndpoint = null,
    string BiglakeCustomEndpoint = null,
    string BigqueryAnalyticsHubCustomEndpoint = null,
    string BigqueryConnectionCustomEndpoint = null,
    string BigQueryCustomEndpoint = null,
    string BigqueryDatapolicyCustomEndpoint = null,
    string BigqueryDataTransferCustomEndpoint = null,
    string BigqueryReservationCustomEndpoint = null,
    string BigtableCustomEndpoint = null,
    string BillingCustomEndpoint = null,
    string BillingProject = null,
    string BinaryAuthorizationCustomEndpoint = null,
    string BlockchainNodeEngineCustomEndpoint = null,
    string CertificateManagerCustomEndpoint = null,
    string ChronicleCustomEndpoint = null,
    string CloudAssetCustomEndpoint = null,
    string CloudBillingCustomEndpoint = null,
    string CloudBuildCustomEndpoint = null,
    string Cloudbuildv2CustomEndpoint = null,
    string ClouddeployCustomEndpoint = null,
    string ClouddomainsCustomEndpoint = null,
    string Cloudfunctions2CustomEndpoint = null,
    string CloudFunctionsCustomEndpoint = null,
    string CloudIdentityCustomEndpoint = null,
    string CloudIdsCustomEndpoint = null,
    string CloudQuotasCustomEndpoint = null,
    string CloudResourceManagerCustomEndpoint = null,
    string CloudRunCustomEndpoint = null,
    string CloudRunV2CustomEndpoint = null,
    string CloudSchedulerCustomEndpoint = null,
    string CloudTasksCustomEndpoint = null,
    string ColabCustomEndpoint = null,
    string ComposerCustomEndpoint = null,
    string ComputeCustomEndpoint = null,
    string ContactCenterInsightsCustomEndpoint = null,
    string ContainerAnalysisCustomEndpoint = null,
    string ContainerAttachedCustomEndpoint = null,
    string ContainerAwsCustomEndpoint = null,
    string ContainerAzureCustomEndpoint = null,
    string ContainerCustomEndpoint = null,
    string CoreBillingCustomEndpoint = null,
    string Credentials = null,
    string DatabaseMigrationServiceCustomEndpoint = null,
    string DataCatalogCustomEndpoint = null,
    string DataflowCustomEndpoint = null,
    string DataFusionCustomEndpoint = null,
    string DataLossPreventionCustomEndpoint = null,
    string DataPipelineCustomEndpoint = null,
    string DataplexCustomEndpoint = null,
    string DataprocCustomEndpoint = null,
    string DataprocGdcCustomEndpoint = null,
    string DataprocMetastoreCustomEndpoint = null,
    string DatastreamCustomEndpoint = null,
    System.Collections.Generic.IDictionary<string, string> DefaultLabels = null,
    string DeploymentManagerCustomEndpoint = null,
    string DeveloperConnectCustomEndpoint = null,
    string DialogflowCustomEndpoint = null,
    string DialogflowCxCustomEndpoint = null,
    string DiscoveryEngineCustomEndpoint = null,
    string DnsCustomEndpoint = null,
    string DocumentAiCustomEndpoint = null,
    string DocumentAiWarehouseCustomEndpoint = null,
    string EdgecontainerCustomEndpoint = null,
    string EdgenetworkCustomEndpoint = null,
    string EssentialContactsCustomEndpoint = null,
    string EventarcCustomEndpoint = null,
    object ExternalCredentials = null,
    string FilestoreCustomEndpoint = null,
    string FirebaseAppCheckCustomEndpoint = null,
    string FirebaseAppHostingCustomEndpoint = null,
    string FirebaseDataConnectCustomEndpoint = null,
    string FirebaserulesCustomEndpoint = null,
    string FirestoreCustomEndpoint = null,
    string GeminiCustomEndpoint = null,
    string GkeBackupCustomEndpoint = null,
    string GkeHub2CustomEndpoint = null,
    string GkeHubCustomEndpoint = null,
    string GkeonpremCustomEndpoint = null,
    string HealthcareCustomEndpoint = null,
    string Iam2CustomEndpoint = null,
    string Iam3CustomEndpoint = null,
    string IamBetaCustomEndpoint = null,
    string IamCredentialsCustomEndpoint = null,
    string IamCustomEndpoint = null,
    string IamWorkforcePoolCustomEndpoint = null,
    string IapCustomEndpoint = null,
    string IdentityPlatformCustomEndpoint = null,
    string ImpersonateServiceAccount = null,
    string[] ImpersonateServiceAccountDelegates = null,
    string IntegrationConnectorsCustomEndpoint = null,
    string IntegrationsCustomEndpoint = null,
    string KmsCustomEndpoint = null,
    string LoggingCustomEndpoint = null,
    string LookerCustomEndpoint = null,
    string LustreCustomEndpoint = null,
    string ManagedKafkaCustomEndpoint = null,
    string MemcacheCustomEndpoint = null,
    string MemorystoreCustomEndpoint = null,
    string MigrationCenterCustomEndpoint = null,
    string MlEngineCustomEndpoint = null,
    string ModelArmorCustomEndpoint = null,
    string ModelArmorGlobalCustomEndpoint = null,
    string MonitoringCustomEndpoint = null,
    string NetappCustomEndpoint = null,
    string NetworkConnectivityCustomEndpoint = null,
    string NetworkManagementCustomEndpoint = null,
    string NetworkSecurityCustomEndpoint = null,
    string NetworkServicesCustomEndpoint = null,
    string NotebooksCustomEndpoint = null,
    string OracleDatabaseCustomEndpoint = null,
    string OrgPolicyCustomEndpoint = null,
    string OsConfigCustomEndpoint = null,
    string OsConfigV2CustomEndpoint = null,
    string OsLoginCustomEndpoint = null,
    string ParallelstoreCustomEndpoint = null,
    string ParameterManagerCustomEndpoint = null,
    string ParameterManagerRegionalCustomEndpoint = null,
    string PrivatecaCustomEndpoint = null,
    string PrivilegedAccessManagerCustomEndpoint = null,
    string Project = null,
    string PublicCaCustomEndpoint = null,
    string PubsubCustomEndpoint = null,
    string PubsubLiteCustomEndpoint = null,
    string RecaptchaEnterpriseCustomEndpoint = null,
    string RedisCustomEndpoint = null,
    string Region = null,
    string RequestReason = null,
    string RequestTimeout = null,
    string ResourceManagerCustomEndpoint = null,
    string ResourceManagerV3CustomEndpoint = null,
    string[] Scopes = null,
    string SecretManagerCustomEndpoint = null,
    string SecretManagerRegionalCustomEndpoint = null,
    string SecureSourceManagerCustomEndpoint = null,
    string SecurityCenterCustomEndpoint = null,
    string SecurityCenterManagementCustomEndpoint = null,
    string SecurityCenterV2CustomEndpoint = null,
    string SecuritypostureCustomEndpoint = null,
    string ServiceManagementCustomEndpoint = null,
    string ServiceNetworkingCustomEndpoint = null,
    string ServiceUsageCustomEndpoint = null,
    string SiteVerificationCustomEndpoint = null,
    string SourceRepoCustomEndpoint = null,
    string SpannerCustomEndpoint = null,
    string SqlCustomEndpoint = null,
    string StorageBatchOperationsCustomEndpoint = null,
    string StorageControlCustomEndpoint = null,
    string StorageCustomEndpoint = null,
    string StorageInsightsCustomEndpoint = null,
    string StorageTransferCustomEndpoint = null,
    string TagsCustomEndpoint = null,
    string TagsLocationCustomEndpoint = null,
    string TerraformAttributionLabelAdditionStrategy = null,
    string TpuCustomEndpoint = null,
    string TranscoderCustomEndpoint = null,
    string UniverseDomain = null,
    object UserProjectOverride = null,
    string VertexAiCustomEndpoint = null,
    string VmwareengineCustomEndpoint = null,
    string VpcAccessCustomEndpoint = null,
    string WorkbenchCustomEndpoint = null,
    string WorkflowsCustomEndpoint = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel">AddTerraformAttributionLabel</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint">ApihubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint">ApphubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint">BackupDrCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.batching">Batching</a></code> | <code>object</code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint">BiglakeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject">BillingProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint">BlockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint">ChronicleCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint">Cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint">ClouddomainsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint">CloudQuotasCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint">ColabCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.contactCenterInsightsCustomEndpoint">ContactCenterInsightsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint">CoreBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials">Credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint">DatabaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint">DataPipelineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint">DataprocGdcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels">DefaultLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint">DeveloperConnectCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint">DiscoveryEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint">DocumentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint">EdgecontainerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint">EdgenetworkCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.externalCredentials">ExternalCredentials</a></code> | <code>object</code> | external_credentials block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint">FirebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint">FirebaseAppHostingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint">FirebaseDataConnectCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint">GeminiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint">GkeHub2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint">GkeonpremCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint">Iam3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint">IntegrationConnectorsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint">IntegrationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint">LookerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint">LustreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint">ManagedKafkaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint">MemorystoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint">MigrationCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorCustomEndpoint">ModelArmorCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorGlobalCustomEndpoint">ModelArmorGlobalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint">NetappCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint">NetworkSecurityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint">OracleDatabaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint">OsConfigV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint">ParallelstoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint">ParameterManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint">ParameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint">PrivilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint">PublicCaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason">RequestReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint">SecretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint">SecureSourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint">SecurityCenterManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint">SecurityCenterV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint">SecuritypostureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint">SiteVerificationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint">StorageBatchOperationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint">StorageControlCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint">StorageInsightsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy">TerraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint">TranscoderCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain">UniverseDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride">UserProjectOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint">VmwareengineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint">WorkbenchCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#zone GoogleProvider#zone}. |

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint"></a>

```csharp
public string AccessApprovalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```csharp
public string AccessContextManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#access_token GoogleProvider#access_token}.

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```csharp
public string ActiveDirectoryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `AddTerraformAttributionLabel`<sup>Optional</sup> <a name="AddTerraformAttributionLabel" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel"></a>

```csharp
public object AddTerraformAttributionLabel { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#alias GoogleProvider#alias}

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint"></a>

```csharp
public string AlloydbCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint"></a>

```csharp
public string ApigeeCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `ApihubCustomEndpoint`<sup>Optional</sup> <a name="ApihubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint"></a>

```csharp
public string ApihubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}.

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint"></a>

```csharp
public string ApikeysCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint"></a>

```csharp
public string AppEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `ApphubCustomEndpoint`<sup>Optional</sup> <a name="ApphubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint"></a>

```csharp
public string ApphubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```csharp
public string ArtifactRegistryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```csharp
public string AssuredWorkloadsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `BackupDrCustomEndpoint`<sup>Optional</sup> <a name="BackupDrCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint"></a>

```csharp
public string BackupDrCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}.

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.batching"></a>

```csharp
public object Batching { get; set; }
```

- *Type:* object

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#batching GoogleProvider#batching}

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint"></a>

```csharp
public string BeyondcorpCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `BiglakeCustomEndpoint`<sup>Optional</sup> <a name="BiglakeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint"></a>

```csharp
public string BiglakeCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```csharp
public string BigqueryAnalyticsHubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```csharp
public string BigqueryConnectionCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint"></a>

```csharp
public string BigQueryCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```csharp
public string BigqueryDatapolicyCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```csharp
public string BigqueryDataTransferCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```csharp
public string BigqueryReservationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint"></a>

```csharp
public string BigtableCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint"></a>

```csharp
public string BillingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject"></a>

```csharp
public string BillingProject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#billing_project GoogleProvider#billing_project}.

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```csharp
public string BinaryAuthorizationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `BlockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="BlockchainNodeEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```csharp
public string BlockchainNodeEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint"></a>

```csharp
public string CertificateManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `ChronicleCustomEndpoint`<sup>Optional</sup> <a name="ChronicleCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint"></a>

```csharp
public string ChronicleCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}.

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint"></a>

```csharp
public string CloudAssetCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint"></a>

```csharp
public string CloudBillingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint"></a>

```csharp
public string CloudBuildCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `Cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="Cloudbuildv2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```csharp
public string Cloudbuildv2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint"></a>

```csharp
public string ClouddeployCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `ClouddomainsCustomEndpoint`<sup>Optional</sup> <a name="ClouddomainsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint"></a>

```csharp
public string ClouddomainsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```csharp
public string Cloudfunctions2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```csharp
public string CloudFunctionsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```csharp
public string CloudIdentityCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint"></a>

```csharp
public string CloudIdsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `CloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="CloudQuotasCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```csharp
public string CloudQuotasCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```csharp
public string CloudResourceManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint"></a>

```csharp
public string CloudRunCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```csharp
public string CloudRunV2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```csharp
public string CloudSchedulerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint"></a>

```csharp
public string CloudTasksCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `ColabCustomEndpoint`<sup>Optional</sup> <a name="ColabCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint"></a>

```csharp
public string ColabCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}.

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint"></a>

```csharp
public string ComposerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint"></a>

```csharp
public string ComputeCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `ContactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="ContactCenterInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.contactCenterInsightsCustomEndpoint"></a>

```csharp
public string ContactCenterInsightsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}.

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```csharp
public string ContainerAnalysisCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint"></a>

```csharp
public string ContainerAttachedCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint"></a>

```csharp
public string ContainerAwsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint"></a>

```csharp
public string ContainerAzureCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint"></a>

```csharp
public string ContainerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `CoreBillingCustomEndpoint`<sup>Optional</sup> <a name="CoreBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint"></a>

```csharp
public string CoreBillingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#credentials GoogleProvider#credentials}.

---

##### `DatabaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="DatabaseMigrationServiceCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```csharp
public string DatabaseMigrationServiceCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint"></a>

```csharp
public string DataCatalogCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint"></a>

```csharp
public string DataflowCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint"></a>

```csharp
public string DataFusionCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```csharp
public string DataLossPreventionCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `DataPipelineCustomEndpoint`<sup>Optional</sup> <a name="DataPipelineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint"></a>

```csharp
public string DataPipelineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint"></a>

```csharp
public string DataplexCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint"></a>

```csharp
public string DataprocCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `DataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="DataprocGdcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```csharp
public string DataprocGdcCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}.

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```csharp
public string DataprocMetastoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint"></a>

```csharp
public string DatastreamCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `DefaultLabels`<sup>Optional</sup> <a name="DefaultLabels" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.defaultLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#default_labels GoogleProvider#default_labels}.

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```csharp
public string DeploymentManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `DeveloperConnectCustomEndpoint`<sup>Optional</sup> <a name="DeveloperConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint"></a>

```csharp
public string DeveloperConnectCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}.

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint"></a>

```csharp
public string DialogflowCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```csharp
public string DialogflowCxCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `DiscoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="DiscoveryEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```csharp
public string DiscoveryEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint"></a>

```csharp
public string DnsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint"></a>

```csharp
public string DocumentAiCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `DocumentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiWarehouseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```csharp
public string DocumentAiWarehouseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `EdgecontainerCustomEndpoint`<sup>Optional</sup> <a name="EdgecontainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint"></a>

```csharp
public string EdgecontainerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `EdgenetworkCustomEndpoint`<sup>Optional</sup> <a name="EdgenetworkCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint"></a>

```csharp
public string EdgenetworkCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint"></a>

```csharp
public string EssentialContactsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint"></a>

```csharp
public string EventarcCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `ExternalCredentials`<sup>Optional</sup> <a name="ExternalCredentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.externalCredentials"></a>

```csharp
public object ExternalCredentials { get; set; }
```

- *Type:* object

external_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#external_credentials GoogleProvider#external_credentials}

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint"></a>

```csharp
public string FilestoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `FirebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppCheckCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```csharp
public string FirebaseAppCheckCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `FirebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="FirebaseAppHostingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint"></a>

```csharp
public string FirebaseAppHostingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}.

---

##### `FirebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="FirebaseDataConnectCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint"></a>

```csharp
public string FirebaseDataConnectCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}.

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint"></a>

```csharp
public string FirebaserulesCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint"></a>

```csharp
public string FirestoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `GeminiCustomEndpoint`<sup>Optional</sup> <a name="GeminiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint"></a>

```csharp
public string GeminiCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}.

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint"></a>

```csharp
public string GkeBackupCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `GkeHub2CustomEndpoint`<sup>Optional</sup> <a name="GkeHub2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint"></a>

```csharp
public string GkeHub2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint"></a>

```csharp
public string GkeHubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `GkeonpremCustomEndpoint`<sup>Optional</sup> <a name="GkeonpremCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint"></a>

```csharp
public string GkeonpremCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint"></a>

```csharp
public string HealthcareCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint"></a>

```csharp
public string Iam2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `Iam3CustomEndpoint`<sup>Optional</sup> <a name="Iam3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint"></a>

```csharp
public string Iam3CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}.

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint"></a>

```csharp
public string IamBetaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```csharp
public string IamCredentialsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint"></a>

```csharp
public string IamCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```csharp
public string IamWorkforcePoolCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint"></a>

```csharp
public string IapCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint"></a>

```csharp
public string IdentityPlatformCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount"></a>

```csharp
public string ImpersonateServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates"></a>

```csharp
public string[] ImpersonateServiceAccountDelegates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `IntegrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationConnectorsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```csharp
public string IntegrationConnectorsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `IntegrationsCustomEndpoint`<sup>Optional</sup> <a name="IntegrationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint"></a>

```csharp
public string IntegrationsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint"></a>

```csharp
public string KmsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint"></a>

```csharp
public string LoggingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `LookerCustomEndpoint`<sup>Optional</sup> <a name="LookerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint"></a>

```csharp
public string LookerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `LustreCustomEndpoint`<sup>Optional</sup> <a name="LustreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint"></a>

```csharp
public string LustreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}.

---

##### `ManagedKafkaCustomEndpoint`<sup>Optional</sup> <a name="ManagedKafkaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint"></a>

```csharp
public string ManagedKafkaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}.

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint"></a>

```csharp
public string MemcacheCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `MemorystoreCustomEndpoint`<sup>Optional</sup> <a name="MemorystoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint"></a>

```csharp
public string MemorystoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}.

---

##### `MigrationCenterCustomEndpoint`<sup>Optional</sup> <a name="MigrationCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint"></a>

```csharp
public string MigrationCenterCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint"></a>

```csharp
public string MlEngineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `ModelArmorCustomEndpoint`<sup>Optional</sup> <a name="ModelArmorCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorCustomEndpoint"></a>

```csharp
public string ModelArmorCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}.

---

##### `ModelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="ModelArmorGlobalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.modelArmorGlobalCustomEndpoint"></a>

```csharp
public string ModelArmorGlobalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}.

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint"></a>

```csharp
public string MonitoringCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `NetappCustomEndpoint`<sup>Optional</sup> <a name="NetappCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint"></a>

```csharp
public string NetappCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```csharp
public string NetworkConnectivityCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint"></a>

```csharp
public string NetworkManagementCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `NetworkSecurityCustomEndpoint`<sup>Optional</sup> <a name="NetworkSecurityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint"></a>

```csharp
public string NetworkSecurityCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint"></a>

```csharp
public string NetworkServicesCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint"></a>

```csharp
public string NotebooksCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `OracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="OracleDatabaseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```csharp
public string OracleDatabaseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}.

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint"></a>

```csharp
public string OrgPolicyCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint"></a>

```csharp
public string OsConfigCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `OsConfigV2CustomEndpoint`<sup>Optional</sup> <a name="OsConfigV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint"></a>

```csharp
public string OsConfigV2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}.

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint"></a>

```csharp
public string OsLoginCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `ParallelstoreCustomEndpoint`<sup>Optional</sup> <a name="ParallelstoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint"></a>

```csharp
public string ParallelstoreCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}.

---

##### `ParameterManagerCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint"></a>

```csharp
public string ParameterManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}.

---

##### `ParameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="ParameterManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint"></a>

```csharp
public string ParameterManagerRegionalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}.

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint"></a>

```csharp
public string PrivatecaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `PrivilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="PrivilegedAccessManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```csharp
public string PrivilegedAccessManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#project GoogleProvider#project}.

---

##### `PublicCaCustomEndpoint`<sup>Optional</sup> <a name="PublicCaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint"></a>

```csharp
public string PublicCaCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint"></a>

```csharp
public string PubsubCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```csharp
public string PubsubLiteCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```csharp
public string RecaptchaEnterpriseCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint"></a>

```csharp
public string RedisCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#region GoogleProvider#region}.

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason"></a>

```csharp
public string RequestReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#request_reason GoogleProvider#request_reason}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout"></a>

```csharp
public string RequestTimeout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint"></a>

```csharp
public string ResourceManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```csharp
public string ResourceManagerV3CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#scopes GoogleProvider#scopes}.

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint"></a>

```csharp
public string SecretManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `SecretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerRegionalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```csharp
public string SecretManagerRegionalCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}.

---

##### `SecureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="SecureSourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```csharp
public string SecureSourceManagerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint"></a>

```csharp
public string SecurityCenterCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `SecurityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```csharp
public string SecurityCenterManagementCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}.

---

##### `SecurityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```csharp
public string SecurityCenterV2CustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}.

---

##### `SecuritypostureCustomEndpoint`<sup>Optional</sup> <a name="SecuritypostureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint"></a>

```csharp
public string SecuritypostureCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint"></a>

```csharp
public string ServiceManagementCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```csharp
public string ServiceNetworkingCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint"></a>

```csharp
public string ServiceUsageCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `SiteVerificationCustomEndpoint`<sup>Optional</sup> <a name="SiteVerificationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint"></a>

```csharp
public string SiteVerificationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}.

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint"></a>

```csharp
public string SourceRepoCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint"></a>

```csharp
public string SpannerCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint"></a>

```csharp
public string SqlCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `StorageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="StorageBatchOperationsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint"></a>

```csharp
public string StorageBatchOperationsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}.

---

##### `StorageControlCustomEndpoint`<sup>Optional</sup> <a name="StorageControlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint"></a>

```csharp
public string StorageControlCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}.

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint"></a>

```csharp
public string StorageCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `StorageInsightsCustomEndpoint`<sup>Optional</sup> <a name="StorageInsightsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint"></a>

```csharp
public string StorageInsightsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint"></a>

```csharp
public string StorageTransferCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint"></a>

```csharp
public string TagsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint"></a>

```csharp
public string TagsLocationCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `TerraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="TerraformAttributionLabelAdditionStrategy" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```csharp
public string TerraformAttributionLabelAdditionStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint"></a>

```csharp
public string TpuCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `TranscoderCustomEndpoint`<sup>Optional</sup> <a name="TranscoderCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint"></a>

```csharp
public string TranscoderCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}.

---

##### `UniverseDomain`<sup>Optional</sup> <a name="UniverseDomain" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.universeDomain"></a>

```csharp
public string UniverseDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride"></a>

```csharp
public object UserProjectOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint"></a>

```csharp
public string VertexAiCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `VmwareengineCustomEndpoint`<sup>Optional</sup> <a name="VmwareengineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint"></a>

```csharp
public string VmwareengineCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint"></a>

```csharp
public string VpcAccessCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `WorkbenchCustomEndpoint`<sup>Optional</sup> <a name="WorkbenchCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint"></a>

```csharp
public string WorkbenchCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint"></a>

```csharp
public string WorkflowsCustomEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#zone GoogleProvider#zone}.

---

### GoogleProviderExternalCredentials <a name="GoogleProviderExternalCredentials" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GoogleProviderExternalCredentials {
    string Audience,
    string IdentityToken,
    string ServiceAccountEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.audience">Audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#audience GoogleProvider#audience}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken">IdentityToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#identity_token GoogleProvider#identity_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_account_email GoogleProvider#service_account_email}. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#audience GoogleProvider#audience}.

---

##### `IdentityToken`<sup>Required</sup> <a name="IdentityToken" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken"></a>

```csharp
public string IdentityToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#identity_token GoogleProvider#identity_token}.

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs#service_account_email GoogleProvider#service_account_email}.

---



