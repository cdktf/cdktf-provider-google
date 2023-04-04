# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-google.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProvider <a name="GoogleProvider" id="@cdktf/provider-google.provider.GoogleProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/google google}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.provider.GoogleProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/provider"

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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint">ResetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint">ResetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint">ResetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint">ResetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint">ResetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint">ResetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint">ResetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint">ResetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint">ResetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBatching">ResetBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint">ResetBeyondcorpCustomEndpoint</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint">ResetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint">ResetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint">ResetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint">ResetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint">ResetCloudBuildWorkerPoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint">ResetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint">ResetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint">ResetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint">ResetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint">ResetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudIotCustomEndpoint">ResetCloudIotCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint">ResetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint">ResetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint">ResetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint">ResetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint">ResetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint">ResetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint">ResetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint">ResetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint">ResetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint">ResetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint">ResetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint">ResetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint">ResetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint">ResetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint">ResetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint">ResetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint">ResetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint">ResetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint">ResetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatastoreCustomEndpoint">ResetDatastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint">ResetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint">ResetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint">ResetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint">ResetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint">ResetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint">ResetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint">ResetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint">ResetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint">ResetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint">ResetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint">ResetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGameServicesCustomEndpoint">ResetGameServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint">ResetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint">ResetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint">ResetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint">ResetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint">ResetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint">ResetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamCustomEndpoint">ResetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint">ResetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIapCustomEndpoint">ResetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint">ResetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount">ResetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates">ResetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint">ResetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint">ResetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint">ResetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint">ResetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint">ResetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint">ResetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint">ResetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint">ResetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint">ResetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint">ResetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint">ResetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint">ResetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint">ResetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetProject">ResetProject</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint">ResetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint">ResetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint">ResetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint">ResetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint">ResetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint">ResetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint">ResetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint">ResetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint">ResetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint">ResetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint">ResetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint">ResetTpuCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride">ResetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint">ResetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint">ResetVpcAccessCustomEndpoint</a></code> | *No description.* |
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

##### `ResetApikeysCustomEndpoint` <a name="ResetApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint"></a>

```go
func ResetApikeysCustomEndpoint()
```

##### `ResetAppEngineCustomEndpoint` <a name="ResetAppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint"></a>

```go
func ResetAppEngineCustomEndpoint()
```

##### `ResetArtifactRegistryCustomEndpoint` <a name="ResetArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint"></a>

```go
func ResetArtifactRegistryCustomEndpoint()
```

##### `ResetAssuredWorkloadsCustomEndpoint` <a name="ResetAssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```go
func ResetAssuredWorkloadsCustomEndpoint()
```

##### `ResetBatching` <a name="ResetBatching" id="@cdktf/provider-google.provider.GoogleProvider.resetBatching"></a>

```go
func ResetBatching()
```

##### `ResetBeyondcorpCustomEndpoint` <a name="ResetBeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint"></a>

```go
func ResetBeyondcorpCustomEndpoint()
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

##### `ResetCertificateManagerCustomEndpoint` <a name="ResetCertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint"></a>

```go
func ResetCertificateManagerCustomEndpoint()
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

##### `ResetCloudBuildWorkerPoolCustomEndpoint` <a name="ResetCloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudBuildWorkerPoolCustomEndpoint"></a>

```go
func ResetCloudBuildWorkerPoolCustomEndpoint()
```

##### `ResetClouddeployCustomEndpoint` <a name="ResetClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint"></a>

```go
func ResetClouddeployCustomEndpoint()
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

##### `ResetCloudIotCustomEndpoint` <a name="ResetCloudIotCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetCloudIotCustomEndpoint"></a>

```go
func ResetCloudIotCustomEndpoint()
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

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktf/provider-google.provider.GoogleProvider.resetCredentials"></a>

```go
func ResetCredentials()
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

##### `ResetDataplexCustomEndpoint` <a name="ResetDataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint"></a>

```go
func ResetDataplexCustomEndpoint()
```

##### `ResetDataprocCustomEndpoint` <a name="ResetDataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint"></a>

```go
func ResetDataprocCustomEndpoint()
```

##### `ResetDataprocMetastoreCustomEndpoint` <a name="ResetDataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint"></a>

```go
func ResetDataprocMetastoreCustomEndpoint()
```

##### `ResetDatastoreCustomEndpoint` <a name="ResetDatastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastoreCustomEndpoint"></a>

```go
func ResetDatastoreCustomEndpoint()
```

##### `ResetDatastreamCustomEndpoint` <a name="ResetDatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint"></a>

```go
func ResetDatastreamCustomEndpoint()
```

##### `ResetDeploymentManagerCustomEndpoint` <a name="ResetDeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint"></a>

```go
func ResetDeploymentManagerCustomEndpoint()
```

##### `ResetDialogflowCustomEndpoint` <a name="ResetDialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint"></a>

```go
func ResetDialogflowCustomEndpoint()
```

##### `ResetDialogflowCxCustomEndpoint` <a name="ResetDialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint"></a>

```go
func ResetDialogflowCxCustomEndpoint()
```

##### `ResetDnsCustomEndpoint` <a name="ResetDnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint"></a>

