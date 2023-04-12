# `cloudfunctionsFunction` Submodule <a name="`cloudfunctionsFunction` Submodule" id="@cdktf/provider-google.cloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfunctionsFunction <a name="CloudfunctionsFunction" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunction(scope Construct, id *string, config CloudfunctionsFunctionConfig) CloudfunctionsFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig">CloudfunctionsFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig">CloudfunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putEventTrigger">PutEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretEnvironmentVariables">PutSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretVolumes">PutSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSourceRepository">PutSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetAvailableMemoryMb">ResetAvailableMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildEnvironmentVariables">ResetBuildEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildWorkerPool">ResetBuildWorkerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRegistry">ResetDockerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRepository">ResetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEventTrigger">ResetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerSecurityLevel">ResetHttpsTriggerSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerUrl">ResetHttpsTriggerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetIngressSettings">ResetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretEnvironmentVariables">ResetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretVolumes">ResetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveBucket">ResetSourceArchiveBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveObject">ResetSourceArchiveObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceRepository">ResetSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTriggerHttp">ResetTriggerHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnector">ResetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnectorEgressSettings">ResetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEventTrigger` <a name="PutEventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putEventTrigger"></a>

```go
func PutEventTrigger(value CloudfunctionsFunctionEventTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

---

##### `PutSecretEnvironmentVariables` <a name="PutSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretEnvironmentVariables"></a>

```go
func PutSecretEnvironmentVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecretVolumes` <a name="PutSecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretVolumes"></a>

```go
func PutSecretVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSecretVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceRepository` <a name="PutSourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSourceRepository"></a>

```go
func PutSourceRepository(value CloudfunctionsFunctionSourceRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putSourceRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putTimeouts"></a>

```go
func PutTimeouts(value CloudfunctionsFunctionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

---

##### `ResetAvailableMemoryMb` <a name="ResetAvailableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetAvailableMemoryMb"></a>

```go
func ResetAvailableMemoryMb()
```

##### `ResetBuildEnvironmentVariables` <a name="ResetBuildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildEnvironmentVariables"></a>

```go
func ResetBuildEnvironmentVariables()
```

##### `ResetBuildWorkerPool` <a name="ResetBuildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetBuildWorkerPool"></a>

```go
func ResetBuildWorkerPool()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDockerRegistry` <a name="ResetDockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRegistry"></a>

```go
func ResetDockerRegistry()
```

##### `ResetDockerRepository` <a name="ResetDockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetDockerRepository"></a>

```go
func ResetDockerRepository()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEntryPoint"></a>

```go
func ResetEntryPoint()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetEventTrigger` <a name="ResetEventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetEventTrigger"></a>

```go
func ResetEventTrigger()
```

##### `ResetHttpsTriggerSecurityLevel` <a name="ResetHttpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerSecurityLevel"></a>

```go
func ResetHttpsTriggerSecurityLevel()
```

##### `ResetHttpsTriggerUrl` <a name="ResetHttpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetHttpsTriggerUrl"></a>

```go
func ResetHttpsTriggerUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressSettings` <a name="ResetIngressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetIngressSettings"></a>

```go
func ResetIngressSettings()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretEnvironmentVariables` <a name="ResetSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretEnvironmentVariables"></a>

```go
func ResetSecretEnvironmentVariables()
```

##### `ResetSecretVolumes` <a name="ResetSecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSecretVolumes"></a>

```go
func ResetSecretVolumes()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSourceArchiveBucket` <a name="ResetSourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveBucket"></a>

```go
func ResetSourceArchiveBucket()
```

##### `ResetSourceArchiveObject` <a name="ResetSourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceArchiveObject"></a>

```go
func ResetSourceArchiveObject()
```

##### `ResetSourceRepository` <a name="ResetSourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetSourceRepository"></a>

```go
func ResetSourceRepository()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerHttp` <a name="ResetTriggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetTriggerHttp"></a>

```go
func ResetTriggerHttp()
```

##### `ResetVpcConnector` <a name="ResetVpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnector"></a>

```go
func ResetVpcConnector()
```

##### `ResetVpcConnectorEgressSettings` <a name="ResetVpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.resetVpcConnectorEgressSettings"></a>

```go
func ResetVpcConnectorEgressSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.CloudfunctionsFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.CloudfunctionsFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.CloudfunctionsFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference">CloudfunctionsFunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList">CloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList">CloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference">CloudfunctionsFunctionSourceRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference">CloudfunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMbInput">AvailableMemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariablesInput">BuildEnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPoolInput">BuildWorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistryInput">DockerRegistryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepositoryInput">DockerRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPointInput">EntryPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTriggerInput">EventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevelInput">HttpsTriggerSecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrlInput">HttpsTriggerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettingsInput">IngressSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariablesInput">SecretEnvironmentVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumesInput">SecretVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucketInput">SourceArchiveBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObjectInput">SourceArchiveObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepositoryInput">SourceRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttpInput">TriggerHttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettingsInput">VpcConnectorEgressSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorInput">VpcConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistry">DockerRegistry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttp">TriggerHttp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTrigger"></a>

```go
func EventTrigger() CloudfunctionsFunctionEventTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference">CloudfunctionsFunctionEventTriggerOutputReference</a>

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```go
func SecretEnvironmentVariables() CloudfunctionsFunctionSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList">CloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumes"></a>

```go
func SecretVolumes() CloudfunctionsFunctionSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList">CloudfunctionsFunctionSecretVolumesList</a>

---

##### `SourceRepository`<sup>Required</sup> <a name="SourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepository"></a>

```go
func SourceRepository() CloudfunctionsFunctionSourceRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference">CloudfunctionsFunctionSourceRepositoryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeouts"></a>

```go
func Timeouts() CloudfunctionsFunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference">CloudfunctionsFunctionTimeoutsOutputReference</a>

---

##### `AvailableMemoryMbInput`<sup>Optional</sup> <a name="AvailableMemoryMbInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMbInput"></a>

```go
func AvailableMemoryMbInput() *f64
```

- *Type:* *f64

---

##### `BuildEnvironmentVariablesInput`<sup>Optional</sup> <a name="BuildEnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariablesInput"></a>

```go
func BuildEnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildWorkerPoolInput`<sup>Optional</sup> <a name="BuildWorkerPoolInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPoolInput"></a>

```go
func BuildWorkerPoolInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DockerRegistryInput`<sup>Optional</sup> <a name="DockerRegistryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistryInput"></a>

```go
func DockerRegistryInput() *string
```

- *Type:* *string

---

##### `DockerRepositoryInput`<sup>Optional</sup> <a name="DockerRepositoryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepositoryInput"></a>

```go
func DockerRepositoryInput() *string
```

- *Type:* *string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPointInput"></a>

```go
func EntryPointInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventTriggerInput`<sup>Optional</sup> <a name="EventTriggerInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.eventTriggerInput"></a>

```go
func EventTriggerInput() CloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

---

##### `HttpsTriggerSecurityLevelInput`<sup>Optional</sup> <a name="HttpsTriggerSecurityLevelInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevelInput"></a>

```go
func HttpsTriggerSecurityLevelInput() *string
```

- *Type:* *string

---

##### `HttpsTriggerUrlInput`<sup>Optional</sup> <a name="HttpsTriggerUrlInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrlInput"></a>

```go
func HttpsTriggerUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressSettingsInput`<sup>Optional</sup> <a name="IngressSettingsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettingsInput"></a>

```go
func IngressSettingsInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SecretEnvironmentVariablesInput`<sup>Optional</sup> <a name="SecretEnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretEnvironmentVariablesInput"></a>

```go
func SecretEnvironmentVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretVolumesInput`<sup>Optional</sup> <a name="SecretVolumesInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.secretVolumesInput"></a>

```go
func SecretVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SourceArchiveBucketInput`<sup>Optional</sup> <a name="SourceArchiveBucketInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucketInput"></a>

```go
func SourceArchiveBucketInput() *string
```

- *Type:* *string

---

##### `SourceArchiveObjectInput`<sup>Optional</sup> <a name="SourceArchiveObjectInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObjectInput"></a>

```go
func SourceArchiveObjectInput() *string
```

- *Type:* *string

---

##### `SourceRepositoryInput`<sup>Optional</sup> <a name="SourceRepositoryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceRepositoryInput"></a>

```go
func SourceRepositoryInput() CloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerHttpInput`<sup>Optional</sup> <a name="TriggerHttpInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttpInput"></a>

```go
func TriggerHttpInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="VpcConnectorEgressSettingsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettingsInput"></a>

```go
func VpcConnectorEgressSettingsInput() *string
```

- *Type:* *string

---

##### `VpcConnectorInput`<sup>Optional</sup> <a name="VpcConnectorInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorInput"></a>

```go
func VpcConnectorInput() *string
```

- *Type:* *string

---

##### `AvailableMemoryMb`<sup>Required</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.availableMemoryMb"></a>

```go
func AvailableMemoryMb() *f64
```

- *Type:* *f64

---

##### `BuildEnvironmentVariables`<sup>Required</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```go
func BuildEnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildWorkerPool`<sup>Required</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.buildWorkerPool"></a>

```go
func BuildWorkerPool() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DockerRegistry`<sup>Required</sup> <a name="DockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRegistry"></a>

```go
func DockerRegistry() *string
```

- *Type:* *string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.dockerRepository"></a>

```go
func DockerRepository() *string
```

- *Type:* *string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.entryPoint"></a>

```go
func EntryPoint() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HttpsTriggerSecurityLevel`<sup>Required</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```go
func HttpsTriggerSecurityLevel() *string
```

- *Type:* *string

---

##### `HttpsTriggerUrl`<sup>Required</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.httpsTriggerUrl"></a>

```go
func HttpsTriggerUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.ingressSettings"></a>

```go
func IngressSettings() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SourceArchiveBucket`<sup>Required</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveBucket"></a>

```go
func SourceArchiveBucket() *string
```

- *Type:* *string

---

##### `SourceArchiveObject`<sup>Required</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.sourceArchiveObject"></a>

```go
func SourceArchiveObject() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `TriggerHttp`<sup>Required</sup> <a name="TriggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.triggerHttp"></a>

```go
func TriggerHttp() interface{}
```

- *Type:* interface{}

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnector"></a>

```go
func VpcConnector() *string
```

- *Type:* *string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```go
func VpcConnectorEgressSettings() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfunctionsFunctionConfig <a name="CloudfunctionsFunctionConfig" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Runtime: *string,
	AvailableMemoryMb: *f64,
	BuildEnvironmentVariables: *map[string]*string,
	BuildWorkerPool: *string,
	Description: *string,
	DockerRegistry: *string,
	DockerRepository: *string,
	EntryPoint: *string,
	EnvironmentVariables: *map[string]*string,
	EventTrigger: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger,
	HttpsTriggerSecurityLevel: *string,
	HttpsTriggerUrl: *string,
	Id: *string,
	IngressSettings: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	MaxInstances: *f64,
	MinInstances: *f64,
	Project: *string,
	Region: *string,
	SecretEnvironmentVariables: interface{},
	SecretVolumes: interface{},
	ServiceAccountEmail: *string,
	SourceArchiveBucket: *string,
	SourceArchiveObject: *string,
	SourceRepository: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository,
	Timeout: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts,
	TriggerHttp: interface{},
	VpcConnector: *string,
	VpcConnectorEgressSettings: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.runtime">Runtime</a></code> | <code>*string</code> | The runtime in which the function is going to run. Eg. "nodejs8", "nodejs10", "python37", "go111". |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>*f64</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>*map[string]*string</code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>*string</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.description">Description</a></code> | <code>*string</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRegistry">DockerRegistry</a></code> | <code>*string</code> | Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>*string</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>*string</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#id CloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.project">Project</a></code> | <code>*string</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.region">Region</a></code> | <code>*string</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code>interface{}</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretVolumes">SecretVolumes</a></code> | <code>interface{}</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>*string</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>*string</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.triggerHttp">TriggerHttp</a></code> | <code>interface{}</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#name CloudfunctionsFunction#name}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

The runtime in which the function is going to run. Eg. "nodejs8", "nodejs10", "python37", "go111".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#runtime CloudfunctionsFunction#runtime}

---

##### `AvailableMemoryMb`<sup>Optional</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.availableMemoryMb"></a>

```go
AvailableMemoryMb *f64
```

- *Type:* *f64

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#available_memory_mb CloudfunctionsFunction#available_memory_mb}

---

##### `BuildEnvironmentVariables`<sup>Optional</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildEnvironmentVariables"></a>

```go
BuildEnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#build_environment_variables CloudfunctionsFunction#build_environment_variables}

---

##### `BuildWorkerPool`<sup>Optional</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.buildWorkerPool"></a>

```go
BuildWorkerPool *string
```

- *Type:* *string

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#build_worker_pool CloudfunctionsFunction#build_worker_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#description CloudfunctionsFunction#description}

---

##### `DockerRegistry`<sup>Optional</sup> <a name="DockerRegistry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRegistry"></a>

```go
DockerRegistry *string
```

- *Type:* *string

Docker Registry to use for storing the function's Docker images. Allowed values are CONTAINER_REGISTRY (default) and ARTIFACT_REGISTRY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#docker_registry CloudfunctionsFunction#docker_registry}

---

##### `DockerRepository`<sup>Optional</sup> <a name="DockerRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.dockerRepository"></a>

```go
DockerRepository *string
```

- *Type:* *string

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#docker_repository CloudfunctionsFunction#docker_repository}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.entryPoint"></a>

```go
EntryPoint *string
```

- *Type:* *string

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#entry_point CloudfunctionsFunction#entry_point}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#environment_variables CloudfunctionsFunction#environment_variables}

---

##### `EventTrigger`<sup>Optional</sup> <a name="EventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.eventTrigger"></a>

```go
EventTrigger CloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#event_trigger CloudfunctionsFunction#event_trigger}

---

##### `HttpsTriggerSecurityLevel`<sup>Optional</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel"></a>

```go
HttpsTriggerSecurityLevel *string
```

- *Type:* *string

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#https_trigger_security_level CloudfunctionsFunction#https_trigger_security_level}

---

##### `HttpsTriggerUrl`<sup>Optional</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.httpsTriggerUrl"></a>

```go
HttpsTriggerUrl *string
```

- *Type:* *string

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#https_trigger_url CloudfunctionsFunction#https_trigger_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#id CloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressSettings`<sup>Optional</sup> <a name="IngressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.ingressSettings"></a>

```go
IngressSettings *string
```

- *Type:* *string

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#ingress_settings CloudfunctionsFunction#ingress_settings}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#kms_key_name CloudfunctionsFunction#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#labels CloudfunctionsFunction#labels}

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#max_instances CloudfunctionsFunction#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#min_instances CloudfunctionsFunction#min_instances}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#project CloudfunctionsFunction#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#region CloudfunctionsFunction#region}

---

##### `SecretEnvironmentVariables`<sup>Optional</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretEnvironmentVariables"></a>

```go
SecretEnvironmentVariables interface{}
```

- *Type:* interface{}

secret_environment_variables block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#secret_environment_variables CloudfunctionsFunction#secret_environment_variables}

---

##### `SecretVolumes`<sup>Optional</sup> <a name="SecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.secretVolumes"></a>

```go
SecretVolumes interface{}
```

- *Type:* interface{}

secret_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#secret_volumes CloudfunctionsFunction#secret_volumes}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#service_account_email CloudfunctionsFunction#service_account_email}

---

##### `SourceArchiveBucket`<sup>Optional</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveBucket"></a>

```go
SourceArchiveBucket *string
```

- *Type:* *string

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#source_archive_bucket CloudfunctionsFunction#source_archive_bucket}

---

##### `SourceArchiveObject`<sup>Optional</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceArchiveObject"></a>

```go
SourceArchiveObject *string
```

- *Type:* *string

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#source_archive_object CloudfunctionsFunction#source_archive_object}

---

##### `SourceRepository`<sup>Optional</sup> <a name="SourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.sourceRepository"></a>

```go
SourceRepository CloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#source_repository CloudfunctionsFunction#source_repository}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#timeout CloudfunctionsFunction#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.timeouts"></a>

```go
Timeouts CloudfunctionsFunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts">CloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#timeouts CloudfunctionsFunction#timeouts}

---

##### `TriggerHttp`<sup>Optional</sup> <a name="TriggerHttp" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.triggerHttp"></a>

```go
TriggerHttp interface{}
```

- *Type:* interface{}

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#trigger_http CloudfunctionsFunction#trigger_http}

---

##### `VpcConnector`<sup>Optional</sup> <a name="VpcConnector" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnector"></a>

```go
VpcConnector *string
```

- *Type:* *string

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/*/locations/*/connectors/*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#vpc_connector CloudfunctionsFunction#vpc_connector}

---

##### `VpcConnectorEgressSettings`<sup>Optional</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings"></a>

```go
VpcConnectorEgressSettings *string
```

- *Type:* *string

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#vpc_connector_egress_settings CloudfunctionsFunction#vpc_connector_egress_settings}

---

### CloudfunctionsFunctionEventTrigger <a name="CloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionEventTrigger {
	EventType: *string,
	Resource: *string,
	FailurePolicy: github.com/cdktf/cdktf-provider-google-go/google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.eventType">EventType</a></code> | <code>*string</code> | The type of event to observe. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.resource">Resource</a></code> | <code>*string</code> | The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic". |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | failure_policy block. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#event_type CloudfunctionsFunction#event_type}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#resource CloudfunctionsFunction#resource}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger.property.failurePolicy"></a>

```go
FailurePolicy CloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#failure_policy CloudfunctionsFunction#failure_policy}

---

### CloudfunctionsFunctionEventTriggerFailurePolicy <a name="CloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionEventTriggerFailurePolicy {
	Retry: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy.property.retry">Retry</a></code> | <code>interface{}</code> | Whether the function should be retried on failure. Defaults to false. |

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy.property.retry"></a>

```go
Retry interface{}
```

- *Type:* interface{}

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#retry CloudfunctionsFunction#retry}

---

### CloudfunctionsFunctionSecretEnvironmentVariables <a name="CloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionSecretEnvironmentVariables {
	Key: *string,
	Secret: *string,
	Version: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.key">Key</a></code> | <code>*string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.secret">Secret</a></code> | <code>*string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.version">Version</a></code> | <code>*string</code> | Version of the secret (version number or the string "latest"). |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.projectId">ProjectId</a></code> | <code>*string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#key CloudfunctionsFunction#key}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#secret CloudfunctionsFunction#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the secret (version number or the string "latest").

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#version CloudfunctionsFunction#version}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariables.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#project_id CloudfunctionsFunction#project_id}

---

### CloudfunctionsFunctionSecretVolumes <a name="CloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionSecretVolumes {
	MountPath: *string,
	Secret: *string,
	ProjectId: *string,
	Versions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.mountPath">MountPath</a></code> | <code>*string</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.secret">Secret</a></code> | <code>*string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.projectId">ProjectId</a></code> | <code>*string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.versions">Versions</a></code> | <code>interface{}</code> | versions block. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

The path within the container to mount the secret volume.

For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#mount_path CloudfunctionsFunction#mount_path}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#secret CloudfunctionsFunction#secret}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#project_id CloudfunctionsFunction#project_id}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumes.property.versions"></a>

```go
Versions interface{}
```

- *Type:* interface{}

versions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#versions CloudfunctionsFunction#versions}

---

### CloudfunctionsFunctionSecretVolumesVersions <a name="CloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionSecretVolumesVersions {
	Path: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.path">Path</a></code> | <code>*string</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.version">Version</a></code> | <code>*string</code> | Version of the secret (version number or the string "latest"). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.path"></a>

```go
Path *string
```

- *Type:* *string

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#path CloudfunctionsFunction#path}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersions.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the secret (version number or the string "latest").

It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#version CloudfunctionsFunction#version}

---

### CloudfunctionsFunctionSourceRepository <a name="CloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionSourceRepository {
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository.property.url">Url</a></code> | <code>*string</code> | The URL pointing to the hosted repository where the function is defined. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#url CloudfunctionsFunction#url}

---

### CloudfunctionsFunctionTimeouts <a name="CloudfunctionsFunctionTimeouts" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

&cloudfunctionsfunction.CloudfunctionsFunctionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#create CloudfunctionsFunction#create}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#delete CloudfunctionsFunction#delete}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#read CloudfunctionsFunction#read}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#update CloudfunctionsFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#create CloudfunctionsFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#delete CloudfunctionsFunction#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#read CloudfunctionsFunction#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function#update CloudfunctionsFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">Retry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```go
func Retry() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### CloudfunctionsFunctionEventTriggerOutputReference <a name="CloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionEventTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfunctionsFunctionEventTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy">PutFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailurePolicy` <a name="PutFailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy"></a>

```go
func PutFailurePolicy(value CloudfunctionsFunctionEventTriggerFailurePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a>

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() CloudfunctionsFunctionEventTriggerFailurePolicy
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerFailurePolicy">CloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfunctionsFunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionEventTrigger">CloudfunctionsFunctionEventTrigger</a>

---


### CloudfunctionsFunctionSecretEnvironmentVariablesList <a name="CloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSecretEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfunctionsFunctionSecretEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfunctionsFunctionSecretVolumesList <a name="CloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSecretVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfunctionsFunctionSecretVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.get"></a>

```go
func Get(index *f64) CloudfunctionsFunctionSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfunctionsFunctionSecretVolumesOutputReference <a name="CloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSecretVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfunctionsFunctionSecretVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.putVersions"></a>

```go
func PutVersions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.resetVersions"></a>

```go
func ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList">CloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput">VersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```go
func Versions() CloudfunctionsFunctionSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList">CloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput"></a>

```go
func VersionsInput() interface{}
```

- *Type:* interface{}

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfunctionsFunctionSecretVolumesVersionsList <a name="CloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSecretVolumesVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfunctionsFunctionSecretVolumesVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```go
func Get(index *f64) CloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="CloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSecretVolumesVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfunctionsFunctionSourceRepositoryOutputReference <a name="CloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionSourceRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfunctionsFunctionSourceRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">DeployedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeployedUrl`<sup>Required</sup> <a name="DeployedUrl" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```go
func DeployedUrl() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudfunctionsFunctionSourceRepository
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionSourceRepository">CloudfunctionsFunctionSourceRepository</a>

---


### CloudfunctionsFunctionTimeoutsOutputReference <a name="CloudfunctionsFunctionTimeoutsOutputReference" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudfunctionsfunction"

cloudfunctionsfunction.NewCloudfunctionsFunctionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfunctionsFunctionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudfunctionsFunction.CloudfunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



