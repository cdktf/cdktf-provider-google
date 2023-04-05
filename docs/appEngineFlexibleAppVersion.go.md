# `appEngineFlexibleAppVersion` Submodule <a name="`appEngineFlexibleAppVersion` Submodule" id="@cdktf/provider-google.appEngineFlexibleAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineFlexibleAppVersion <a name="AppEngineFlexibleAppVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version google_app_engine_flexible_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersion(scope Construct, id *string, config AppEngineFlexibleAppVersionConfig) AppEngineFlexibleAppVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig">AppEngineFlexibleAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig">AppEngineFlexibleAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig">PutApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling">PutAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService">PutEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint">PutEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers">PutHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck">PutLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling">PutManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck">PutReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector">PutVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetApiConfig">ResetApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetAutomaticScaling">ResetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetBetaSettings">ResetBetaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDefaultExpiration">ResetDefaultExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy">ResetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEndpointsApiService">ResetEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetHandlers">ResetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInboundServices">ResetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetManualScaling">ResetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNobuildFilesRegex">ResetNobuildFilesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNoopOnDestroy">ResetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeApiVersion">ResetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeChannel">ResetRuntimeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath">ResetRuntimeMainExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServingStatus">ResetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVpcAccessConnector">ResetVpcAccessConnector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApiConfig` <a name="PutApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig"></a>