```go
func ResetDnsCustomEndpoint()
```

##### `ResetDocumentAiCustomEndpoint` <a name="ResetDocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint"></a>

```go
func ResetDocumentAiCustomEndpoint()
```

##### `ResetEssentialContactsCustomEndpoint` <a name="ResetEssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint"></a>

```go
func ResetEssentialContactsCustomEndpoint()
```

##### `ResetEventarcCustomEndpoint` <a name="ResetEventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint"></a>

```go
func ResetEventarcCustomEndpoint()
```

##### `ResetFilestoreCustomEndpoint` <a name="ResetFilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint"></a>

```go
func ResetFilestoreCustomEndpoint()
```

##### `ResetFirebaserulesCustomEndpoint` <a name="ResetFirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint"></a>

```go
func ResetFirebaserulesCustomEndpoint()
```

##### `ResetFirestoreCustomEndpoint` <a name="ResetFirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint"></a>

```go
func ResetFirestoreCustomEndpoint()
```

##### `ResetGameServicesCustomEndpoint` <a name="ResetGameServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGameServicesCustomEndpoint"></a>

```go
func ResetGameServicesCustomEndpoint()
```

##### `ResetGkeBackupCustomEndpoint` <a name="ResetGkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint"></a>

```go
func ResetGkeBackupCustomEndpoint()
```

##### `ResetGkeHubCustomEndpoint` <a name="ResetGkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint"></a>

```go
func ResetGkeHubCustomEndpoint()
```

##### `ResetHealthcareCustomEndpoint` <a name="ResetHealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint"></a>

```go
func ResetHealthcareCustomEndpoint()
```

##### `ResetIam2CustomEndpoint` <a name="ResetIam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint"></a>

```go
func ResetIam2CustomEndpoint()
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

##### `ResetKmsCustomEndpoint` <a name="ResetKmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint"></a>

```go
func ResetKmsCustomEndpoint()
```

##### `ResetLoggingCustomEndpoint` <a name="ResetLoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint"></a>

```go
func ResetLoggingCustomEndpoint()
```

##### `ResetMemcacheCustomEndpoint` <a name="ResetMemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint"></a>

```go
func ResetMemcacheCustomEndpoint()
```

##### `ResetMlEngineCustomEndpoint` <a name="ResetMlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint"></a>

```go
func ResetMlEngineCustomEndpoint()
```

##### `ResetMonitoringCustomEndpoint` <a name="ResetMonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint"></a>

```go
func ResetMonitoringCustomEndpoint()
```

##### `ResetNetworkConnectivityCustomEndpoint` <a name="ResetNetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint"></a>

```go
func ResetNetworkConnectivityCustomEndpoint()
```

##### `ResetNetworkManagementCustomEndpoint` <a name="ResetNetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint"></a>

```go
func ResetNetworkManagementCustomEndpoint()
```

##### `ResetNetworkServicesCustomEndpoint` <a name="ResetNetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint"></a>

```go
func ResetNetworkServicesCustomEndpoint()
```

##### `ResetNotebooksCustomEndpoint` <a name="ResetNotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint"></a>

```go
func ResetNotebooksCustomEndpoint()
```

##### `ResetOrgPolicyCustomEndpoint` <a name="ResetOrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint"></a>

```go
func ResetOrgPolicyCustomEndpoint()
```

##### `ResetOsConfigCustomEndpoint` <a name="ResetOsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint"></a>

```go
func ResetOsConfigCustomEndpoint()
```

##### `ResetOsLoginCustomEndpoint` <a name="ResetOsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint"></a>

```go
func ResetOsLoginCustomEndpoint()
```

##### `ResetPrivatecaCustomEndpoint` <a name="ResetPrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint"></a>

```go
func ResetPrivatecaCustomEndpoint()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.provider.GoogleProvider.resetProject"></a>

```go
func ResetProject()
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

##### `ResetSecurityCenterCustomEndpoint` <a name="ResetSecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint"></a>

```go
func ResetSecurityCenterCustomEndpoint()
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

##### `ResetStorageCustomEndpoint` <a name="ResetStorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint"></a>

```go
func ResetStorageCustomEndpoint()
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

##### `ResetTpuCustomEndpoint` <a name="ResetTpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetTpuCustomEndpoint"></a>

```go
func ResetTpuCustomEndpoint()
```

##### `ResetUserProjectOverride` <a name="ResetUserProjectOverride" id="@cdktf/provider-google.provider.GoogleProvider.resetUserProjectOverride"></a>

```go
func ResetUserProjectOverride()
```

##### `ResetVertexAiCustomEndpoint` <a name="ResetVertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint"></a>

```go
func ResetVertexAiCustomEndpoint()
```

##### `ResetVpcAccessCustomEndpoint` <a name="ResetVpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint"></a>

```go
func ResetVpcAccessCustomEndpoint()
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

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.provider.GoogleProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/provider"

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
import "github.com/cdktf/cdktf-provider-google-go/google/provider"

provider.GoogleProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/provider"

