# `appEngineStandardAppVersion` Submodule <a name="`appEngineStandardAppVersion` Submodule" id="@cdktf/provider-google.appEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineStandardAppVersion <a name="AppEngineStandardAppVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersion(scope Construct, id *string, config AppEngineStandardAppVersionConfig) AppEngineStandardAppVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig">AppEngineStandardAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig">AppEngineStandardAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling">PutAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling">PutBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint">PutEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers">PutHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries">PutLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling">PutManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector">PutVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis">ResetAppEngineApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling">ResetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling">ResetBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy">ResetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers">ResetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices">ResetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries">ResetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling">ResetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy">ResetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion">ResetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe">ResetThreadsafe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector">ResetVpcAccessConnector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutomaticScaling` <a name="PutAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling"></a>

```go
func PutAutomaticScaling(value AppEngineStandardAppVersionAutomaticScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `PutBasicScaling` <a name="PutBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling"></a>

```go
func PutBasicScaling(value AppEngineStandardAppVersionBasicScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment"></a>

```go
func PutDeployment(value AppEngineStandardAppVersionDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `PutEntrypoint` <a name="PutEntrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint"></a>

```go
func PutEntrypoint(value AppEngineStandardAppVersionEntrypoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `PutHandlers` <a name="PutHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers"></a>

```go
func PutHandlers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLibraries` <a name="PutLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries"></a>

```go
func PutLibraries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManualScaling` <a name="PutManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling"></a>

```go
func PutManualScaling(value AppEngineStandardAppVersionManualScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts"></a>

```go
func PutTimeouts(value AppEngineStandardAppVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

---

##### `PutVpcAccessConnector` <a name="PutVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector"></a>

```go
func PutVpcAccessConnector(value AppEngineStandardAppVersionVpcAccessConnector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `ResetAppEngineApis` <a name="ResetAppEngineApis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis"></a>

```go
func ResetAppEngineApis()
```

##### `ResetAutomaticScaling` <a name="ResetAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling"></a>

```go
func ResetAutomaticScaling()
```

##### `ResetBasicScaling` <a name="ResetBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling"></a>

```go
func ResetBasicScaling()
```

##### `ResetDeleteServiceOnDestroy` <a name="ResetDeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```go
func ResetDeleteServiceOnDestroy()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables"></a>

```go
func ResetEnvVariables()
```

##### `ResetHandlers` <a name="ResetHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers"></a>

```go
func ResetHandlers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetInboundServices` <a name="ResetInboundServices" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices"></a>

```go
func ResetInboundServices()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass"></a>

```go
func ResetInstanceClass()
```

##### `ResetLibraries` <a name="ResetLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries"></a>

```go
func ResetLibraries()
```

##### `ResetManualScaling` <a name="ResetManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling"></a>

```go
func ResetManualScaling()
```

##### `ResetNoopOnDestroy` <a name="ResetNoopOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```go
func ResetNoopOnDestroy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRuntimeApiVersion` <a name="ResetRuntimeApiVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```go
func ResetRuntimeApiVersion()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetThreadsafe` <a name="ResetThreadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe"></a>

```go
func ResetThreadsafe()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId"></a>

```go
func ResetVersionId()
```

##### `ResetVpcAccessConnector` <a name="ResetVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```go
func ResetVpcAccessConnector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.AppEngineStandardAppVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.AppEngineStandardAppVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.AppEngineStandardAppVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling">BasicScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers">Handlers</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries">Libraries</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput">AppEngineApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput">AutomaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput">BasicScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">DeleteServiceOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput">EntrypointInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput">EnvVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput">HandlersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput">InboundServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput">InstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput">LibrariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput">ManualScalingInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput">NoopOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput">RuntimeApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput">ThreadsafeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput">VpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis">AppEngineApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices">InboundServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe">Threadsafe</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomaticScaling`<sup>Required</sup> <a name="AutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling"></a>

```go
func AutomaticScaling() AppEngineStandardAppVersionAutomaticScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `BasicScaling`<sup>Required</sup> <a name="BasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling"></a>

```go
func BasicScaling() AppEngineStandardAppVersionBasicScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment"></a>

```go
func Deployment() AppEngineStandardAppVersionDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint"></a>

```go
func Entrypoint() AppEngineStandardAppVersionEntrypointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers"></a>

```go
func Handlers() AppEngineStandardAppVersionHandlersList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a>

---

##### `Libraries`<sup>Required</sup> <a name="Libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries"></a>

```go
func Libraries() AppEngineStandardAppVersionLibrariesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a>

---

##### `ManualScaling`<sup>Required</sup> <a name="ManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling"></a>

```go
func ManualScaling() AppEngineStandardAppVersionManualScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts"></a>

```go
func Timeouts() AppEngineStandardAppVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `VpcAccessConnector`<sup>Required</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```go
func VpcAccessConnector() AppEngineStandardAppVersionVpcAccessConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `AppEngineApisInput`<sup>Optional</sup> <a name="AppEngineApisInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput"></a>

```go
func AppEngineApisInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticScalingInput`<sup>Optional</sup> <a name="AutomaticScalingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput"></a>

```go
func AutomaticScalingInput() AppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `BasicScalingInput`<sup>Optional</sup> <a name="BasicScalingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput"></a>

```go
func BasicScalingInput() AppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `DeleteServiceOnDestroyInput`<sup>Optional</sup> <a name="DeleteServiceOnDestroyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```go
func DeleteServiceOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput"></a>

```go
func DeploymentInput() AppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput"></a>

```go
func EntrypointInput() AppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput"></a>

```go
func EnvVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HandlersInput`<sup>Optional</sup> <a name="HandlersInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput"></a>

```go
func HandlersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InboundServicesInput`<sup>Optional</sup> <a name="InboundServicesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput"></a>

```go
func InboundServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput"></a>

```go
func InstanceClassInput() *string
```

- *Type:* *string

---

##### `LibrariesInput`<sup>Optional</sup> <a name="LibrariesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput"></a>

```go
func LibrariesInput() interface{}
```

- *Type:* interface{}

---

##### `ManualScalingInput`<sup>Optional</sup> <a name="ManualScalingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput"></a>

```go
func ManualScalingInput() AppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `NoopOnDestroyInput`<sup>Optional</sup> <a name="NoopOnDestroyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```go
func NoopOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuntimeApiVersionInput`<sup>Optional</sup> <a name="RuntimeApiVersionInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```go
func RuntimeApiVersionInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ThreadsafeInput`<sup>Optional</sup> <a name="ThreadsafeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput"></a>

```go
func ThreadsafeInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `VpcAccessConnectorInput`<sup>Optional</sup> <a name="VpcAccessConnectorInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```go
func VpcAccessConnectorInput() AppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `AppEngineApis`<sup>Required</sup> <a name="AppEngineApis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis"></a>

```go
func AppEngineApis() interface{}
```

- *Type:* interface{}

---

##### `DeleteServiceOnDestroy`<sup>Required</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```go
func DeleteServiceOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables"></a>

```go
func EnvVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InboundServices`<sup>Required</sup> <a name="InboundServices" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices"></a>

```go
func InboundServices() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass"></a>

```go
func InstanceClass() *string
```

- *Type:* *string

---

##### `NoopOnDestroy`<sup>Required</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy"></a>

```go
func NoopOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `RuntimeApiVersion`<sup>Required</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```go
func RuntimeApiVersion() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Threadsafe`<sup>Required</sup> <a name="Threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe"></a>

```go
func Threadsafe() interface{}
```

- *Type:* interface{}

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineStandardAppVersionAutomaticScaling <a name="AppEngineStandardAppVersionAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionAutomaticScaling {
	MaxConcurrentRequests: *f64,
	MaxIdleInstances: *f64,
	MaxPendingLatency: *string,
	MinIdleInstances: *f64,
	MinPendingLatency: *string,
	StandardSchedulerSettings: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>*f64</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>*f64</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>*string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">MinPendingLatency</a></code> | <code>*string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">StandardSchedulerSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```go
MaxConcurrentRequests *f64
```

- *Type:* *f64

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#max_concurrent_requests AppEngineStandardAppVersion#max_concurrent_requests}

---

##### `MaxIdleInstances`<sup>Optional</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```go
MaxIdleInstances *f64
```

- *Type:* *f64

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#max_idle_instances AppEngineStandardAppVersion#max_idle_instances}

---

##### `MaxPendingLatency`<sup>Optional</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```go
MaxPendingLatency *string
```

- *Type:* *string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#max_pending_latency AppEngineStandardAppVersion#max_pending_latency}

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```go
MinIdleInstances *f64
```

- *Type:* *f64

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#min_idle_instances AppEngineStandardAppVersion#min_idle_instances}

---

##### `MinPendingLatency`<sup>Optional</sup> <a name="MinPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```go
MinPendingLatency *string
```

- *Type:* *string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#min_pending_latency AppEngineStandardAppVersion#min_pending_latency}

---

##### `StandardSchedulerSettings`<sup>Optional</sup> <a name="StandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```go
StandardSchedulerSettings AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#standard_scheduler_settings AppEngineStandardAppVersion#standard_scheduler_settings}

---

### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings {
	MaxInstances: *f64,
	MinInstances: *f64,
	TargetCpuUtilization: *f64,
	TargetThroughputUtilization: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>*f64</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">TargetThroughputUtilization</a></code> | <code>*f64</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#min_instances AppEngineStandardAppVersion#min_instances}

---

##### `TargetCpuUtilization`<sup>Optional</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```go
TargetCpuUtilization *f64
```

- *Type:* *f64

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#target_cpu_utilization AppEngineStandardAppVersion#target_cpu_utilization}

---

##### `TargetThroughputUtilization`<sup>Optional</sup> <a name="TargetThroughputUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```go
TargetThroughputUtilization *f64
```

- *Type:* *f64

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#target_throughput_utilization AppEngineStandardAppVersion#target_throughput_utilization}

---

### AppEngineStandardAppVersionBasicScaling <a name="AppEngineStandardAppVersionBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionBasicScaling {
	MaxInstances: *f64,
	IdleTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```go
IdleTimeout *string
```

- *Type:* *string

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#idle_timeout AppEngineStandardAppVersion#idle_timeout}

---

### AppEngineStandardAppVersionConfig <a name="AppEngineStandardAppVersionConfig" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Deployment: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment,
	Entrypoint: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint,
	Runtime: *string,
	Service: *string,
	AppEngineApis: interface{},
	AutomaticScaling: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling,
	BasicScaling: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling,
	DeleteServiceOnDestroy: interface{},
	EnvVariables: *map[string]*string,
	Handlers: interface{},
	Id: *string,
	InboundServices: *[]*string,
	InstanceClass: *string,
	Libraries: interface{},
	ManualScaling: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling,
	NoopOnDestroy: interface{},
	Project: *string,
	RuntimeApiVersion: *string,
	ServiceAccount: *string,
	Threadsafe: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts,
	VersionId: *string,
	VpcAccessConnector: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime">Runtime</a></code> | <code>*string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service">Service</a></code> | <code>*string</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis">AppEngineApis</a></code> | <code>interface{}</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling">BasicScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables">EnvVariables</a></code> | <code>*map[string]*string</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers">Handlers</a></code> | <code>interface{}</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices">InboundServices</a></code> | <code>*[]*string</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries">Libraries</a></code> | <code>interface{}</code> | libraries block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>interface{}</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>*string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe">Threadsafe</a></code> | <code>interface{}</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment"></a>

```go
Deployment AppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#deployment AppEngineStandardAppVersion#deployment}

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint"></a>

```go
Entrypoint AppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#entrypoint AppEngineStandardAppVersion#entrypoint}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#runtime AppEngineStandardAppVersion#runtime}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

AppEngine service resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#service AppEngineStandardAppVersion#service}

---

##### `AppEngineApis`<sup>Optional</sup> <a name="AppEngineApis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```go
AppEngineApis interface{}
```

- *Type:* interface{}

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#app_engine_apis AppEngineStandardAppVersion#app_engine_apis}

---

##### `AutomaticScaling`<sup>Optional</sup> <a name="AutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```go
AutomaticScaling AppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#automatic_scaling AppEngineStandardAppVersion#automatic_scaling}

---

##### `BasicScaling`<sup>Optional</sup> <a name="BasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling"></a>

```go
BasicScaling AppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#basic_scaling AppEngineStandardAppVersion#basic_scaling}

---

##### `DeleteServiceOnDestroy`<sup>Optional</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```go
DeleteServiceOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#delete_service_on_destroy AppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables"></a>

```go
EnvVariables *map[string]*string
```

- *Type:* *map[string]*string

Environment variables available to the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#env_variables AppEngineStandardAppVersion#env_variables}

---

##### `Handlers`<sup>Optional</sup> <a name="Handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers"></a>

```go
Handlers interface{}
```

- *Type:* interface{}

handlers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#handlers AppEngineStandardAppVersion#handlers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundServices`<sup>Optional</sup> <a name="InboundServices" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices"></a>

```go
InboundServices *[]*string
```

- *Type:* *[]*string

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#inbound_services AppEngineStandardAppVersion#inbound_services}

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass"></a>

```go
InstanceClass *string
```

- *Type:* *string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#instance_class AppEngineStandardAppVersion#instance_class}

---

##### `Libraries`<sup>Optional</sup> <a name="Libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries"></a>

```go
Libraries interface{}
```

- *Type:* interface{}

libraries block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#libraries AppEngineStandardAppVersion#libraries}

---

##### `ManualScaling`<sup>Optional</sup> <a name="ManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling"></a>

```go
ManualScaling AppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#manual_scaling AppEngineStandardAppVersion#manual_scaling}

---

##### `NoopOnDestroy`<sup>Optional</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```go
NoopOnDestroy interface{}
```

- *Type:* interface{}

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#noop_on_destroy AppEngineStandardAppVersion#noop_on_destroy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}.

---

##### `RuntimeApiVersion`<sup>Optional</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```go
RuntimeApiVersion *string
```

- *Type:* *string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#runtime_api_version AppEngineStandardAppVersion#runtime_api_version}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#service_account AppEngineStandardAppVersion#service_account}

---

##### `Threadsafe`<sup>Optional</sup> <a name="Threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe"></a>

```go
Threadsafe interface{}
```

- *Type:* interface{}

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#threadsafe AppEngineStandardAppVersion#threadsafe}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts"></a>

```go
Timeouts AppEngineStandardAppVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#timeouts AppEngineStandardAppVersion#timeouts}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#version_id AppEngineStandardAppVersion#version_id}

---

##### `VpcAccessConnector`<sup>Optional</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```go
VpcAccessConnector AppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#vpc_access_connector AppEngineStandardAppVersion#vpc_access_connector}

---

### AppEngineStandardAppVersionDeployment <a name="AppEngineStandardAppVersionDeployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionDeployment {
	Files: interface{},
	Zip: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files">Files</a></code> | <code>interface{}</code> | files block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files"></a>

```go
Files interface{}
```

- *Type:* interface{}

files block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#files AppEngineStandardAppVersion#files}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip"></a>

```go
Zip AppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#zip AppEngineStandardAppVersion#zip}

---

### AppEngineStandardAppVersionDeploymentFiles <a name="AppEngineStandardAppVersionDeploymentFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionDeploymentFiles {
	Name: *string,
	SourceUrl: *string,
	Sha1Sum: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">Sha1Sum</a></code> | <code>*string</code> | SHA1 checksum of the file. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}.

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Source URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `Sha1Sum`<sup>Optional</sup> <a name="Sha1Sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```go
Sha1Sum *string
```

- *Type:* *string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#sha1_sum AppEngineStandardAppVersion#sha1_sum}

---

### AppEngineStandardAppVersionDeploymentZip <a name="AppEngineStandardAppVersionDeploymentZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionDeploymentZip {
	SourceUrl: *string,
	FilesCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount">FilesCount</a></code> | <code>*f64</code> | files count. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Source URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `FilesCount`<sup>Optional</sup> <a name="FilesCount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```go
FilesCount *f64
```

- *Type:* *f64

files count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#files_count AppEngineStandardAppVersion#files_count}

---

### AppEngineStandardAppVersionEntrypoint <a name="AppEngineStandardAppVersionEntrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionEntrypoint {
	Shell: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell">Shell</a></code> | <code>*string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell"></a>

```go
Shell *string
```

- *Type:* *string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#shell AppEngineStandardAppVersion#shell}

---

### AppEngineStandardAppVersionHandlers <a name="AppEngineStandardAppVersionHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionHandlers {
	AuthFailAction: *string,
	Login: *string,
	RedirectHttpResponseCode: *string,
	Script: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript,
	SecurityLevel: *string,
	StaticFiles: github.com/cdktf/cdktf-provider-google-go/google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles,
	UrlRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login">Login</a></code> | <code>*string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>*string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | URL prefix. |

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```go
AuthFailAction *string
```

- *Type:* *string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#auth_fail_action AppEngineStandardAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login"></a>

```go
Login *string
```

- *Type:* *string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#login AppEngineStandardAppVersion#login}

---

##### `RedirectHttpResponseCode`<sup>Optional</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```go
RedirectHttpResponseCode *string
```

- *Type:* *string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#redirect_http_response_code AppEngineStandardAppVersion#redirect_http_response_code}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script"></a>

```go
Script AppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#script AppEngineStandardAppVersion#script}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#security_level AppEngineStandardAppVersion#security_level}

---

##### `StaticFiles`<sup>Optional</sup> <a name="StaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```go
StaticFiles AppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#static_files AppEngineStandardAppVersion#static_files}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```go
UrlRegex *string
```

- *Type:* *string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#url_regex AppEngineStandardAppVersion#url_regex}

---

### AppEngineStandardAppVersionHandlersScript <a name="AppEngineStandardAppVersionHandlersScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionHandlersScript {
	ScriptPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath">ScriptPath</a></code> | <code>*string</code> | Path to the script from the application root directory. |

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```go
ScriptPath *string
```

- *Type:* *string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#script_path AppEngineStandardAppVersion#script_path}

---

### AppEngineStandardAppVersionHandlersStaticFiles <a name="AppEngineStandardAppVersionHandlersStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionHandlersStaticFiles {
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
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">ApplicationReadable</a></code> | <code>interface{}</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration">Expiration</a></code> | <code>*string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">HttpHeaders</a></code> | <code>*map[string]*string</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">MimeType</a></code> | <code>*string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path">Path</a></code> | <code>*string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>interface{}</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">UploadPathRegex</a></code> | <code>*string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `ApplicationReadable`<sup>Optional</sup> <a name="ApplicationReadable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```go
ApplicationReadable interface{}
```

- *Type:* interface{}

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#application_readable AppEngineStandardAppVersion#application_readable}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```go
Expiration *string
```

- *Type:* *string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#expiration AppEngineStandardAppVersion#expiration}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```go
HttpHeaders *map[string]*string
```

- *Type:* *map[string]*string

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#http_headers AppEngineStandardAppVersion#http_headers}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#mime_type AppEngineStandardAppVersion#mime_type}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#path AppEngineStandardAppVersion#path}

---

##### `RequireMatchingFile`<sup>Optional</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```go
RequireMatchingFile interface{}
```

- *Type:* interface{}

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#require_matching_file AppEngineStandardAppVersion#require_matching_file}

---

##### `UploadPathRegex`<sup>Optional</sup> <a name="UploadPathRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```go
UploadPathRegex *string
```

- *Type:* *string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#upload_path_regex AppEngineStandardAppVersion#upload_path_regex}

---

### AppEngineStandardAppVersionLibraries <a name="AppEngineStandardAppVersionLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionLibraries {
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name">Name</a></code> | <code>*string</code> | Name of the library. Example "django". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version">Version</a></code> | <code>*string</code> | Version of the library to select, or "latest". |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#version AppEngineStandardAppVersion#version}

---

### AppEngineStandardAppVersionManualScaling <a name="AppEngineStandardAppVersionManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionManualScaling {
	Instances: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances">Instances</a></code> | <code>*f64</code> | Number of instances to assign to the service at the start. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances"></a>

```go
Instances *f64
```

- *Type:* *f64

Number of instances to assign to the service at the start.

*Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#instances AppEngineStandardAppVersion#instances}

---

### AppEngineStandardAppVersionTimeouts <a name="AppEngineStandardAppVersionTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}.

---

### AppEngineStandardAppVersionVpcAccessConnector <a name="AppEngineStandardAppVersionVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

&appenginestandardappversion.AppEngineStandardAppVersionVpcAccessConnector {
	Name: *string,
	EgressSetting: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name">Name</a></code> | <code>*string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">EgressSetting</a></code> | <code>*string</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```go
Name *string
```

- *Type:* *string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `EgressSetting`<sup>Optional</sup> <a name="EgressSetting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```go
EgressSetting *string
```

- *Type:* *string

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version#egress_setting AppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineStandardAppVersionAutomaticScalingOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionAutomaticScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionAutomaticScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">PutStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">ResetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">ResetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">ResetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">ResetStandardSchedulerSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSchedulerSettings` <a name="PutStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```go
func PutStandardSchedulerSettings(value AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```go
func ResetMaxConcurrentRequests()
```

##### `ResetMaxIdleInstances` <a name="ResetMaxIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```go
func ResetMaxIdleInstances()
```

##### `ResetMaxPendingLatency` <a name="ResetMaxPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```go
func ResetMaxPendingLatency()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```go
func ResetMinIdleInstances()
```

##### `ResetMinPendingLatency` <a name="ResetMinPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```go
func ResetMinPendingLatency()
```

##### `ResetStandardSchedulerSettings` <a name="ResetStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```go
func ResetStandardSchedulerSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">StandardSchedulerSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">MaxIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">MaxPendingLatencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">MinPendingLatencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">StandardSchedulerSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">MinPendingLatency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StandardSchedulerSettings`<sup>Required</sup> <a name="StandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```go
func StandardSchedulerSettings() AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```go
func MaxConcurrentRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxIdleInstancesInput`<sup>Optional</sup> <a name="MaxIdleInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```go
func MaxIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingLatencyInput`<sup>Optional</sup> <a name="MaxPendingLatencyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```go
func MaxPendingLatencyInput() *string
```

- *Type:* *string

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```go
func MinIdleInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinPendingLatencyInput`<sup>Optional</sup> <a name="MinPendingLatencyInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```go
func MinPendingLatencyInput() *string
```

- *Type:* *string

---

##### `StandardSchedulerSettingsInput`<sup>Optional</sup> <a name="StandardSchedulerSettingsInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```go
func StandardSchedulerSettingsInput() AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```go
func MaxConcurrentRequests() *f64
```

- *Type:* *f64

---

##### `MaxIdleInstances`<sup>Required</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```go
func MaxIdleInstances() *f64
```

- *Type:* *f64

---

##### `MaxPendingLatency`<sup>Required</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```go
func MaxPendingLatency() *string
```

- *Type:* *string

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```go
func MinIdleInstances() *f64
```

- *Type:* *f64

---

##### `MinPendingLatency`<sup>Required</sup> <a name="MinPendingLatency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```go
func MinPendingLatency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---


### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">ResetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">ResetTargetThroughputUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetTargetCpuUtilization` <a name="ResetTargetCpuUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```go
func ResetTargetCpuUtilization()
```

##### `ResetTargetThroughputUtilization` <a name="ResetTargetThroughputUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```go
func ResetTargetThroughputUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">TargetCpuUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">TargetThroughputUtilizationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">TargetThroughputUtilization</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilizationInput`<sup>Optional</sup> <a name="TargetCpuUtilizationInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```go
func TargetCpuUtilizationInput() *f64
```

- *Type:* *f64

---

##### `TargetThroughputUtilizationInput`<sup>Optional</sup> <a name="TargetThroughputUtilizationInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```go
func TargetThroughputUtilizationInput() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilization`<sup>Required</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```go
func TargetCpuUtilization() *f64
```

- *Type:* *f64

---

##### `TargetThroughputUtilization`<sup>Required</sup> <a name="TargetThroughputUtilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```go
func TargetThroughputUtilization() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### AppEngineStandardAppVersionBasicScalingOutputReference <a name="AppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionBasicScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionBasicScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```go
func ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```go
func IdleTimeout() *string
```

- *Type:* *string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---


### AppEngineStandardAppVersionDeploymentFilesList <a name="AppEngineStandardAppVersionDeploymentFilesList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionDeploymentFilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineStandardAppVersionDeploymentFilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get"></a>

```go
func Get(index *f64) AppEngineStandardAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionDeploymentFilesOutputReference <a name="AppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionDeploymentFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineStandardAppVersionDeploymentFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">ResetSha1Sum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha1Sum` <a name="ResetSha1Sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```go
func ResetSha1Sum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">Sha1SumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">Sha1Sum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Sha1SumInput`<sup>Optional</sup> <a name="Sha1SumInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```go
func Sha1SumInput() *string
```

- *Type:* *string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Sha1Sum`<sup>Required</sup> <a name="Sha1Sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```go
func Sha1Sum() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionDeploymentOutputReference <a name="AppEngineStandardAppVersionDeploymentOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiles` <a name="PutFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```go
func PutFiles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutZip` <a name="PutZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```go
func PutZip(value AppEngineStandardAppVersionDeploymentZip)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```go
func ResetFiles()
```

##### `ResetZip` <a name="ResetZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```go
func ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files">Files</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">FilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">ZipInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```go
func Files() AppEngineStandardAppVersionDeploymentFilesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```go
func Zip() AppEngineStandardAppVersionDeploymentZipOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```go
func FilesInput() interface{}
```

- *Type:* interface{}

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```go
func ZipInput() AppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---


### AppEngineStandardAppVersionDeploymentZipOutputReference <a name="AppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionDeploymentZipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionDeploymentZipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">ResetFilesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilesCount` <a name="ResetFilesCount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```go
func ResetFilesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">FilesCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">FilesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilesCountInput`<sup>Optional</sup> <a name="FilesCountInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```go
func FilesCountInput() *f64
```

- *Type:* *f64

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `FilesCount`<sup>Required</sup> <a name="FilesCount" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```go
func FilesCount() *f64
```

- *Type:* *f64

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---


### AppEngineStandardAppVersionEntrypointOutputReference <a name="AppEngineStandardAppVersionEntrypointOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionEntrypointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionEntrypointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">ShellInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell">Shell</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```go
func ShellInput() *string
```

- *Type:* *string

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```go
func Shell() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---


### AppEngineStandardAppVersionHandlersList <a name="AppEngineStandardAppVersionHandlersList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionHandlersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineStandardAppVersionHandlersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get"></a>

```go
func Get(index *f64) AppEngineStandardAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionHandlersOutputReference <a name="AppEngineStandardAppVersionHandlersOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionHandlersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineStandardAppVersionHandlersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">PutStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">ResetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">ResetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```go
func PutScript(value AppEngineStandardAppVersionHandlersScript)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `PutStaticFiles` <a name="PutStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```go
func PutStaticFiles(value AppEngineStandardAppVersionHandlersStaticFiles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```go
func ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetRedirectHttpResponseCode` <a name="ResetRedirectHttpResponseCode" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```go
func ResetRedirectHttpResponseCode()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```go
func ResetScript()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```go
func ResetSecurityLevel()
```

##### `ResetStaticFiles` <a name="ResetStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```go
func ResetStaticFiles()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```go
func ResetUrlRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput">LoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">RedirectHttpResponseCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">ScriptInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">StaticFilesInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">UrlRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">UrlRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```go
func Script() AppEngineStandardAppVersionHandlersScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `StaticFiles`<sup>Required</sup> <a name="StaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```go
func StaticFiles() AppEngineStandardAppVersionHandlersStaticFilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```go
func AuthFailActionInput() *string
```

- *Type:* *string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```go
func LoginInput() *string
```

- *Type:* *string

---

##### `RedirectHttpResponseCodeInput`<sup>Optional</sup> <a name="RedirectHttpResponseCodeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```go
func RedirectHttpResponseCodeInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```go
func ScriptInput() AppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `StaticFilesInput`<sup>Optional</sup> <a name="StaticFilesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```go
func StaticFilesInput() AppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```go
func UrlRegexInput() *string
```

- *Type:* *string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```go
func AuthFailAction() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `RedirectHttpResponseCode`<sup>Required</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```go
func RedirectHttpResponseCode() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```go
func UrlRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionHandlersScriptOutputReference <a name="AppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionHandlersScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionHandlersScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">ScriptPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```go
func ScriptPathInput() *string
```

- *Type:* *string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```go
func ScriptPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---


### AppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="AppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionHandlersStaticFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionHandlersStaticFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">ResetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">ResetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">ResetUploadPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationReadable` <a name="ResetApplicationReadable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```go
func ResetApplicationReadable()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```go
func ResetMimeType()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRequireMatchingFile` <a name="ResetRequireMatchingFile" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```go
func ResetRequireMatchingFile()
```

##### `ResetUploadPathRegex` <a name="ResetUploadPathRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```go
func ResetUploadPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">ApplicationReadableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">RequireMatchingFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">UploadPathRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">ApplicationReadable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">UploadPathRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationReadableInput`<sup>Optional</sup> <a name="ApplicationReadableInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```go
func ApplicationReadableInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() *string
```

- *Type:* *string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RequireMatchingFileInput`<sup>Optional</sup> <a name="RequireMatchingFileInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```go
func RequireMatchingFileInput() interface{}
```

- *Type:* interface{}

---

##### `UploadPathRegexInput`<sup>Optional</sup> <a name="UploadPathRegexInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```go
func UploadPathRegexInput() *string
```

- *Type:* *string

---

##### `ApplicationReadable`<sup>Required</sup> <a name="ApplicationReadable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```go
func ApplicationReadable() interface{}
```

- *Type:* interface{}

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `RequireMatchingFile`<sup>Required</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```go
func RequireMatchingFile() interface{}
```

- *Type:* interface{}

---

##### `UploadPathRegex`<sup>Required</sup> <a name="UploadPathRegex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```go
func UploadPathRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---


### AppEngineStandardAppVersionLibrariesList <a name="AppEngineStandardAppVersionLibrariesList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionLibrariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppEngineStandardAppVersionLibrariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get"></a>

```go
func Get(index *f64) AppEngineStandardAppVersionLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionLibrariesOutputReference <a name="AppEngineStandardAppVersionLibrariesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionLibrariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppEngineStandardAppVersionLibrariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionManualScalingOutputReference <a name="AppEngineStandardAppVersionManualScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionManualScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionManualScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances">Instances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *f64
```

- *Type:* *f64

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```go
func Instances() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---


### AppEngineStandardAppVersionTimeoutsOutputReference <a name="AppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="AppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/appenginestandardappversion"

appenginestandardappversion.NewAppEngineStandardAppVersionVpcAccessConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppEngineStandardAppVersionVpcAccessConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">ResetEgressSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressSetting` <a name="ResetEgressSetting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```go
func ResetEgressSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">EgressSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">EgressSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressSettingInput`<sup>Optional</sup> <a name="EgressSettingInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```go
func EgressSettingInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EgressSetting`<sup>Required</sup> <a name="EgressSetting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```go
func EgressSetting() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() AppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---