```go
func PutApiConfig(value AppEngineFlexibleAppVersionApiConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---

##### `PutAutomaticScaling` <a name="PutAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling"></a>

```go
func PutAutomaticScaling(value AppEngineFlexibleAppVersionAutomaticScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment"></a>

```go
func PutDeployment(value AppEngineFlexibleAppVersionDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---

##### `PutEndpointsApiService` <a name="PutEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService"></a>

```go
func PutEndpointsApiService(value AppEngineFlexibleAppVersionEndpointsApiService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `PutEntrypoint` <a name="PutEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint"></a>

```go
func PutEntrypoint(value AppEngineFlexibleAppVersionEntrypoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---

##### `PutHandlers` <a name="PutHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers"></a>

```go
func PutHandlers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessCheck` <a name="PutLivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck"></a>

```go
func PutLivenessCheck(value AppEngineFlexibleAppVersionLivenessCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `PutManualScaling` <a name="PutManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling"></a>

```go
func PutManualScaling(value AppEngineFlexibleAppVersionManualScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork"></a>

```go
func PutNetwork(value AppEngineFlexibleAppVersionNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---

##### `PutReadinessCheck` <a name="PutReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck"></a>

```go
func PutReadinessCheck(value AppEngineFlexibleAppVersionReadinessCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources"></a>

```go
func PutResources(value AppEngineFlexibleAppVersionResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts"></a>

```go
func PutTimeouts(value AppEngineFlexibleAppVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

---

##### `PutVpcAccessConnector` <a name="PutVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector"></a>

```go
func PutVpcAccessConnector(value AppEngineFlexibleAppVersionVpcAccessConnector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `ResetApiConfig` <a name="ResetApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetApiConfig"></a>

```go
func ResetApiConfig()
```

##### `ResetAutomaticScaling` <a name="ResetAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetAutomaticScaling"></a>

```go
func ResetAutomaticScaling()
```

##### `ResetBetaSettings` <a name="ResetBetaSettings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetBetaSettings"></a>

```go
func ResetBetaSettings()
```

##### `ResetDefaultExpiration` <a name="ResetDefaultExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDefaultExpiration"></a>

```go
func ResetDefaultExpiration()
```

##### `ResetDeleteServiceOnDestroy` <a name="ResetDeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy"></a>

```go
func ResetDeleteServiceOnDestroy()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetEndpointsApiService` <a name="ResetEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEndpointsApiService"></a>

```go
func ResetEndpointsApiService()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEntrypoint"></a>

```go
func ResetEntrypoint()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEnvVariables"></a>

```go
func ResetEnvVariables()
```

##### `ResetHandlers` <a name="ResetHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetHandlers"></a>

```go
func ResetHandlers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetInboundServices` <a name="ResetInboundServices" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInboundServices"></a>

```go
func ResetInboundServices()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInstanceClass"></a>

```go
func ResetInstanceClass()
```

##### `ResetManualScaling` <a name="ResetManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetManualScaling"></a>

```go
func ResetManualScaling()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNobuildFilesRegex` <a name="ResetNobuildFilesRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNobuildFilesRegex"></a>

```go
func ResetNobuildFilesRegex()
```

##### `ResetNoopOnDestroy` <a name="ResetNoopOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNoopOnDestroy"></a>

```go
func ResetNoopOnDestroy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetResources"></a>

```go
func ResetResources()
```

##### `ResetRuntimeApiVersion` <a name="ResetRuntimeApiVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeApiVersion"></a>

```go
func ResetRuntimeApiVersion()
```

##### `ResetRuntimeChannel` <a name="ResetRuntimeChannel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeChannel"></a>

```go
func ResetRuntimeChannel()
```

##### `ResetRuntimeMainExecutablePath` <a name="ResetRuntimeMainExecutablePath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath"></a>

```go
func ResetRuntimeMainExecutablePath()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetServingStatus` <a name="ResetServingStatus" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServingStatus"></a>

```go
func ResetServingStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVersionId"></a>

```go
func ResetVersionId()
```

##### `ResetVpcAccessConnector` <a name="ResetVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVpcAccessConnector"></a>

```go
func ResetVpcAccessConnector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.AppEngineFlexibleAppVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.AppEngineFlexibleAppVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.AppEngineFlexibleAppVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfig">ApiConfig</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference">AppEngineFlexibleAppVersionApiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference">AppEngineFlexibleAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference">AppEngineFlexibleAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiService">EndpointsApiService</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference">AppEngineFlexibleAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlers">Handlers</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList">AppEngineFlexibleAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheck">LivenessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference">AppEngineFlexibleAppVersionLivenessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference">AppEngineFlexibleAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference">AppEngineFlexibleAppVersionNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheck">ReadinessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference">AppEngineFlexibleAppVersionReadinessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference">AppEngineFlexibleAppVersionResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference">AppEngineFlexibleAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfigInput">ApiConfigInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScalingInput">AutomaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettingsInput">BetaSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpirationInput">DefaultExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput">DeleteServiceOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiServiceInput">EndpointsApiServiceInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypointInput">EntrypointInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariablesInput">EnvVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlersInput">HandlersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServicesInput">InboundServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClassInput">InstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheckInput">LivenessCheckInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScalingInput">ManualScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegexInput">NobuildFilesRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroyInput">NoopOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheckInput">ReadinessCheckInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersionInput">RuntimeApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannelInput">RuntimeChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput">RuntimeMainExecutablePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatusInput">ServingStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnectorInput">VpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettings">BetaSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpiration">DefaultExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServices">InboundServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegex">NobuildFilesRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannel">RuntimeChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePath">RuntimeMainExecutablePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatus">ServingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfig"></a>

```go
func ApiConfig() AppEngineFlexibleAppVersionApiConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference">AppEngineFlexibleAppVersionApiConfigOutputReference</a>

---

##### `AutomaticScaling`<sup>Required</sup> <a name="AutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScaling"></a>

```go
func AutomaticScaling() AppEngineFlexibleAppVersionAutomaticScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference">AppEngineFlexibleAppVersionAutomaticScalingOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deployment"></a>

```go
func Deployment() AppEngineFlexibleAppVersionDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference">AppEngineFlexibleAppVersionDeploymentOutputReference</a>

---

##### `EndpointsApiService`<sup>Required</sup> <a name="EndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiService"></a>

```go
func EndpointsApiService() AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a>

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypoint"></a>

```go
func Entrypoint() AppEngineFlexibleAppVersionEntrypointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference">AppEngineFlexibleAppVersionEntrypointOutputReference</a>

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlers"></a>

```go
func Handlers() AppEngineFlexibleAppVersionHandlersList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList">AppEngineFlexibleAppVersionHandlersList</a>

---

##### `LivenessCheck`<sup>Required</sup> <a name="LivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheck"></a>

```go
func LivenessCheck() AppEngineFlexibleAppVersionLivenessCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference">AppEngineFlexibleAppVersionLivenessCheckOutputReference</a>

---

##### `ManualScaling`<sup>Required</sup> <a name="ManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScaling"></a>

```go
func ManualScaling() AppEngineFlexibleAppVersionManualScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference">AppEngineFlexibleAppVersionManualScalingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.network"></a>

```go
func Network() AppEngineFlexibleAppVersionNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference">AppEngineFlexibleAppVersionNetworkOutputReference</a>

---

##### `ReadinessCheck`<sup>Required</sup> <a name="ReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheck"></a>

```go
func ReadinessCheck() AppEngineFlexibleAppVersionReadinessCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference">AppEngineFlexibleAppVersionReadinessCheckOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resources"></a>

```go
func Resources() AppEngineFlexibleAppVersionResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference">AppEngineFlexibleAppVersionResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeouts"></a>

```go
func Timeouts() AppEngineFlexibleAppVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference">AppEngineFlexibleAppVersionTimeoutsOutputReference</a>

---

##### `VpcAccessConnector`<sup>Required</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnector"></a>

```go
func VpcAccessConnector() AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a>

---

##### `ApiConfigInput`<sup>Optional</sup> <a name="ApiConfigInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfigInput"></a>

```go
func ApiConfigInput() AppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---

##### `AutomaticScalingInput`<sup>Optional</sup> <a name="AutomaticScalingInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScalingInput"></a>

```go
func AutomaticScalingInput() AppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `BetaSettingsInput`<sup>Optional</sup> <a name="BetaSettingsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettingsInput"></a>

```go
func BetaSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultExpirationInput`<sup>Optional</sup> <a name="DefaultExpirationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpirationInput"></a>

```go
func DefaultExpirationInput() *string
```

- *Type:* *string

---

##### `DeleteServiceOnDestroyInput`<sup>Optional</sup> <a name="DeleteServiceOnDestroyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput"></a>

```go
func DeleteServiceOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deploymentInput"></a>

```go
func DeploymentInput() AppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---

##### `EndpointsApiServiceInput`<sup>Optional</sup> <a name="EndpointsApiServiceInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiServiceInput"></a>

```go
func EndpointsApiServiceInput() AppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypointInput"></a>

```go
func EntrypointInput() AppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariablesInput"></a>

```go
func EnvVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HandlersInput`<sup>Optional</sup> <a name="HandlersInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlersInput"></a>

```go
func HandlersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InboundServicesInput`<sup>Optional</sup> <a name="InboundServicesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServicesInput"></a>

```go
func InboundServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClassInput"></a>

```go
func InstanceClassInput() *string
```

- *Type:* *string

---

##### `LivenessCheckInput`<sup>Optional</sup> <a name="LivenessCheckInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheckInput"></a>

```go
func LivenessCheckInput() AppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `ManualScalingInput`<sup>Optional</sup> <a name="ManualScalingInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScalingInput"></a>

```go
func ManualScalingInput() AppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.networkInput"></a>

```go
func NetworkInput() AppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---

##### `NobuildFilesRegexInput`<sup>Optional</sup> <a name="NobuildFilesRegexInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegexInput"></a>

```go
func NobuildFilesRegexInput() *string
```

- *Type:* *string

---

##### `NoopOnDestroyInput`<sup>Optional</sup> <a name="NoopOnDestroyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroyInput"></a>

```go
func NoopOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReadinessCheckInput`<sup>Optional</sup> <a name="ReadinessCheckInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheckInput"></a>

```go
func ReadinessCheckInput() AppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resourcesInput"></a>

```go
func ResourcesInput() AppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---

##### `RuntimeApiVersionInput`<sup>Optional</sup> <a name="RuntimeApiVersionInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersionInput"></a>

```go
func RuntimeApiVersionInput() *string
```

- *Type:* *string

---

##### `RuntimeChannelInput`<sup>Optional</sup> <a name="RuntimeChannelInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannelInput"></a>

```go
func RuntimeChannelInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `RuntimeMainExecutablePathInput`<sup>Optional</sup> <a name="RuntimeMainExecutablePathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput"></a>

```go
func RuntimeMainExecutablePathInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServingStatusInput`<sup>Optional</sup> <a name="ServingStatusInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatusInput"></a>

```go
func ServingStatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `VpcAccessConnectorInput`<sup>Optional</sup> <a name="VpcAccessConnectorInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnectorInput"></a>

```go
func VpcAccessConnectorInput() AppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `BetaSettings`<sup>Required</sup> <a name="BetaSettings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettings"></a>

```go
func BetaSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultExpiration`<sup>Required</sup> <a name="DefaultExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpiration"></a>

```go
func DefaultExpiration() *string
```

- *Type:* *string

---

##### `DeleteServiceOnDestroy`<sup>Required</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroy"></a>

```go
func DeleteServiceOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariables"></a>

```go
func EnvVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InboundServices`<sup>Required</sup> <a name="InboundServices" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServices"></a>

```go
func InboundServices() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClass"></a>

```go
func InstanceClass() *string
```

- *Type:* *string

---

##### `NobuildFilesRegex`<sup>Required</sup> <a name="NobuildFilesRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegex"></a>

```go
func NobuildFilesRegex() *string
```

- *Type:* *string

---

##### `NoopOnDestroy`<sup>Required</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroy"></a>

```go
func NoopOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `RuntimeApiVersion`<sup>Required</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersion"></a>

```go
func RuntimeApiVersion() *string
```

- *Type:* *string

---

##### `RuntimeChannel`<sup>Required</sup> <a name="RuntimeChannel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannel"></a>

```go
func RuntimeChannel() *string
```

- *Type:* *string

---

##### `RuntimeMainExecutablePath`<sup>Required</sup> <a name="RuntimeMainExecutablePath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePath"></a>

```go
func RuntimeMainExecutablePath() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServingStatus`<sup>Required</sup> <a name="ServingStatus" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatus"></a>

```go
func ServingStatus() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineFlexibleAppVersionApiConfig <a name="AppEngineFlexibleAppVersionApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionApiConfig {
	Script: *string,
	AuthFailAction: *string,
	Login: *string,
	SecurityLevel: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.script">Script</a></code> | <code>*string</code> | Path to the script from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.login">Login</a></code> | <code>*string</code> | Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.url">Url</a></code> | <code>*string</code> | URL to serve the endpoint at. |

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.script"></a>

```go
Script *string
```

- *Type:* *string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.authFailAction"></a>

```go
AuthFailAction *string
```

- *Type:* *string

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.login"></a>

```go
Login *string
```

- *Type:* *string

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#url AppEngineFlexibleAppVersion#url}

---

### AppEngineFlexibleAppVersionAutomaticScaling <a name="AppEngineFlexibleAppVersionAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionAutomaticScaling {
	CpuUtilization: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization,
	CoolDownPeriod: *string,
	DiskUtilization: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization,
	MaxConcurrentRequests: *f64,
	MaxIdleInstances: *f64,
	MaxPendingLatency: *string,
	MaxTotalInstances: *f64,
	MinIdleInstances: *f64,
	MinPendingLatency: *string,
	MinTotalInstances: *f64,
	NetworkUtilization: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization,
	RequestUtilization: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>*string</code> | The time period that the Autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization">DiskUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | disk_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>*f64</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>*f64</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>*string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances">MaxTotalInstances</a></code> | <code>*f64</code> | Maximum number of instances that should be started to handle requests for this version. Default: 20. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency">MinPendingLatency</a></code> | <code>*string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances">MinTotalInstances</a></code> | <code>*f64</code> | Minimum number of running instances that should be maintained for this version. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization">NetworkUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | network_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization">RequestUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | request_utilization block. |

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization"></a>

```go
CpuUtilization AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cpu_utilization AppEngineFlexibleAppVersion#cpu_utilization}

---

##### `CoolDownPeriod`<sup>Optional</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod"></a>

```go
CoolDownPeriod *string
```

- *Type:* *string

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cool_down_period AppEngineFlexibleAppVersion#cool_down_period}

---

##### `DiskUtilization`<sup>Optional</sup> <a name="DiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization"></a>

```go
DiskUtilization AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#disk_utilization AppEngineFlexibleAppVersion#disk_utilization}

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```go
MaxConcurrentRequests *f64
```

- *Type:* *f64

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_concurrent_requests AppEngineFlexibleAppVersion#max_concurrent_requests}

---

##### `MaxIdleInstances`<sup>Optional</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```go
MaxIdleInstances *f64
```

- *Type:* *f64

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_idle_instances AppEngineFlexibleAppVersion#max_idle_instances}

---

##### `MaxPendingLatency`<sup>Optional</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```go
MaxPendingLatency *string
```

- *Type:* *string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_pending_latency AppEngineFlexibleAppVersion#max_pending_latency}

---

##### `MaxTotalInstances`<sup>Optional</sup> <a name="MaxTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances"></a>

```go
MaxTotalInstances *f64
```

- *Type:* *f64

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#max_total_instances AppEngineFlexibleAppVersion#max_total_instances}

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances"></a>

```go
MinIdleInstances *f64
```

- *Type:* *f64

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#min_idle_instances AppEngineFlexibleAppVersion#min_idle_instances}

---

##### `MinPendingLatency`<sup>Optional</sup> <a name="MinPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency"></a>

```go
MinPendingLatency *string
```

- *Type:* *string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#min_pending_latency AppEngineFlexibleAppVersion#min_pending_latency}

---

##### `MinTotalInstances`<sup>Optional</sup> <a name="MinTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances"></a>

```go
MinTotalInstances *f64
```

- *Type:* *f64

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#min_total_instances AppEngineFlexibleAppVersion#min_total_instances}

---

##### `NetworkUtilization`<sup>Optional</sup> <a name="NetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization"></a>

```go
NetworkUtilization AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#network_utilization AppEngineFlexibleAppVersion#network_utilization}

---

##### `RequestUtilization`<sup>Optional</sup> <a name="RequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization"></a>

```go
RequestUtilization AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#request_utilization AppEngineFlexibleAppVersion#request_utilization}

---

### AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization {
	TargetUtilization: *f64,
	AggregationWindowLength: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization">TargetUtilization</a></code> | <code>*f64</code> | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength">AggregationWindowLength</a></code> | <code>*string</code> | Period of time over which CPU utilization is calculated. |

---

##### `TargetUtilization`<sup>Required</sup> <a name="TargetUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization"></a>

```go
TargetUtilization *f64
```

- *Type:* *f64

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_utilization AppEngineFlexibleAppVersion#target_utilization}

---

##### `AggregationWindowLength`<sup>Optional</sup> <a name="AggregationWindowLength" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength"></a>

```go
AggregationWindowLength *string
```

- *Type:* *string

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#aggregation_window_length AppEngineFlexibleAppVersion#aggregation_window_length}

---

### AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization {
	TargetReadBytesPerSecond: *f64,
	TargetReadOpsPerSecond: *f64,
	TargetWriteBytesPerSecond: *f64,
	TargetWriteOpsPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond">TargetReadBytesPerSecond</a></code> | <code>*f64</code> | Target bytes read per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond">TargetReadOpsPerSecond</a></code> | <code>*f64</code> | Target ops read per seconds. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond">TargetWriteBytesPerSecond</a></code> | <code>*f64</code> | Target bytes written per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond">TargetWriteOpsPerSecond</a></code> | <code>*f64</code> | Target ops written per second. |

---

##### `TargetReadBytesPerSecond`<sup>Optional</sup> <a name="TargetReadBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond"></a>

```go
TargetReadBytesPerSecond *f64
```

- *Type:* *f64

Target bytes read per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_read_bytes_per_second AppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

##### `TargetReadOpsPerSecond`<sup>Optional</sup> <a name="TargetReadOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond"></a>

```go
TargetReadOpsPerSecond *f64
```

- *Type:* *f64

Target ops read per seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_read_ops_per_second AppEngineFlexibleAppVersion#target_read_ops_per_second}

---

##### `TargetWriteBytesPerSecond`<sup>Optional</sup> <a name="TargetWriteBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond"></a>

```go
TargetWriteBytesPerSecond *f64
```

- *Type:* *f64

Target bytes written per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_write_bytes_per_second AppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

##### `TargetWriteOpsPerSecond`<sup>Optional</sup> <a name="TargetWriteOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond"></a>

```go
TargetWriteOpsPerSecond *f64
```

- *Type:* *f64

Target ops written per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_write_ops_per_second AppEngineFlexibleAppVersion#target_write_ops_per_second}

---

### AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization {
	TargetReceivedBytesPerSecond: *f64,
	TargetReceivedPacketsPerSecond: *f64,
	TargetSentBytesPerSecond: *f64,
	TargetSentPacketsPerSecond: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond">TargetReceivedBytesPerSecond</a></code> | <code>*f64</code> | Target bytes received per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond">TargetReceivedPacketsPerSecond</a></code> | <code>*f64</code> | Target packets received per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond">TargetSentBytesPerSecond</a></code> | <code>*f64</code> | Target bytes sent per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond">TargetSentPacketsPerSecond</a></code> | <code>*f64</code> | Target packets sent per second. |

---

##### `TargetReceivedBytesPerSecond`<sup>Optional</sup> <a name="TargetReceivedBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond"></a>

```go
TargetReceivedBytesPerSecond *f64
```

- *Type:* *f64

Target bytes received per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_received_bytes_per_second AppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

##### `TargetReceivedPacketsPerSecond`<sup>Optional</sup> <a name="TargetReceivedPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond"></a>

```go
TargetReceivedPacketsPerSecond *f64
```

- *Type:* *f64

Target packets received per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_received_packets_per_second AppEngineFlexibleAppVersion#target_received_packets_per_second}

---

##### `TargetSentBytesPerSecond`<sup>Optional</sup> <a name="TargetSentBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond"></a>

```go
TargetSentBytesPerSecond *f64
```

- *Type:* *f64

Target bytes sent per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_sent_bytes_per_second AppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

##### `TargetSentPacketsPerSecond`<sup>Optional</sup> <a name="TargetSentPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond"></a>

```go
TargetSentPacketsPerSecond *f64
```

- *Type:* *f64

Target packets sent per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_sent_packets_per_second AppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

### AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization {
	TargetConcurrentRequests: *f64,
	TargetRequestCountPerSecond: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests">TargetConcurrentRequests</a></code> | <code>*f64</code> | Target number of concurrent requests. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond">TargetRequestCountPerSecond</a></code> | <code>*string</code> | Target requests per second. |

---

##### `TargetConcurrentRequests`<sup>Optional</sup> <a name="TargetConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests"></a>

```go
TargetConcurrentRequests *f64
```

- *Type:* *f64

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_concurrent_requests AppEngineFlexibleAppVersion#target_concurrent_requests}

---

##### `TargetRequestCountPerSecond`<sup>Optional</sup> <a name="TargetRequestCountPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond"></a>

```go
TargetRequestCountPerSecond *string
```

- *Type:* *string

Target requests per second.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#target_request_count_per_second AppEngineFlexibleAppVersion#target_request_count_per_second}

---

### AppEngineFlexibleAppVersionConfig <a name="AppEngineFlexibleAppVersionConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LivenessCheck: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck,
	ReadinessCheck: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck,
	Runtime: *string,
	Service: *string,
	ApiConfig: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig,
	AutomaticScaling: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling,
	BetaSettings: *map[string]*string,
	DefaultExpiration: *string,
	DeleteServiceOnDestroy: interface{},
	Deployment: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment,
	EndpointsApiService: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService,
	Entrypoint: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint,
	EnvVariables: *map[string]*string,
	Handlers: interface{},
	Id: *string,
	InboundServices: *[]*string,
	InstanceClass: *string,
	ManualScaling: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling,
	Network: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork,
	NobuildFilesRegex: *string,
	NoopOnDestroy: interface{},
	Project: *string,
	Resources: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources,
	RuntimeApiVersion: *string,
	RuntimeChannel: *string,
	RuntimeMainExecutablePath: *string,
	ServiceAccount: *string,
	ServingStatus: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts,
	VersionId: *string,
	VpcAccessConnector: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.livenessCheck">LivenessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.readinessCheck">ReadinessCheck</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtime">Runtime</a></code> | <code>*string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.service">Service</a></code> | <code>*string</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.apiConfig">ApiConfig</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.betaSettings">BetaSettings</a></code> | <code>*map[string]*string</code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.defaultExpiration">DefaultExpiration</a></code> | <code>*string</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.endpointsApiService">EndpointsApiService</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.handlers">Handlers</a></code> | <code>interface{}</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.inboundServices">InboundServices</a></code> | <code>*[]*string</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex">NobuildFilesRegex</a></code> | <code>*string</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>*string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeChannel">RuntimeChannel</a></code> | <code>*string</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath">RuntimeMainExecutablePath</a></code> | <code>*string</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.servingStatus">ServingStatus</a></code> | <code>*string</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LivenessCheck`<sup>Required</sup> <a name="LivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.livenessCheck"></a>

```go
LivenessCheck AppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#liveness_check AppEngineFlexibleAppVersion#liveness_check}

---

##### `ReadinessCheck`<sup>Required</sup> <a name="ReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.readinessCheck"></a>

```go
ReadinessCheck AppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#readiness_check AppEngineFlexibleAppVersion#readiness_check}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime AppEngineFlexibleAppVersion#runtime}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#service AppEngineFlexibleAppVersion#service}

---

##### `ApiConfig`<sup>Optional</sup> <a name="ApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.apiConfig"></a>

```go
ApiConfig AppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#api_config AppEngineFlexibleAppVersion#api_config}

---

##### `AutomaticScaling`<sup>Optional</sup> <a name="AutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.automaticScaling"></a>

```go
AutomaticScaling AppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#automatic_scaling AppEngineFlexibleAppVersion#automatic_scaling}

---

##### `BetaSettings`<sup>Optional</sup> <a name="BetaSettings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.betaSettings"></a>

```go
BetaSettings *map[string]*string
```

- *Type:* *map[string]*string

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#beta_settings AppEngineFlexibleAppVersion#beta_settings}

---

##### `DefaultExpiration`<sup>Optional</sup> <a name="DefaultExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.defaultExpiration"></a>

```go
DefaultExpiration *string
```

- *Type:* *string

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#default_expiration AppEngineFlexibleAppVersion#default_expiration}

---

##### `DeleteServiceOnDestroy`<sup>Optional</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy"></a>

```go
DeleteServiceOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#delete_service_on_destroy AppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deployment"></a>

```go
Deployment AppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#deployment AppEngineFlexibleAppVersion#deployment}

---

##### `EndpointsApiService`<sup>Optional</sup> <a name="EndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.endpointsApiService"></a>

```go
EndpointsApiService AppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#endpoints_api_service AppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.entrypoint"></a>

```go
Entrypoint AppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#entrypoint AppEngineFlexibleAppVersion#entrypoint}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.envVariables"></a>

```go
EnvVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#env_variables AppEngineFlexibleAppVersion#env_variables}

---

##### `Handlers`<sup>Optional</sup> <a name="Handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.handlers"></a>

```go
Handlers interface{}
```

- *Type:* interface{}

handlers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#handlers AppEngineFlexibleAppVersion#handlers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundServices`<sup>Optional</sup> <a name="InboundServices" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.inboundServices"></a>

```go
InboundServices *[]*string
```

- *Type:* *[]*string

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#inbound_services AppEngineFlexibleAppVersion#inbound_services}

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.instanceClass"></a>

```go
InstanceClass *string
```

- *Type:* *string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#instance_class AppEngineFlexibleAppVersion#instance_class}

---

##### `ManualScaling`<sup>Optional</sup> <a name="ManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.manualScaling"></a>

```go
ManualScaling AppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#manual_scaling AppEngineFlexibleAppVersion#manual_scaling}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.network"></a>

```go
Network AppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#network AppEngineFlexibleAppVersion#network}

---

##### `NobuildFilesRegex`<sup>Optional</sup> <a name="NobuildFilesRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex"></a>

```go
NobuildFilesRegex *string
```

- *Type:* *string

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#nobuild_files_regex AppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `NoopOnDestroy`<sup>Optional</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.noopOnDestroy"></a>

```go
NoopOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#noop_on_destroy AppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.resources"></a>

```go
Resources AppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#resources AppEngineFlexibleAppVersion#resources}

---

##### `RuntimeApiVersion`<sup>Optional</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeApiVersion"></a>

```go
RuntimeApiVersion *string
```

- *Type:* *string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime_api_version AppEngineFlexibleAppVersion#runtime_api_version}

---

##### `RuntimeChannel`<sup>Optional</sup> <a name="RuntimeChannel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeChannel"></a>

```go
RuntimeChannel *string
```

- *Type:* *string

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime_channel AppEngineFlexibleAppVersion#runtime_channel}

---

##### `RuntimeMainExecutablePath`<sup>Optional</sup> <a name="RuntimeMainExecutablePath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath"></a>

```go
RuntimeMainExecutablePath *string
```

- *Type:* *string

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#runtime_main_executable_path AppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#service_account AppEngineFlexibleAppVersion#service_account}

---

##### `ServingStatus`<sup>Optional</sup> <a name="ServingStatus" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.servingStatus"></a>

```go
ServingStatus *string
```

- *Type:* *string

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#serving_status AppEngineFlexibleAppVersion#serving_status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.timeouts"></a>

```go
Timeouts AppEngineFlexibleAppVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#timeouts AppEngineFlexibleAppVersion#timeouts}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#version_id AppEngineFlexibleAppVersion#version_id}

---

##### `VpcAccessConnector`<sup>Optional</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.vpcAccessConnector"></a>

```go
VpcAccessConnector AppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#vpc_access_connector AppEngineFlexibleAppVersion#vpc_access_connector}

---

### AppEngineFlexibleAppVersionDeployment <a name="AppEngineFlexibleAppVersionDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionDeployment {
	CloudBuildOptions: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions,
	Container: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer,
	Files: interface{},
	Zip: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions">CloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | cloud_build_options block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.files">Files</a></code> | <code>interface{}</code> | files block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | zip block. |

---

##### `CloudBuildOptions`<sup>Optional</sup> <a name="CloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions"></a>

```go
CloudBuildOptions AppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cloud_build_options AppEngineFlexibleAppVersion#cloud_build_options}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.container"></a>

```go
Container AppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#container AppEngineFlexibleAppVersion#container}

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.files"></a>

```go
Files interface{}
```

- *Type:* interface{}

files block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#files AppEngineFlexibleAppVersion#files}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.zip"></a>

```go
Zip AppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#zip AppEngineFlexibleAppVersion#zip}

---

### AppEngineFlexibleAppVersionDeploymentCloudBuildOptions <a name="AppEngineFlexibleAppVersionDeploymentCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions {
	AppYamlPath: *string,
	CloudBuildTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath">AppYamlPath</a></code> | <code>*string</code> | Path to the yaml file used in deployment, used to determine runtime configuration details. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout">CloudBuildTimeout</a></code> | <code>*string</code> | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. |

---

##### `AppYamlPath`<sup>Required</sup> <a name="AppYamlPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath"></a>

```go
AppYamlPath *string
```

- *Type:* *string

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#app_yaml_path AppEngineFlexibleAppVersion#app_yaml_path}

---

##### `CloudBuildTimeout`<sup>Optional</sup> <a name="CloudBuildTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout"></a>

```go
CloudBuildTimeout *string
```

- *Type:* *string

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cloud_build_timeout AppEngineFlexibleAppVersion#cloud_build_timeout}

---

### AppEngineFlexibleAppVersionDeploymentContainer <a name="AppEngineFlexibleAppVersionDeploymentContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionDeploymentContainer {
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.property.image">Image</a></code> | <code>*string</code> | URI to the hosted container image in Google Container Registry. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#image AppEngineFlexibleAppVersion#image}

---

### AppEngineFlexibleAppVersionDeploymentFiles <a name="AppEngineFlexibleAppVersionDeploymentFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionDeploymentFiles {
	Name: *string,
	SourceUrl: *string,
	Sha1Sum: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum">Sha1Sum</a></code> | <code>*string</code> | SHA1 checksum of the file. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}.

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Source URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

##### `Sha1Sum`<sup>Optional</sup> <a name="Sha1Sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum"></a>

```go
Sha1Sum *string
```

- *Type:* *string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#sha1_sum AppEngineFlexibleAppVersion#sha1_sum}

---

### AppEngineFlexibleAppVersionDeploymentZip <a name="AppEngineFlexibleAppVersionDeploymentZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionDeploymentZip {
	SourceUrl: *string,
	FilesCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.filesCount">FilesCount</a></code> | <code>*f64</code> | files count. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Source URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

##### `FilesCount`<sup>Optional</sup> <a name="FilesCount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.filesCount"></a>

```go
FilesCount *f64
```

- *Type:* *f64

files count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#files_count AppEngineFlexibleAppVersion#files_count}

---

### AppEngineFlexibleAppVersionEndpointsApiService <a name="AppEngineFlexibleAppVersionEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionEndpointsApiService {
	Name: *string,
	ConfigId: *string,
	DisableTraceSampling: interface{},
	RolloutStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.name">Name</a></code> | <code>*string</code> | Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.configId">ConfigId</a></code> | <code>*string</code> | Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling">DisableTraceSampling</a></code> | <code>interface{}</code> | Enable or disable trace sampling. By default, this is set to false for enabled. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy">RolloutStrategy</a></code> | <code>*string</code> | Endpoints rollout strategy. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#config_id AppEngineFlexibleAppVersion#config_id}

---

##### `DisableTraceSampling`<sup>Optional</sup> <a name="DisableTraceSampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling"></a>

```go
DisableTraceSampling interface{}
```

- *Type:* interface{}

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#disable_trace_sampling AppEngineFlexibleAppVersion#disable_trace_sampling}

---

##### `RolloutStrategy`<sup>Optional</sup> <a name="RolloutStrategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy"></a>

```go
RolloutStrategy *string
```

- *Type:* *string

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#rollout_strategy AppEngineFlexibleAppVersion#rollout_strategy}

---

### AppEngineFlexibleAppVersionEntrypoint <a name="AppEngineFlexibleAppVersionEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionEntrypoint {
	Shell: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.property.shell">Shell</a></code> | <code>*string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.property.shell"></a>

```go
Shell *string
```

- *Type:* *string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#shell AppEngineFlexibleAppVersion#shell}

---

### AppEngineFlexibleAppVersionHandlers <a name="AppEngineFlexibleAppVersionHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionHandlers {
	AuthFailAction: *string,
	Login: *string,
	RedirectHttpResponseCode: *string,
	Script: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript,
	SecurityLevel: *string,
	StaticFiles: github.com/cdktf/cdktf-provider-google-go/google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles,
	UrlRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.login">Login</a></code> | <code>*string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>*string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | URL prefix. |

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.authFailAction"></a>

```go
AuthFailAction *string
```

- *Type:* *string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.login"></a>

```go
Login *string
```

- *Type:* *string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

##### `RedirectHttpResponseCode`<sup>Optional</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode"></a>

```go
RedirectHttpResponseCode *string
```

- *Type:* *string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#redirect_http_response_code AppEngineFlexibleAppVersion#redirect_http_response_code}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.script"></a>

```go
Script AppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

##### `StaticFiles`<sup>Optional</sup> <a name="StaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.staticFiles"></a>

```go
StaticFiles AppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#static_files AppEngineFlexibleAppVersion#static_files}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.urlRegex"></a>

```go
UrlRegex *string
```

- *Type:* *string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#url_regex AppEngineFlexibleAppVersion#url_regex}

---

### AppEngineFlexibleAppVersionHandlersScript <a name="AppEngineFlexibleAppVersionHandlersScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionHandlersScript {
	ScriptPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.property.scriptPath">ScriptPath</a></code> | <code>*string</code> | Path to the script from the application root directory. |

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.property.scriptPath"></a>

```go
ScriptPath *string
```

- *Type:* *string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#script_path AppEngineFlexibleAppVersion#script_path}

---

### AppEngineFlexibleAppVersionHandlersStaticFiles <a name="AppEngineFlexibleAppVersionHandlersStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionHandlersStaticFiles {
	ApplicationReadable: interface{},
	Expiration: *string,
	HttpHeaders: *map[string]*string,
	MimeType: *string,
	Path: *string,
	RequireMatchingFile: interface{},
	UploadPathRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable">ApplicationReadable</a></code> | <code>interface{}</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration">Expiration</a></code> | <code>*string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders">HttpHeaders</a></code> | <code>*map[string]*string</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType">MimeType</a></code> | <code>*string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.path">Path</a></code> | <code>*string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>interface{}</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex">UploadPathRegex</a></code> | <code>*string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `ApplicationReadable`<sup>Optional</sup> <a name="ApplicationReadable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```go
ApplicationReadable interface{}
```

- *Type:* interface{}

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#application_readable AppEngineFlexibleAppVersion#application_readable}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration"></a>

```go
Expiration *string
```

- *Type:* *string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#expiration AppEngineFlexibleAppVersion#expiration}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```go
HttpHeaders *map[string]*string
```

- *Type:* *map[string]*string

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#http_headers AppEngineFlexibleAppVersion#http_headers}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#mime_type AppEngineFlexibleAppVersion#mime_type}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `RequireMatchingFile`<sup>Optional</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```go
RequireMatchingFile interface{}
```

- *Type:* interface{}

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#require_matching_file AppEngineFlexibleAppVersion#require_matching_file}

---

##### `UploadPathRegex`<sup>Optional</sup> <a name="UploadPathRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```go
UploadPathRegex *string
```

- *Type:* *string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#upload_path_regex AppEngineFlexibleAppVersion#upload_path_regex}

---

### AppEngineFlexibleAppVersionLivenessCheck <a name="AppEngineFlexibleAppVersionLivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionLivenessCheck {
	Path: *string,
	CheckInterval: *string,
	FailureThreshold: *f64,
	Host: *string,
	InitialDelay: *string,
	SuccessThreshold: *f64,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.path">Path</a></code> | <code>*string</code> | The request path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.host">Host</a></code> | <code>*string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.initialDelay">InitialDelay</a></code> | <code>*string</code> | The initial delay before starting to execute the checks. Default: "300s". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | Number of consecutive successful checks required before considering the VM healthy. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.timeout">Timeout</a></code> | <code>*string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

The request path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.checkInterval"></a>

```go
CheckInterval *string
```

- *Type:* *string

Interval between health checks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.initialDelay"></a>

```go
InitialDelay *string
```

- *Type:* *string

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#initial_delay AppEngineFlexibleAppVersion#initial_delay}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.successThreshold"></a>

```go
SuccessThreshold *f64
```

- *Type:* *f64

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

### AppEngineFlexibleAppVersionManualScaling <a name="AppEngineFlexibleAppVersionManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionManualScaling {
	Instances: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.property.instances">Instances</a></code> | <code>*f64</code> | Number of instances to assign to the service at the start. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.property.instances"></a>

```go
Instances *f64
```

- *Type:* *f64

Number of instances to assign to the service at the start.

*Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#instances AppEngineFlexibleAppVersion#instances}

---

### AppEngineFlexibleAppVersionNetwork <a name="AppEngineFlexibleAppVersionNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionNetwork {
	Name: *string,
	ForwardedPorts: *[]*string,
	InstanceTag: *string,
	SessionAffinity: interface{},
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.name">Name</a></code> | <code>*string</code> | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.forwardedPorts">ForwardedPorts</a></code> | <code>*[]*string</code> | List of ports, or port pairs, to forward from the virtual machine to the application container. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.instanceTag">InstanceTag</a></code> | <code>*string</code> | Tag to apply to the instance during creation. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.sessionAffinity">SessionAffinity</a></code> | <code>interface{}</code> | Enable session affinity. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `ForwardedPorts`<sup>Optional</sup> <a name="ForwardedPorts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.forwardedPorts"></a>

```go
ForwardedPorts *[]*string
```

- *Type:* *[]*string

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#forwarded_ports AppEngineFlexibleAppVersion#forwarded_ports}

---

##### `InstanceTag`<sup>Optional</sup> <a name="InstanceTag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.instanceTag"></a>

```go
InstanceTag *string
```

- *Type:* *string

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#instance_tag AppEngineFlexibleAppVersion#instance_tag}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.sessionAffinity"></a>

```go
SessionAffinity interface{}
```

- *Type:* interface{}

Enable session affinity.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#session_affinity AppEngineFlexibleAppVersion#session_affinity}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#subnetwork AppEngineFlexibleAppVersion#subnetwork}

---

### AppEngineFlexibleAppVersionReadinessCheck <a name="AppEngineFlexibleAppVersionReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionReadinessCheck {
	Path: *string,
	AppStartTimeout: *string,
	CheckInterval: *string,
	FailureThreshold: *f64,
	Host: *string,
	SuccessThreshold: *f64,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.path">Path</a></code> | <code>*string</code> | The request path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout">AppStartTimeout</a></code> | <code>*string</code> | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | Interval between health checks.  Default: "5s". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Number of consecutive failed checks required before removing traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.host">Host</a></code> | <code>*string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | Number of consecutive successful checks required before receiving traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.timeout">Timeout</a></code> | <code>*string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

The request path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `AppStartTimeout`<sup>Optional</sup> <a name="AppStartTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout"></a>

```go
AppStartTimeout *string
```

- *Type:* *string

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#app_start_timeout AppEngineFlexibleAppVersion#app_start_timeout}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.checkInterval"></a>

```go
CheckInterval *string
```

- *Type:* *string

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.successThreshold"></a>

```go
SuccessThreshold *f64
```

- *Type:* *f64

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

### AppEngineFlexibleAppVersionResources <a name="AppEngineFlexibleAppVersionResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionResources {
	Cpu: *f64,
	DiskGb: *f64,
	MemoryGb: *f64,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.cpu">Cpu</a></code> | <code>*f64</code> | Number of CPU cores needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.diskGb">DiskGb</a></code> | <code>*f64</code> | Disk size (GB) needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | Memory (GB) needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#cpu AppEngineFlexibleAppVersion#cpu}

---

##### `DiskGb`<sup>Optional</sup> <a name="DiskGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.diskGb"></a>

```go
DiskGb *f64
```

- *Type:* *f64

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#disk_gb AppEngineFlexibleAppVersion#disk_gb}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.memoryGb"></a>

```go
MemoryGb *f64
```

- *Type:* *f64

Memory (GB) needed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#memory_gb AppEngineFlexibleAppVersion#memory_gb}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#volumes AppEngineFlexibleAppVersion#volumes}

---

### AppEngineFlexibleAppVersionResourcesVolumes <a name="AppEngineFlexibleAppVersionResourcesVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionResourcesVolumes {
	Name: *string,
	SizeGb: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.name">Name</a></code> | <code>*string</code> | Unique name for the volume. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | Volume size in gigabytes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.volumeType">VolumeType</a></code> | <code>*string</code> | Underlying volume type, e.g. 'tmpfs'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb"></a>

```go
SizeGb *f64
```

- *Type:* *f64

Volume size in gigabytes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#size_gb AppEngineFlexibleAppVersion#size_gb}

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Underlying volume type, e.g. 'tmpfs'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#volume_type AppEngineFlexibleAppVersion#volume_type}

---

### AppEngineFlexibleAppVersionTimeouts <a name="AppEngineFlexibleAppVersionTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}.

---

### AppEngineFlexibleAppVersionVpcAccessConnector <a name="AppEngineFlexibleAppVersionVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

&appengineflexibleappversion.AppEngineFlexibleAppVersionVpcAccessConnector {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.property.name">Name</a></code> | <code>*string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.property.name"></a>

```go
Name *string
```

- *Type:* *string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineFlexibleAppVersionApiConfigOutputReference <a name="AppEngineFlexibleAppVersionApiConfigOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionApiConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionApiConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction"></a>

```go
func ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput"></a>

```go
func AuthFailActionInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction"></a>

```go
func AuthFailAction() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength">ResetAggregationWindowLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregationWindowLength` <a name="ResetAggregationWindowLength" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength"></a>

```go
func ResetAggregationWindowLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput">AggregationWindowLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput">TargetUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength">AggregationWindowLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization">TargetUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationWindowLengthInput`<sup>Optional</sup> <a name="AggregationWindowLengthInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput"></a>

```go
func AggregationWindowLengthInput() *string
```

- *Type:* *string

---

##### `TargetUtilizationInput`<sup>Optional</sup> <a name="TargetUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput"></a>

```go
func TargetUtilizationInput() *f64
```

- *Type:* *f64

---

##### `AggregationWindowLength`<sup>Required</sup> <a name="AggregationWindowLength" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength"></a>

```go
func AggregationWindowLength() *string
```

- *Type:* *string

---

##### `TargetUtilization`<sup>Required</sup> <a name="TargetUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization"></a>

```go
func TargetUtilization() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond">ResetTargetReadBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond">ResetTargetReadOpsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond">ResetTargetWriteBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond">ResetTargetWriteOpsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetReadBytesPerSecond` <a name="ResetTargetReadBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond"></a>

```go
func ResetTargetReadBytesPerSecond()
```

##### `ResetTargetReadOpsPerSecond` <a name="ResetTargetReadOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond"></a>

```go
func ResetTargetReadOpsPerSecond()
```

##### `ResetTargetWriteBytesPerSecond` <a name="ResetTargetWriteBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond"></a>

```go
func ResetTargetWriteBytesPerSecond()
```

##### `ResetTargetWriteOpsPerSecond` <a name="ResetTargetWriteOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond"></a>

```go
func ResetTargetWriteOpsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput">TargetReadBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput">TargetReadOpsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput">TargetWriteBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput">TargetWriteOpsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond">TargetReadBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond">TargetReadOpsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond">TargetWriteBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond">TargetWriteOpsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetReadBytesPerSecondInput`<sup>Optional</sup> <a name="TargetReadBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput"></a>

```go
func TargetReadBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReadOpsPerSecondInput`<sup>Optional</sup> <a name="TargetReadOpsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput"></a>

```go
func TargetReadOpsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetWriteBytesPerSecondInput`<sup>Optional</sup> <a name="TargetWriteBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput"></a>

```go
func TargetWriteBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetWriteOpsPerSecondInput`<sup>Optional</sup> <a name="TargetWriteOpsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput"></a>

```go
func TargetWriteOpsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReadBytesPerSecond`<sup>Required</sup> <a name="TargetReadBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond"></a>

```go
func TargetReadBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetReadOpsPerSecond`<sup>Required</sup> <a name="TargetReadOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond"></a>

```go
func TargetReadOpsPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetWriteBytesPerSecond`<sup>Required</sup> <a name="TargetWriteBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond"></a>

```go
func TargetWriteBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetWriteOpsPerSecond`<sup>Required</sup> <a name="TargetWriteOpsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond"></a>

```go
func TargetWriteOpsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond">ResetTargetReceivedBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond">ResetTargetReceivedPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond">ResetTargetSentBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond">ResetTargetSentPacketsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetReceivedBytesPerSecond` <a name="ResetTargetReceivedBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond"></a>

```go
func ResetTargetReceivedBytesPerSecond()
```

##### `ResetTargetReceivedPacketsPerSecond` <a name="ResetTargetReceivedPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond"></a>

```go
func ResetTargetReceivedPacketsPerSecond()
```

##### `ResetTargetSentBytesPerSecond` <a name="ResetTargetSentBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond"></a>

```go
func ResetTargetSentBytesPerSecond()
```

##### `ResetTargetSentPacketsPerSecond` <a name="ResetTargetSentPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond"></a>

```go
func ResetTargetSentPacketsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput">TargetReceivedBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput">TargetReceivedPacketsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput">TargetSentBytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput">TargetSentPacketsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond">TargetReceivedBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond">TargetReceivedPacketsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond">TargetSentBytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond">TargetSentPacketsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetReceivedBytesPerSecondInput`<sup>Optional</sup> <a name="TargetReceivedBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput"></a>

```go
func TargetReceivedBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReceivedPacketsPerSecondInput`<sup>Optional</sup> <a name="TargetReceivedPacketsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput"></a>

```go
func TargetReceivedPacketsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetSentBytesPerSecondInput`<sup>Optional</sup> <a name="TargetSentBytesPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput"></a>

```go
func TargetSentBytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetSentPacketsPerSecondInput`<sup>Optional</sup> <a name="TargetSentPacketsPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput"></a>

```go
func TargetSentPacketsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `TargetReceivedBytesPerSecond`<sup>Required</sup> <a name="TargetReceivedBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond"></a>

```go
func TargetReceivedBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetReceivedPacketsPerSecond`<sup>Required</sup> <a name="TargetReceivedPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond"></a>

```go
func TargetReceivedPacketsPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetSentBytesPerSecond`<sup>Required</sup> <a name="TargetSentBytesPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond"></a>

```go
func TargetSentBytesPerSecond() *f64
```

- *Type:* *f64

---

##### `TargetSentPacketsPerSecond`<sup>Required</sup> <a name="TargetSentPacketsPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond"></a>

```go
func TargetSentPacketsPerSecond() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionAutomaticScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionAutomaticScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization">PutDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization">PutNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization">PutRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod">ResetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization">ResetDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">ResetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">ResetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances">ResetMaxTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">ResetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances">ResetMinTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization">ResetNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization">ResetRequestUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization"></a>

```go
func PutCpuUtilization(value AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `PutDiskUtilization` <a name="PutDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization"></a>

```go
func PutDiskUtilization(value AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `PutNetworkUtilization` <a name="PutNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization"></a>

```go
func PutNetworkUtilization(value AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `PutRequestUtilization` <a name="PutRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization"></a>

```go
func PutRequestUtilization(value AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `ResetCoolDownPeriod` <a name="ResetCoolDownPeriod" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod"></a>

```go
func ResetCoolDownPeriod()
```

##### `ResetDiskUtilization` <a name="ResetDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization"></a>

```go
func ResetDiskUtilization()
```

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```go
func ResetMaxConcurrentRequests()
```

##### `ResetMaxIdleInstances` <a name="ResetMaxIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```go
func ResetMaxIdleInstances()
```

##### `ResetMaxPendingLatency` <a name="ResetMaxPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```go
func ResetMaxPendingLatency()
```

##### `ResetMaxTotalInstances` <a name="ResetMaxTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances"></a>

```go
func ResetMaxTotalInstances()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```go
func ResetMinIdleInstances()
```

##### `ResetMinPendingLatency` <a name="ResetMinPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```go
func ResetMinPendingLatency()
```

##### `ResetMinTotalInstances` <a name="ResetMinTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances"></a>

```go
func ResetMinTotalInstances()
```

##### `ResetNetworkUtilization` <a name="ResetNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization"></a>

```go
func ResetNetworkUtilization()
```

##### `ResetRequestUtilization` <a name="ResetRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization"></a>

```go
func ResetRequestUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization">DiskUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization">NetworkUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization">RequestUtilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput">CoolDownPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput">DiskUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">MaxIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">MaxPendingLatencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput">MaxTotalInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">MinPendingLatencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput">MinTotalInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput">NetworkUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput">RequestUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances">MaxTotalInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency">MinPendingLatency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances">MinTotalInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization"></a>

```go
func CpuUtilization() AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a>

---

##### `DiskUtilization`<sup>Required</sup> <a name="DiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization"></a>

```go
func DiskUtilization() AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a>

---

##### `NetworkUtilization`<sup>Required</sup> <a name="NetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization"></a>

```go
func NetworkUtilization() AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a>

---

##### `RequestUtilization`<sup>Required</sup> <a name="RequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization"></a>

```go
func RequestUtilization() AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a>

---

##### `CoolDownPeriodInput`<sup>Optional</sup> <a name="CoolDownPeriodInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput"></a>

```go
func CoolDownPeriodInput() *string
```

- *Type:* *string

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput"></a>

```go
func CpuUtilizationInput() AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `DiskUtilizationInput`<sup>Optional</sup> <a name="DiskUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput"></a>

```go
func DiskUtilizationInput() AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```go
func MaxConcurrentRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleInstancesInput`<sup>Optional</sup> <a name="MaxIdleInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```go
func MaxIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingLatencyInput`<sup>Optional</sup> <a name="MaxPendingLatencyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```go
func MaxPendingLatencyInput() *string
```

- *Type:* *string

---

##### `MaxTotalInstancesInput`<sup>Optional</sup> <a name="MaxTotalInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput"></a>

```go
func MaxTotalInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```go
func MinIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinPendingLatencyInput`<sup>Optional</sup> <a name="MinPendingLatencyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```go
func MinPendingLatencyInput() *string
```

- *Type:* *string

---

##### `MinTotalInstancesInput`<sup>Optional</sup> <a name="MinTotalInstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput"></a>

```go
func MinTotalInstancesInput() *f64
```

- *Type:* *f64

---

##### `NetworkUtilizationInput`<sup>Optional</sup> <a name="NetworkUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput"></a>

```go
func NetworkUtilizationInput() AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `RequestUtilizationInput`<sup>Optional</sup> <a name="RequestUtilizationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput"></a>

```go
func RequestUtilizationInput() AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `CoolDownPeriod`<sup>Required</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod"></a>

```go
func CoolDownPeriod() *string
```

- *Type:* *string

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```go
func MaxConcurrentRequests() *f64
```

- *Type:* *f64

---

##### `MaxIdleInstances`<sup>Required</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```go
func MaxIdleInstances() *f64
```

- *Type:* *f64

---

##### `MaxPendingLatency`<sup>Required</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```go
func MaxPendingLatency() *string
```

- *Type:* *string

---

##### `MaxTotalInstances`<sup>Required</sup> <a name="MaxTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances"></a>

```go
func MaxTotalInstances() *f64
```

- *Type:* *f64

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```go
func MinIdleInstances() *f64
```

- *Type:* *f64

---

##### `MinPendingLatency`<sup>Required</sup> <a name="MinPendingLatency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```go
func MinPendingLatency() *string
```

- *Type:* *string

---

##### `MinTotalInstances`<sup>Required</sup> <a name="MinTotalInstances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances"></a>

```go
func MinTotalInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests">ResetTargetConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond">ResetTargetRequestCountPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetConcurrentRequests` <a name="ResetTargetConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests"></a>

```go
func ResetTargetConcurrentRequests()
```

##### `ResetTargetRequestCountPerSecond` <a name="ResetTargetRequestCountPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond"></a>

```go
func ResetTargetRequestCountPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput">TargetConcurrentRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput">TargetRequestCountPerSecondInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests">TargetConcurrentRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond">TargetRequestCountPerSecond</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetConcurrentRequestsInput`<sup>Optional</sup> <a name="TargetConcurrentRequestsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput"></a>

```go
func TargetConcurrentRequestsInput() *f64
```

- *Type:* *f64

---

##### `TargetRequestCountPerSecondInput`<sup>Optional</sup> <a name="TargetRequestCountPerSecondInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput"></a>

```go
func TargetRequestCountPerSecondInput() *string
```

- *Type:* *string

---

##### `TargetConcurrentRequests`<sup>Required</sup> <a name="TargetConcurrentRequests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests"></a>

```go
func TargetConcurrentRequests() *f64
```

- *Type:* *f64

---

##### `TargetRequestCountPerSecond`<sup>Required</sup> <a name="TargetRequestCountPerSecond" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond"></a>

```go
func TargetRequestCountPerSecond() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---


### AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference <a name="AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout">ResetCloudBuildTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudBuildTimeout` <a name="ResetCloudBuildTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout"></a>

```go
func ResetCloudBuildTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput">AppYamlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput">CloudBuildTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath">AppYamlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout">CloudBuildTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppYamlPathInput`<sup>Optional</sup> <a name="AppYamlPathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput"></a>

```go
func AppYamlPathInput() *string
```

- *Type:* *string

---

##### `CloudBuildTimeoutInput`<sup>Optional</sup> <a name="CloudBuildTimeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput"></a>

```go
func CloudBuildTimeoutInput() *string
```

- *Type:* *string

---

##### `AppYamlPath`<sup>Required</sup> <a name="AppYamlPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath"></a>

```go
func AppYamlPath() *string
```

- *Type:* *string

---

##### `CloudBuildTimeout`<sup>Required</sup> <a name="CloudBuildTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout"></a>

```go
func CloudBuildTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---


### AppEngineFlexibleAppVersionDeploymentContainerOutputReference <a name="AppEngineFlexibleAppVersionDeploymentContainerOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionDeploymentContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionDeploymentContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---


### AppEngineFlexibleAppVersionDeploymentFilesList <a name="AppEngineFlexibleAppVersionDeploymentFilesList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionDeploymentFilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineFlexibleAppVersionDeploymentFilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get"></a>

```go
func Get(index *f64) AppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionDeploymentFilesOutputReference <a name="AppEngineFlexibleAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionDeploymentFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum">ResetSha1Sum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha1Sum` <a name="ResetSha1Sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```go
func ResetSha1Sum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput">Sha1SumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum">Sha1Sum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Sha1SumInput`<sup>Optional</sup> <a name="Sha1SumInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```go
func Sha1SumInput() *string
```

- *Type:* *string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sha1Sum`<sup>Required</sup> <a name="Sha1Sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```go
func Sha1Sum() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionDeploymentOutputReference <a name="AppEngineFlexibleAppVersionDeploymentOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions">PutCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions">ResetCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudBuildOptions` <a name="PutCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions"></a>

```go
func PutCloudBuildOptions(value AppEngineFlexibleAppVersionDeploymentCloudBuildOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer"></a>

```go
func PutContainer(value AppEngineFlexibleAppVersionDeploymentContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `PutFiles` <a name="PutFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles"></a>

```go
func PutFiles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutZip` <a name="PutZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip"></a>

```go
func PutZip(value AppEngineFlexibleAppVersionDeploymentZip)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `ResetCloudBuildOptions` <a name="ResetCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions"></a>

```go
func ResetCloudBuildOptions()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles"></a>

```go
func ResetFiles()
```

##### `ResetZip` <a name="ResetZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetZip"></a>

```go
func ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions">CloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference">AppEngineFlexibleAppVersionDeploymentContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.files">Files</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList">AppEngineFlexibleAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference">AppEngineFlexibleAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput">CloudBuildOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput">FilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput">ZipInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudBuildOptions`<sup>Required</sup> <a name="CloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions"></a>

```go
func CloudBuildOptions() AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.container"></a>

```go
func Container() AppEngineFlexibleAppVersionDeploymentContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference">AppEngineFlexibleAppVersionDeploymentContainerOutputReference</a>

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.files"></a>

```go
func Files() AppEngineFlexibleAppVersionDeploymentFilesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList">AppEngineFlexibleAppVersionDeploymentFilesList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zip"></a>

```go
func Zip() AppEngineFlexibleAppVersionDeploymentZipOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference">AppEngineFlexibleAppVersionDeploymentZipOutputReference</a>

---

##### `CloudBuildOptionsInput`<sup>Optional</sup> <a name="CloudBuildOptionsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput"></a>

```go
func CloudBuildOptionsInput() AppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput"></a>

```go
func ContainerInput() AppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput"></a>

```go
func FilesInput() interface{}
```

- *Type:* interface{}

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput"></a>

```go
func ZipInput() AppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---


### AppEngineFlexibleAppVersionDeploymentZipOutputReference <a name="AppEngineFlexibleAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionDeploymentZipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionDeploymentZipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount">ResetFilesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilesCount` <a name="ResetFilesCount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```go
func ResetFilesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput">FilesCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount">FilesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilesCountInput`<sup>Optional</sup> <a name="FilesCountInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```go
func FilesCountInput() *f64
```

- *Type:* *f64

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `FilesCount`<sup>Required</sup> <a name="FilesCount" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```go
func FilesCount() *f64
```

- *Type:* *f64

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---


### AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference <a name="AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling">ResetDisableTraceSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy">ResetRolloutStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigId` <a name="ResetConfigId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId"></a>

```go
func ResetConfigId()
```

##### `ResetDisableTraceSampling` <a name="ResetDisableTraceSampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling"></a>

```go
func ResetDisableTraceSampling()
```

##### `ResetRolloutStrategy` <a name="ResetRolloutStrategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy"></a>

```go
func ResetRolloutStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput">DisableTraceSamplingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput">RolloutStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling">DisableTraceSampling</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy">RolloutStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `DisableTraceSamplingInput`<sup>Optional</sup> <a name="DisableTraceSamplingInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput"></a>

```go
func DisableTraceSamplingInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RolloutStrategyInput`<sup>Optional</sup> <a name="RolloutStrategyInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput"></a>

```go
func RolloutStrategyInput() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `DisableTraceSampling`<sup>Required</sup> <a name="DisableTraceSampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling"></a>

```go
func DisableTraceSampling() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RolloutStrategy`<sup>Required</sup> <a name="RolloutStrategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy"></a>

```go
func RolloutStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---


### AppEngineFlexibleAppVersionEntrypointOutputReference <a name="AppEngineFlexibleAppVersionEntrypointOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionEntrypointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionEntrypointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput">ShellInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shell">Shell</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput"></a>

```go
func ShellInput() *string
```

- *Type:* *string

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shell"></a>

```go
func Shell() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---


### AppEngineFlexibleAppVersionHandlersList <a name="AppEngineFlexibleAppVersionHandlersList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionHandlersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineFlexibleAppVersionHandlersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get"></a>

```go
func Get(index *f64) AppEngineFlexibleAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionHandlersOutputReference <a name="AppEngineFlexibleAppVersionHandlersOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionHandlersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineFlexibleAppVersionHandlersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles">PutStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">ResetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles">ResetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript"></a>

```go
func PutScript(value AppEngineFlexibleAppVersionHandlersScript)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---

##### `PutStaticFiles` <a name="PutStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles"></a>

```go
func PutStaticFiles(value AppEngineFlexibleAppVersionHandlersStaticFiles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```go
func ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetRedirectHttpResponseCode` <a name="ResetRedirectHttpResponseCode" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```go
func ResetRedirectHttpResponseCode()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetScript"></a>

```go
func ResetScript()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetStaticFiles` <a name="ResetStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles"></a>

```go
func ResetStaticFiles()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex"></a>

```go
func ResetUrlRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference">AppEngineFlexibleAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">RedirectHttpResponseCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput">ScriptInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput">StaticFilesInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput">UrlRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.script"></a>

```go
func Script() AppEngineFlexibleAppVersionHandlersScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference">AppEngineFlexibleAppVersionHandlersScriptOutputReference</a>

---

##### `StaticFiles`<sup>Required</sup> <a name="StaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles"></a>

```go
func StaticFiles() AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a>

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```go
func AuthFailActionInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `RedirectHttpResponseCodeInput`<sup>Optional</sup> <a name="RedirectHttpResponseCodeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```go
func RedirectHttpResponseCodeInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput"></a>

```go
func ScriptInput() AppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `StaticFilesInput`<sup>Optional</sup> <a name="StaticFilesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```go
func StaticFilesInput() AppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```go
func UrlRegexInput() *string
```

- *Type:* *string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction"></a>

```go
func AuthFailAction() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `RedirectHttpResponseCode`<sup>Required</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```go
func RedirectHttpResponseCode() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex"></a>

```go
func UrlRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionHandlersScriptOutputReference <a name="AppEngineFlexibleAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionHandlersScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionHandlersScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath">ScriptPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```go
func ScriptPathInput() *string
```

- *Type:* *string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```go
func ScriptPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---


### AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference <a name="AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">ResetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">ResetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">ResetUploadPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationReadable` <a name="ResetApplicationReadable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```go
func ResetApplicationReadable()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```go
func ResetMimeType()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRequireMatchingFile` <a name="ResetRequireMatchingFile" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```go
func ResetRequireMatchingFile()
```

##### `ResetUploadPathRegex` <a name="ResetUploadPathRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```go
func ResetUploadPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">ApplicationReadableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">RequireMatchingFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">UploadPathRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">ApplicationReadable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">UploadPathRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationReadableInput`<sup>Optional</sup> <a name="ApplicationReadableInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```go
func ApplicationReadableInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() *string
```

- *Type:* *string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RequireMatchingFileInput`<sup>Optional</sup> <a name="RequireMatchingFileInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```go
func RequireMatchingFileInput() interface{}
```

- *Type:* interface{}

---

##### `UploadPathRegexInput`<sup>Optional</sup> <a name="UploadPathRegexInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```go
func UploadPathRegexInput() *string
```

- *Type:* *string

---

##### `ApplicationReadable`<sup>Required</sup> <a name="ApplicationReadable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```go
func ApplicationReadable() interface{}
```

- *Type:* interface{}

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequireMatchingFile`<sup>Required</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```go
func RequireMatchingFile() interface{}
```

- *Type:* interface{}

---

##### `UploadPathRegex`<sup>Required</sup> <a name="UploadPathRegex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```go
func UploadPathRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---


### AppEngineFlexibleAppVersionLivenessCheckOutputReference <a name="AppEngineFlexibleAppVersionLivenessCheckOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionLivenessCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionLivenessCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval"></a>

```go
func ResetCheckInterval()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay"></a>

```go
func ResetInitialDelay()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay">InitialDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput"></a>

```go
func CheckIntervalInput() *string
```

- *Type:* *string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput"></a>

```go
func InitialDelayInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval"></a>

```go
func CheckInterval() *string
```

- *Type:* *string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay"></a>

```go
func InitialDelay() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---


### AppEngineFlexibleAppVersionManualScalingOutputReference <a name="AppEngineFlexibleAppVersionManualScalingOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionManualScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionManualScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instances">Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *f64
```

- *Type:* *f64

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instances"></a>

```go
func Instances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---


### AppEngineFlexibleAppVersionNetworkOutputReference <a name="AppEngineFlexibleAppVersionNetworkOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts">ResetForwardedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag">ResetInstanceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardedPorts` <a name="ResetForwardedPorts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts"></a>

```go
func ResetForwardedPorts()
```

##### `ResetInstanceTag` <a name="ResetInstanceTag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag"></a>

```go
func ResetInstanceTag()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput">ForwardedPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput">InstanceTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts">ForwardedPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag">InstanceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardedPortsInput`<sup>Optional</sup> <a name="ForwardedPortsInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput"></a>

```go
func ForwardedPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceTagInput`<sup>Optional</sup> <a name="InstanceTagInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput"></a>

```go
func InstanceTagInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `ForwardedPorts`<sup>Required</sup> <a name="ForwardedPorts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts"></a>

```go
func ForwardedPorts() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceTag`<sup>Required</sup> <a name="InstanceTag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag"></a>

```go
func InstanceTag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity"></a>

```go
func SessionAffinity() interface{}
```

- *Type:* interface{}

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---


### AppEngineFlexibleAppVersionReadinessCheckOutputReference <a name="AppEngineFlexibleAppVersionReadinessCheckOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionReadinessCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionReadinessCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout">ResetAppStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppStartTimeout` <a name="ResetAppStartTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout"></a>

```go
func ResetAppStartTimeout()
```

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval"></a>

```go
func ResetCheckInterval()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput">AppStartTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout">AppStartTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppStartTimeoutInput`<sup>Optional</sup> <a name="AppStartTimeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput"></a>

```go
func AppStartTimeoutInput() *string
```

- *Type:* *string

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput"></a>

```go
func CheckIntervalInput() *string
```

- *Type:* *string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `AppStartTimeout`<sup>Required</sup> <a name="AppStartTimeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout"></a>

```go
func AppStartTimeout() *string
```

- *Type:* *string

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval"></a>

```go
func CheckInterval() *string
```

- *Type:* *string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---


### AppEngineFlexibleAppVersionResourcesOutputReference <a name="AppEngineFlexibleAppVersionResourcesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb">ResetDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetDiskGb` <a name="ResetDiskGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb"></a>

```go
func ResetDiskGb()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb"></a>

```go
func ResetMemoryGb()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList">AppEngineFlexibleAppVersionResourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput">DiskGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb">DiskGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumes"></a>

```go
func Volumes() AppEngineFlexibleAppVersionResourcesVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList">AppEngineFlexibleAppVersionResourcesVolumesList</a>

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `DiskGbInput`<sup>Optional</sup> <a name="DiskGbInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput"></a>

```go
func DiskGbInput() *f64
```

- *Type:* *f64

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput"></a>

```go
func MemoryGbInput() *f64
```

- *Type:* *f64

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `DiskGb`<sup>Required</sup> <a name="DiskGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb"></a>

```go
func DiskGb() *f64
```

- *Type:* *f64

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---


### AppEngineFlexibleAppVersionResourcesVolumesList <a name="AppEngineFlexibleAppVersionResourcesVolumesList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionResourcesVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineFlexibleAppVersionResourcesVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get"></a>

```go
func Get(index *f64) AppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionResourcesVolumesOutputReference <a name="AppEngineFlexibleAppVersionResourcesVolumesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionResourcesVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput"></a>

```go
func SizeGbInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionTimeoutsOutputReference <a name="AppEngineFlexibleAppVersionTimeoutsOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference <a name="AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appengineflexibleappversion"

appengineflexibleappversion.NewAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---