provider.GoogleProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.provider.GoogleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput">AlloydbCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput">ApigeeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput">ApikeysCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput">AppEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput">ArtifactRegistryCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput">AssuredWorkloadsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batchingInput">BatchingInput</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput">BeyondcorpCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput">CertificateManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput">CloudAssetCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput">CloudBillingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput">CloudBuildCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpointInput">CloudBuildWorkerPoolCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput">ClouddeployCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput">Cloudfunctions2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput">CloudFunctionsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput">CloudIdentityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput">CloudIdsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIotCustomEndpointInput">CloudIotCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput">CloudResourceManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput">CloudRunCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput">CloudRunV2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput">CloudSchedulerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput">CloudTasksCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput">ComposerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput">ComputeCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput">ContainerAnalysisCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput">ContainerAttachedCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput">ContainerAwsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput">ContainerAzureCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput">ContainerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput">CredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput">DataCatalogCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput">DataflowCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput">DataFusionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput">DataLossPreventionCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput">DataplexCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput">DataprocCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput">DataprocMetastoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpointInput">DatastoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput">DatastreamCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput">DeploymentManagerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput">DialogflowCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput">DialogflowCxCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput">DnsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput">DocumentAiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput">EssentialContactsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput">EventarcCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput">FilestoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput">FirebaserulesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput">FirestoreCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gameServicesCustomEndpointInput">GameServicesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput">GkeBackupCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput">GkeHubCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput">HealthcareCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput">Iam2CustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput">IamBetaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput">IamCredentialsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput">IamCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput">IamWorkforcePoolCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput">IapCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput">IdentityPlatformCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput">ImpersonateServiceAccountDelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput">KmsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput">LoggingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput">MemcacheCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput">MlEngineCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput">MonitoringCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput">NetworkConnectivityCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput">NetworkManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput">NetworkServicesCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput">NotebooksCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput">OrgPolicyCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput">OsConfigCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput">OsLoginCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput">PrivatecaCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput">SecurityCenterCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput">ServiceManagementCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput">ServiceNetworkingCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput">ServiceUsageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput">SourceRepoCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput">SpannerCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput">SqlCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput">StorageCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput">StorageTransferCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput">TagsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput">TagsLocationCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput">TpuCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverrideInput">UserProjectOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput">VertexAiCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput">VpcAccessCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput">WorkflowsCustomEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.batching">Batching</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudIotCustomEndpoint">CloudIotCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.credentials">Credentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpoint">DatastoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gameServicesCustomEndpoint">GameServicesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.project">Project</a></code> | <code>*string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.userProjectOverride">UserProjectOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>*string</code> | *No description.* |
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

##### `BatchingInput`<sup>Optional</sup> <a name="BatchingInput" id="@cdktf/provider-google.provider.GoogleProvider.property.batchingInput"></a>

```go
func BatchingInput() GoogleProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

---

##### `BeyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="BeyondcorpCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput"></a>

```go
func BeyondcorpCustomEndpointInput() *string
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

##### `CertificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="CertificateManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput"></a>

```go
func CertificateManagerCustomEndpointInput() *string
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

##### `CloudIotCustomEndpointInput`<sup>Optional</sup> <a name="CloudIotCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIotCustomEndpointInput"></a>

```go
func CloudIotCustomEndpointInput() *string
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

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-google.provider.GoogleProvider.property.credentialsInput"></a>

```go
func CredentialsInput() *string
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

##### `DataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```go
func DataprocMetastoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DatastoreCustomEndpointInput`<sup>Optional</sup> <a name="DatastoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpointInput"></a>

```go
func DatastoreCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DatastreamCustomEndpointInput`<sup>Optional</sup> <a name="DatastreamCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput"></a>

```go
func DatastreamCustomEndpointInput() *string
```

- *Type:* *string

---

##### `DeploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput"></a>

```go
func DeploymentManagerCustomEndpointInput() *string
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

##### `FilestoreCustomEndpointInput`<sup>Optional</sup> <a name="FilestoreCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput"></a>

```go
func FilestoreCustomEndpointInput() *string
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

##### `GameServicesCustomEndpointInput`<sup>Optional</sup> <a name="GameServicesCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gameServicesCustomEndpointInput"></a>

```go
func GameServicesCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="GkeBackupCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput"></a>

```go
func GkeBackupCustomEndpointInput() *string
```

- *Type:* *string

---

##### `GkeHubCustomEndpointInput`<sup>Optional</sup> <a name="GkeHubCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput"></a>

```go
func GkeHubCustomEndpointInput() *string
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

##### `MemcacheCustomEndpointInput`<sup>Optional</sup> <a name="MemcacheCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput"></a>

```go
func MemcacheCustomEndpointInput() *string
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

##### `OsLoginCustomEndpointInput`<sup>Optional</sup> <a name="OsLoginCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput"></a>

```go
func OsLoginCustomEndpointInput() *string
```

- *Type:* *string

---

##### `PrivatecaCustomEndpointInput`<sup>Optional</sup> <a name="PrivatecaCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput"></a>

```go
func PrivatecaCustomEndpointInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.provider.GoogleProvider.property.projectInput"></a>

```go
func ProjectInput() *string
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

##### `SecurityCenterCustomEndpointInput`<sup>Optional</sup> <a name="SecurityCenterCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput"></a>

```go
func SecurityCenterCustomEndpointInput() *string
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

##### `StorageCustomEndpointInput`<sup>Optional</sup> <a name="StorageCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput"></a>

```go
func StorageCustomEndpointInput() *string
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

##### `TpuCustomEndpointInput`<sup>Optional</sup> <a name="TpuCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpointInput"></a>

```go
func TpuCustomEndpointInput() *string
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

##### `VpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="VpcAccessCustomEndpointInput" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput"></a>

```go
func VpcAccessCustomEndpointInput() *string
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

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google.provider.GoogleProvider.property.batching"></a>

```go
func Batching() GoogleProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint"></a>

```go
func BeyondcorpCustomEndpoint() *string
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

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint"></a>

```go
func CertificateManagerCustomEndpoint() *string
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

##### `CloudIotCustomEndpoint`<sup>Optional</sup> <a name="CloudIotCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.cloudIotCustomEndpoint"></a>

```go
func CloudIotCustomEndpoint() *string
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

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.provider.GoogleProvider.property.credentials"></a>

```go
func Credentials() *string
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

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint"></a>

```go
func DataprocMetastoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `DatastoreCustomEndpoint`<sup>Optional</sup> <a name="DatastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastoreCustomEndpoint"></a>

```go
func DatastoreCustomEndpoint() *string
```

- *Type:* *string

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint"></a>

```go
func DatastreamCustomEndpoint() *string
```

- *Type:* *string

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint"></a>

```go
func DeploymentManagerCustomEndpoint() *string
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

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint"></a>

```go
func FilestoreCustomEndpoint() *string
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

##### `GameServicesCustomEndpoint`<sup>Optional</sup> <a name="GameServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gameServicesCustomEndpoint"></a>

```go
func GameServicesCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint"></a>

```go
func GkeBackupCustomEndpoint() *string
```

- *Type:* *string

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint"></a>

```go
func GkeHubCustomEndpoint() *string
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

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint"></a>

```go
func MemcacheCustomEndpoint() *string
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

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint"></a>

```go
func OsLoginCustomEndpoint() *string
```

- *Type:* *string

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint"></a>

```go
func PrivatecaCustomEndpoint() *string
```

- *Type:* *string

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.provider.GoogleProvider.property.project"></a>

```go
func Project() *string
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

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint"></a>

```go
func SecurityCenterCustomEndpoint() *string
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

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.storageCustomEndpoint"></a>

```go
func StorageCustomEndpoint() *string
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

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.tpuCustomEndpoint"></a>

```go
func TpuCustomEndpoint() *string
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

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint"></a>

```go
func VpcAccessCustomEndpoint() *string
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
import "github.com/cdktf/cdktf-provider-google-go/google/provider"

&provider.GoogleProviderBatching {
	EnableBatching: interface{},
	SendAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching">EnableBatching</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#enable_batching GoogleProvider#enable_batching}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter">SendAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#send_after GoogleProvider#send_after}. |

---

##### `EnableBatching`<sup>Optional</sup> <a name="EnableBatching" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.enableBatching"></a>

```go
EnableBatching interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#enable_batching GoogleProvider#enable_batching}.

---

##### `SendAfter`<sup>Optional</sup> <a name="SendAfter" id="@cdktf/provider-google.provider.GoogleProviderBatching.property.sendAfter"></a>

```go
SendAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#send_after GoogleProvider#send_after}.

---

### GoogleProviderConfig <a name="GoogleProviderConfig" id="@cdktf/provider-google.provider.GoogleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.provider.GoogleProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/provider"

&provider.GoogleProviderConfig {
	AccessApprovalCustomEndpoint: *string,
	AccessContextManagerCustomEndpoint: *string,
	AccessToken: *string,
	ActiveDirectoryCustomEndpoint: *string,
	Alias: *string,
	AlloydbCustomEndpoint: *string,
	ApigeeCustomEndpoint: *string,
	ApikeysCustomEndpoint: *string,
	AppEngineCustomEndpoint: *string,
	ArtifactRegistryCustomEndpoint: *string,
	AssuredWorkloadsCustomEndpoint: *string,
	Batching: github.com/cdktf/cdktf-provider-google-go/google.provider.GoogleProviderBatching,
	BeyondcorpCustomEndpoint: *string,
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
	CertificateManagerCustomEndpoint: *string,
	CloudAssetCustomEndpoint: *string,
	CloudBillingCustomEndpoint: *string,
	CloudBuildCustomEndpoint: *string,
	CloudBuildWorkerPoolCustomEndpoint: *string,
	ClouddeployCustomEndpoint: *string,
	Cloudfunctions2CustomEndpoint: *string,
	CloudFunctionsCustomEndpoint: *string,
	CloudIdentityCustomEndpoint: *string,
	CloudIdsCustomEndpoint: *string,
	CloudIotCustomEndpoint: *string,
	CloudResourceManagerCustomEndpoint: *string,
	CloudRunCustomEndpoint: *string,
	CloudRunV2CustomEndpoint: *string,
	CloudSchedulerCustomEndpoint: *string,
	CloudTasksCustomEndpoint: *string,
	ComposerCustomEndpoint: *string,
	ComputeCustomEndpoint: *string,
	ContainerAnalysisCustomEndpoint: *string,
	ContainerAttachedCustomEndpoint: *string,
	ContainerAwsCustomEndpoint: *string,
	ContainerAzureCustomEndpoint: *string,
	ContainerCustomEndpoint: *string,
	Credentials: *string,
	DataCatalogCustomEndpoint: *string,
	DataflowCustomEndpoint: *string,
	DataFusionCustomEndpoint: *string,
	DataLossPreventionCustomEndpoint: *string,
	DataplexCustomEndpoint: *string,
	DataprocCustomEndpoint: *string,
	DataprocMetastoreCustomEndpoint: *string,
	DatastoreCustomEndpoint: *string,
	DatastreamCustomEndpoint: *string,
	DeploymentManagerCustomEndpoint: *string,
	DialogflowCustomEndpoint: *string,
	DialogflowCxCustomEndpoint: *string,
	DnsCustomEndpoint: *string,
	DocumentAiCustomEndpoint: *string,
	EssentialContactsCustomEndpoint: *string,
	EventarcCustomEndpoint: *string,
	FilestoreCustomEndpoint: *string,
	FirebaserulesCustomEndpoint: *string,
	FirestoreCustomEndpoint: *string,
	GameServicesCustomEndpoint: *string,
	GkeBackupCustomEndpoint: *string,
	GkeHubCustomEndpoint: *string,
	HealthcareCustomEndpoint: *string,
	Iam2CustomEndpoint: *string,
	IamBetaCustomEndpoint: *string,
	IamCredentialsCustomEndpoint: *string,
	IamCustomEndpoint: *string,
	IamWorkforcePoolCustomEndpoint: *string,
	IapCustomEndpoint: *string,
	IdentityPlatformCustomEndpoint: *string,
	ImpersonateServiceAccount: *string,
	ImpersonateServiceAccountDelegates: *[]*string,
	KmsCustomEndpoint: *string,
	LoggingCustomEndpoint: *string,
	MemcacheCustomEndpoint: *string,
	MlEngineCustomEndpoint: *string,
	MonitoringCustomEndpoint: *string,
	NetworkConnectivityCustomEndpoint: *string,
	NetworkManagementCustomEndpoint: *string,
	NetworkServicesCustomEndpoint: *string,
	NotebooksCustomEndpoint: *string,
	OrgPolicyCustomEndpoint: *string,
	OsConfigCustomEndpoint: *string,
	OsLoginCustomEndpoint: *string,
	PrivatecaCustomEndpoint: *string,
	Project: *string,
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
	SecurityCenterCustomEndpoint: *string,
	ServiceManagementCustomEndpoint: *string,
	ServiceNetworkingCustomEndpoint: *string,
	ServiceUsageCustomEndpoint: *string,
	SourceRepoCustomEndpoint: *string,
	SpannerCustomEndpoint: *string,
	SqlCustomEndpoint: *string,
	StorageCustomEndpoint: *string,
	StorageTransferCustomEndpoint: *string,
	TagsCustomEndpoint: *string,
	TagsLocationCustomEndpoint: *string,
	TpuCustomEndpoint: *string,
	UserProjectOverride: interface{},
	VertexAiCustomEndpoint: *string,
	VpcAccessCustomEndpoint: *string,
	WorkflowsCustomEndpoint: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint">AccessApprovalCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint">AccessContextManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint">ActiveDirectoryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint">AlloydbCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint">ApigeeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint">ApikeysCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint">AppEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint">ArtifactRegistryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint">AssuredWorkloadsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.batching">Batching</a></code> | <code><a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a></code> | batching block. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint">BeyondcorpCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">BigqueryAnalyticsHubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint">BigqueryConnectionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint">BigQueryCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint">BigqueryDatapolicyCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint">BigqueryDataTransferCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint">BigqueryReservationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint">BigtableCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint">BillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject">BillingProject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint">BinaryAuthorizationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint">CertificateManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint">CloudAssetCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint">CloudBillingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint">CloudBuildCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint">CloudBuildWorkerPoolCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint">ClouddeployCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint">Cloudfunctions2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint">CloudFunctionsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint">CloudIdentityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint">CloudIdsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIotCustomEndpoint">CloudIotCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_iot_custom_endpoint GoogleProvider#cloud_iot_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint">CloudResourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint">CloudRunCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint">CloudRunV2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint">CloudSchedulerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint">CloudTasksCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint">ComposerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint">ComputeCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint">ContainerAnalysisCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint">ContainerAttachedCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint">ContainerAwsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint">ContainerAzureCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint">ContainerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials">Credentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint">DataCatalogCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint">DataflowCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint">DataFusionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint">DataLossPreventionCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint">DataplexCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint">DataprocCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint">DataprocMetastoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastoreCustomEndpoint">DatastoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint">DatastreamCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint">DeploymentManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint">DialogflowCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint">DialogflowCxCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint">DnsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint">DocumentAiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint">EssentialContactsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint">EventarcCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint">FilestoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint">FirebaserulesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint">FirestoreCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gameServicesCustomEndpoint">GameServicesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#game_services_custom_endpoint GoogleProvider#game_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint">GkeBackupCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint">GkeHubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint">HealthcareCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint">Iam2CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint">IamBetaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint">IamCredentialsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint">IamCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint">IamWorkforcePoolCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint">IapCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint">IdentityPlatformCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates">ImpersonateServiceAccountDelegates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint">KmsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint">LoggingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint">MemcacheCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint">MlEngineCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint">MonitoringCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint">NetworkConnectivityCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint">NetworkManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint">NetworkServicesCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint">NotebooksCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint">OrgPolicyCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint">OsConfigCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint">OsLoginCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint">PrivatecaCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#project GoogleProvider#project}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint">PubsubCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint">PubsubLiteCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint">RecaptchaEnterpriseCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint">RedisCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#region GoogleProvider#region}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason">RequestReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint">ResourceManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint">ResourceManagerV3CustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint">SecretManagerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint">SecurityCenterCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint">ServiceManagementCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint">ServiceNetworkingCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint">ServiceUsageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint">SourceRepoCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint">SpannerCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint">SqlCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint">StorageCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint">StorageTransferCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint">TagsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint">TagsLocationCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint">TpuCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride">UserProjectOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint">VertexAiCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint">VpcAccessCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint">WorkflowsCustomEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktf/provider-google.provider.GoogleProviderConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#zone GoogleProvider#zone}. |

---

##### `AccessApprovalCustomEndpoint`<sup>Optional</sup> <a name="AccessApprovalCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint"></a>

```go
AccessApprovalCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `AccessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="AccessContextManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```go
AccessContextManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#access_token GoogleProvider#access_token}.

---

##### `ActiveDirectoryCustomEndpoint`<sup>Optional</sup> <a name="ActiveDirectoryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```go
ActiveDirectoryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#alias GoogleProvider#alias}

---

##### `AlloydbCustomEndpoint`<sup>Optional</sup> <a name="AlloydbCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint"></a>

```go
AlloydbCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `ApigeeCustomEndpoint`<sup>Optional</sup> <a name="ApigeeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint"></a>

```go
ApigeeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `ApikeysCustomEndpoint`<sup>Optional</sup> <a name="ApikeysCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint"></a>

```go
ApikeysCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `AppEngineCustomEndpoint`<sup>Optional</sup> <a name="AppEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint"></a>

```go
AppEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `ArtifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="ArtifactRegistryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```go
ArtifactRegistryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `AssuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="AssuredWorkloadsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```go
AssuredWorkloadsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `Batching`<sup>Optional</sup> <a name="Batching" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.batching"></a>

```go
Batching GoogleProviderBatching
```

- *Type:* <a href="#@cdktf/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>

batching block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#batching GoogleProvider#batching}

---

##### `BeyondcorpCustomEndpoint`<sup>Optional</sup> <a name="BeyondcorpCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint"></a>

```go
BeyondcorpCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `BigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="BigqueryAnalyticsHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```go
BigqueryAnalyticsHubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `BigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="BigqueryConnectionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```go
BigqueryConnectionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `BigQueryCustomEndpoint`<sup>Optional</sup> <a name="BigQueryCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint"></a>

```go
BigQueryCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `BigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDatapolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```go
BigqueryDatapolicyCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `BigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="BigqueryDataTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```go
BigqueryDataTransferCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `BigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="BigqueryReservationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```go
BigqueryReservationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `BigtableCustomEndpoint`<sup>Optional</sup> <a name="BigtableCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint"></a>

```go
BigtableCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `BillingCustomEndpoint`<sup>Optional</sup> <a name="BillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint"></a>

```go
BillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.billingProject"></a>

```go
BillingProject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#billing_project GoogleProvider#billing_project}.

---

##### `BinaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="BinaryAuthorizationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```go
BinaryAuthorizationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `CertificateManagerCustomEndpoint`<sup>Optional</sup> <a name="CertificateManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint"></a>

```go
CertificateManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `CloudAssetCustomEndpoint`<sup>Optional</sup> <a name="CloudAssetCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint"></a>

```go
CloudAssetCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `CloudBillingCustomEndpoint`<sup>Optional</sup> <a name="CloudBillingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint"></a>

```go
CloudBillingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `CloudBuildCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint"></a>

```go
CloudBuildCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `CloudBuildWorkerPoolCustomEndpoint`<sup>Optional</sup> <a name="CloudBuildWorkerPoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudBuildWorkerPoolCustomEndpoint"></a>

```go
CloudBuildWorkerPoolCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}.

---

##### `ClouddeployCustomEndpoint`<sup>Optional</sup> <a name="ClouddeployCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint"></a>

```go
ClouddeployCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `Cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="Cloudfunctions2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```go
Cloudfunctions2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `CloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="CloudFunctionsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```go
CloudFunctionsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `CloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="CloudIdentityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```go
CloudIdentityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `CloudIdsCustomEndpoint`<sup>Optional</sup> <a name="CloudIdsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint"></a>

```go
CloudIdsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `CloudIotCustomEndpoint`<sup>Optional</sup> <a name="CloudIotCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudIotCustomEndpoint"></a>

```go
CloudIotCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_iot_custom_endpoint GoogleProvider#cloud_iot_custom_endpoint}.

---

##### `CloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="CloudResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```go
CloudResourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `CloudRunCustomEndpoint`<sup>Optional</sup> <a name="CloudRunCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint"></a>

```go
CloudRunCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `CloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="CloudRunV2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```go
CloudRunV2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `CloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="CloudSchedulerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```go
CloudSchedulerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `CloudTasksCustomEndpoint`<sup>Optional</sup> <a name="CloudTasksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint"></a>

```go
CloudTasksCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `ComposerCustomEndpoint`<sup>Optional</sup> <a name="ComposerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint"></a>

```go
ComposerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `ComputeCustomEndpoint`<sup>Optional</sup> <a name="ComputeCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint"></a>

```go
ComputeCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `ContainerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="ContainerAnalysisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```go
ContainerAnalysisCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `ContainerAttachedCustomEndpoint`<sup>Optional</sup> <a name="ContainerAttachedCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint"></a>

```go
ContainerAttachedCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `ContainerAwsCustomEndpoint`<sup>Optional</sup> <a name="ContainerAwsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint"></a>

```go
ContainerAwsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `ContainerAzureCustomEndpoint`<sup>Optional</sup> <a name="ContainerAzureCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint"></a>

```go
ContainerAzureCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `ContainerCustomEndpoint`<sup>Optional</sup> <a name="ContainerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint"></a>

```go
ContainerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.credentials"></a>

```go
Credentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#credentials GoogleProvider#credentials}.

---

##### `DataCatalogCustomEndpoint`<sup>Optional</sup> <a name="DataCatalogCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint"></a>

```go
DataCatalogCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `DataflowCustomEndpoint`<sup>Optional</sup> <a name="DataflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint"></a>

```go
DataflowCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `DataFusionCustomEndpoint`<sup>Optional</sup> <a name="DataFusionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint"></a>

```go
DataFusionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `DataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="DataLossPreventionCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```go
DataLossPreventionCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `DataplexCustomEndpoint`<sup>Optional</sup> <a name="DataplexCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint"></a>

```go
DataplexCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `DataprocCustomEndpoint`<sup>Optional</sup> <a name="DataprocCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint"></a>

```go
DataprocCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `DataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="DataprocMetastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```go
DataprocMetastoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `DatastoreCustomEndpoint`<sup>Optional</sup> <a name="DatastoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastoreCustomEndpoint"></a>

```go
DatastoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}.

---

##### `DatastreamCustomEndpoint`<sup>Optional</sup> <a name="DatastreamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint"></a>

```go
DatastreamCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `DeploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="DeploymentManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```go
DeploymentManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `DialogflowCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint"></a>

```go
DialogflowCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `DialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="DialogflowCxCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```go
DialogflowCxCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `DnsCustomEndpoint`<sup>Optional</sup> <a name="DnsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint"></a>

```go
DnsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `DocumentAiCustomEndpoint`<sup>Optional</sup> <a name="DocumentAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint"></a>

```go
DocumentAiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `EssentialContactsCustomEndpoint`<sup>Optional</sup> <a name="EssentialContactsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint"></a>

```go
EssentialContactsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `EventarcCustomEndpoint`<sup>Optional</sup> <a name="EventarcCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint"></a>

```go
EventarcCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `FilestoreCustomEndpoint`<sup>Optional</sup> <a name="FilestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint"></a>

```go
FilestoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `FirebaserulesCustomEndpoint`<sup>Optional</sup> <a name="FirebaserulesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint"></a>

```go
FirebaserulesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `FirestoreCustomEndpoint`<sup>Optional</sup> <a name="FirestoreCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint"></a>

```go
FirestoreCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `GameServicesCustomEndpoint`<sup>Optional</sup> <a name="GameServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gameServicesCustomEndpoint"></a>

```go
GameServicesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#game_services_custom_endpoint GoogleProvider#game_services_custom_endpoint}.

---

##### `GkeBackupCustomEndpoint`<sup>Optional</sup> <a name="GkeBackupCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint"></a>

```go
GkeBackupCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `GkeHubCustomEndpoint`<sup>Optional</sup> <a name="GkeHubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint"></a>

```go
GkeHubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `HealthcareCustomEndpoint`<sup>Optional</sup> <a name="HealthcareCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint"></a>

```go
HealthcareCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `Iam2CustomEndpoint`<sup>Optional</sup> <a name="Iam2CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint"></a>

```go
Iam2CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `IamBetaCustomEndpoint`<sup>Optional</sup> <a name="IamBetaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint"></a>

```go
IamBetaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `IamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="IamCredentialsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```go
IamCredentialsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `IamCustomEndpoint`<sup>Optional</sup> <a name="IamCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint"></a>

```go
IamCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `IamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="IamWorkforcePoolCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```go
IamWorkforcePoolCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `IapCustomEndpoint`<sup>Optional</sup> <a name="IapCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint"></a>

```go
IapCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `IdentityPlatformCustomEndpoint`<sup>Optional</sup> <a name="IdentityPlatformCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint"></a>

```go
IdentityPlatformCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount"></a>

```go
ImpersonateServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `ImpersonateServiceAccountDelegates`<sup>Optional</sup> <a name="ImpersonateServiceAccountDelegates" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates"></a>

```go
ImpersonateServiceAccountDelegates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `KmsCustomEndpoint`<sup>Optional</sup> <a name="KmsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint"></a>

```go
KmsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `LoggingCustomEndpoint`<sup>Optional</sup> <a name="LoggingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint"></a>

```go
LoggingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `MemcacheCustomEndpoint`<sup>Optional</sup> <a name="MemcacheCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint"></a>

```go
MemcacheCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `MlEngineCustomEndpoint`<sup>Optional</sup> <a name="MlEngineCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint"></a>

```go
MlEngineCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `MonitoringCustomEndpoint`<sup>Optional</sup> <a name="MonitoringCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint"></a>

```go
MonitoringCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `NetworkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="NetworkConnectivityCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```go
NetworkConnectivityCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `NetworkManagementCustomEndpoint`<sup>Optional</sup> <a name="NetworkManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint"></a>

```go
NetworkManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `NetworkServicesCustomEndpoint`<sup>Optional</sup> <a name="NetworkServicesCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint"></a>

```go
NetworkServicesCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `NotebooksCustomEndpoint`<sup>Optional</sup> <a name="NotebooksCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint"></a>

```go
NotebooksCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `OrgPolicyCustomEndpoint`<sup>Optional</sup> <a name="OrgPolicyCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint"></a>

```go
OrgPolicyCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `OsConfigCustomEndpoint`<sup>Optional</sup> <a name="OsConfigCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint"></a>

```go
OsConfigCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `OsLoginCustomEndpoint`<sup>Optional</sup> <a name="OsLoginCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint"></a>

```go
OsLoginCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `PrivatecaCustomEndpoint`<sup>Optional</sup> <a name="PrivatecaCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint"></a>

```go
PrivatecaCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#project GoogleProvider#project}.

---

##### `PubsubCustomEndpoint`<sup>Optional</sup> <a name="PubsubCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint"></a>

```go
PubsubCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `PubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="PubsubLiteCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```go
PubsubLiteCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `RecaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="RecaptchaEnterpriseCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```go
RecaptchaEnterpriseCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `RedisCustomEndpoint`<sup>Optional</sup> <a name="RedisCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint"></a>

```go
RedisCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#region GoogleProvider#region}.

---

##### `RequestReason`<sup>Optional</sup> <a name="RequestReason" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestReason"></a>

```go
RequestReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#request_reason GoogleProvider#request_reason}.

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#request_timeout GoogleProvider#request_timeout}.

---

##### `ResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint"></a>

```go
ResourceManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `ResourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="ResourceManagerV3CustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```go
ResourceManagerV3CustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#scopes GoogleProvider#scopes}.

---

##### `SecretManagerCustomEndpoint`<sup>Optional</sup> <a name="SecretManagerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint"></a>

```go
SecretManagerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `SecurityCenterCustomEndpoint`<sup>Optional</sup> <a name="SecurityCenterCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint"></a>

```go
SecurityCenterCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `ServiceManagementCustomEndpoint`<sup>Optional</sup> <a name="ServiceManagementCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint"></a>

```go
ServiceManagementCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `ServiceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="ServiceNetworkingCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```go
ServiceNetworkingCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `ServiceUsageCustomEndpoint`<sup>Optional</sup> <a name="ServiceUsageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint"></a>

```go
ServiceUsageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `SourceRepoCustomEndpoint`<sup>Optional</sup> <a name="SourceRepoCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint"></a>

```go
SourceRepoCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `SpannerCustomEndpoint`<sup>Optional</sup> <a name="SpannerCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint"></a>

```go
SpannerCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `SqlCustomEndpoint`<sup>Optional</sup> <a name="SqlCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint"></a>

```go
SqlCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `StorageCustomEndpoint`<sup>Optional</sup> <a name="StorageCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint"></a>

```go
StorageCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `StorageTransferCustomEndpoint`<sup>Optional</sup> <a name="StorageTransferCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint"></a>

```go
StorageTransferCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `TagsCustomEndpoint`<sup>Optional</sup> <a name="TagsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint"></a>

```go
TagsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `TagsLocationCustomEndpoint`<sup>Optional</sup> <a name="TagsLocationCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint"></a>

```go
TagsLocationCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `TpuCustomEndpoint`<sup>Optional</sup> <a name="TpuCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.tpuCustomEndpoint"></a>

```go
TpuCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}.

---

##### `UserProjectOverride`<sup>Optional</sup> <a name="UserProjectOverride" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.userProjectOverride"></a>

```go
UserProjectOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#user_project_override GoogleProvider#user_project_override}.

---

##### `VertexAiCustomEndpoint`<sup>Optional</sup> <a name="VertexAiCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint"></a>

```go
VertexAiCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `VpcAccessCustomEndpoint`<sup>Optional</sup> <a name="VpcAccessCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint"></a>

```go
VpcAccessCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `WorkflowsCustomEndpoint`<sup>Optional</sup> <a name="WorkflowsCustomEndpoint" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint"></a>

```go
WorkflowsCustomEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.provider.GoogleProviderConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google#zone GoogleProvider#zone}.

---



