# `colabRuntimeTemplate` Submodule <a name="`colabRuntimeTemplate` Submodule" id="@cdktf/provider-google.colabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntimeTemplate <a name="ColabRuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplate(scope Construct, id *string, config ColabRuntimeTemplateConfig) ColabRuntimeTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig">ColabRuntimeTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig">ColabRuntimeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec">PutDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig">PutEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig">PutIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig">PutShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec">ResetDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig">ResetEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig">ResetIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig">ResetShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataPersistentDiskSpec` <a name="PutDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```go
func PutDataPersistentDiskSpec(value ColabRuntimeTemplateDataPersistentDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value ColabRuntimeTemplateEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `PutEucConfig` <a name="PutEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig"></a>

```go
func PutEucConfig(value ColabRuntimeTemplateEucConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putEucConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `PutIdleShutdownConfig` <a name="PutIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig"></a>

```go
func PutIdleShutdownConfig(value ColabRuntimeTemplateIdleShutdownConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putIdleShutdownConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec"></a>

```go
func PutMachineSpec(value ColabRuntimeTemplateMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec"></a>

```go
func PutNetworkSpec(value ColabRuntimeTemplateNetworkSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `PutShieldedVmConfig` <a name="PutShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig"></a>

```go
func PutShieldedVmConfig(value ColabRuntimeTemplateShieldedVmConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putShieldedVmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig"></a>

```go
func PutSoftwareConfig(value ColabRuntimeTemplateSoftwareConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts"></a>

```go
func PutTimeouts(value ColabRuntimeTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

---

##### `ResetDataPersistentDiskSpec` <a name="ResetDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```go
func ResetDataPersistentDiskSpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetEucConfig` <a name="ResetEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetEucConfig"></a>

```go
func ResetEucConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetIdleShutdownConfig` <a name="ResetIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```go
func ResetIdleShutdownConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetMachineSpec"></a>

```go
func ResetMachineSpec()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkSpec"></a>

```go
func ResetNetworkSpec()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetNetworkTags"></a>

```go
func ResetNetworkTags()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetShieldedVmConfig` <a name="ResetShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetShieldedVmConfig"></a>

```go
func ResetShieldedVmConfig()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetSoftwareConfig"></a>

```go
func ResetSoftwareConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.ColabRuntimeTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.ColabRuntimeTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.ColabRuntimeTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.ColabRuntimeTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ColabRuntimeTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec">DataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig">EucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig">IdleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig">ShieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput">DataPersistentDiskSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput">EucConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput">IdleShutdownConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput">NetworkTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput">ShieldedVmConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataPersistentDiskSpec`<sup>Required</sup> <a name="DataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```go
func DataPersistentDiskSpec() ColabRuntimeTemplateDataPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference">ColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpec"></a>

```go
func EncryptionSpec() ColabRuntimeTemplateEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference">ColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `EucConfig`<sup>Required</sup> <a name="EucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfig"></a>

```go
func EucConfig() ColabRuntimeTemplateEucConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference">ColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `IdleShutdownConfig`<sup>Required</sup> <a name="IdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfig"></a>

```go
func IdleShutdownConfig() ColabRuntimeTemplateIdleShutdownConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference">ColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpec"></a>

```go
func MachineSpec() ColabRuntimeTemplateMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference">ColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpec"></a>

```go
func NetworkSpec() ColabRuntimeTemplateNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference">ColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `ShieldedVmConfig`<sup>Required</sup> <a name="ShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfig"></a>

```go
func ShieldedVmConfig() ColabRuntimeTemplateShieldedVmConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference">ColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfig"></a>

```go
func SoftwareConfig() ColabRuntimeTemplateSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference">ColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeouts"></a>

```go
func Timeouts() ColabRuntimeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference">ColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `DataPersistentDiskSpecInput`<sup>Optional</sup> <a name="DataPersistentDiskSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```go
func DataPersistentDiskSpecInput() ColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() ColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---

##### `EucConfigInput`<sup>Optional</sup> <a name="EucConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.eucConfigInput"></a>

```go
func EucConfigInput() ColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdleShutdownConfigInput`<sup>Optional</sup> <a name="IdleShutdownConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```go
func IdleShutdownConfigInput() ColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.machineSpecInput"></a>

```go
func MachineSpecInput() ColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkSpecInput"></a>

```go
func NetworkSpecInput() ColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTagsInput"></a>

```go
func NetworkTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ShieldedVmConfigInput`<sup>Optional</sup> <a name="ShieldedVmConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```go
func ShieldedVmConfigInput() ColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.softwareConfigInput"></a>

```go
func SoftwareConfigInput() ColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.networkTags"></a>

```go
func NetworkTags() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeTemplateConfig <a name="ColabRuntimeTemplateConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	DataPersistentDiskSpec: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec,
	Description: *string,
	EncryptionSpec: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec,
	EucConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig,
	Id: *string,
	IdleShutdownConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig,
	Labels: *map[string]*string,
	MachineSpec: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec,
	Name: *string,
	NetworkSpec: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec,
	NetworkTags: *[]*string,
	Project: *string,
	ShieldedVmConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig,
	SoftwareConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">DataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig">EucConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig">IdleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags">NetworkTags</a></code> | <code>*[]*string</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig">ShieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#display_name ColabRuntimeTemplate#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#location ColabRuntimeTemplate#location}

---

##### `DataPersistentDiskSpec`<sup>Optional</sup> <a name="DataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```go
DataPersistentDiskSpec ColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#data_persistent_disk_spec ColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#description ColabRuntimeTemplate#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```go
EncryptionSpec ColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#encryption_spec ColabRuntimeTemplate#encryption_spec}

---

##### `EucConfig`<sup>Optional</sup> <a name="EucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.eucConfig"></a>

```go
EucConfig ColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#euc_config ColabRuntimeTemplate#euc_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#id ColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleShutdownConfig`<sup>Optional</sup> <a name="IdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```go
IdleShutdownConfig ColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#idle_shutdown_config ColabRuntimeTemplate#idle_shutdown_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#labels ColabRuntimeTemplate#labels}

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.machineSpec"></a>

```go
MachineSpec ColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#machine_spec ColabRuntimeTemplate#machine_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkSpec"></a>

```go
NetworkSpec ColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network_spec ColabRuntimeTemplate#network_spec}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.networkTags"></a>

```go
NetworkTags *[]*string
```

- *Type:* *[]*string

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network_tags ColabRuntimeTemplate#network_tags}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#project ColabRuntimeTemplate#project}.

---

##### `ShieldedVmConfig`<sup>Optional</sup> <a name="ShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```go
ShieldedVmConfig ColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#shielded_vm_config ColabRuntimeTemplate#shielded_vm_config}

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.softwareConfig"></a>

```go
SoftwareConfig ColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#software_config ColabRuntimeTemplate#software_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateConfig.property.timeouts"></a>

```go
Timeouts ColabRuntimeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts">ColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#timeouts ColabRuntimeTemplate#timeouts}

---

### ColabRuntimeTemplateDataPersistentDiskSpec <a name="ColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateDataPersistentDiskSpec {
	DiskSizeGb: *string,
	DiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>*string</code> | The type of the persistent disk. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```go
DiskSizeGb *string
```

- *Type:* *string

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#disk_size_gb ColabRuntimeTemplate#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#disk_type ColabRuntimeTemplate#disk_type}

---

### ColabRuntimeTemplateEncryptionSpec <a name="ColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#kms_key_name ColabRuntimeTemplate#kms_key_name}

---

### ColabRuntimeTemplateEucConfig <a name="ColabRuntimeTemplateEucConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateEucConfig {
	EucDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled">EucDisabled</a></code> | <code>interface{}</code> | Disable end user credential access for the runtime. |

---

##### `EucDisabled`<sup>Optional</sup> <a name="EucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```go
EucDisabled interface{}
```

- *Type:* interface{}

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#euc_disabled ColabRuntimeTemplate#euc_disabled}

---

### ColabRuntimeTemplateIdleShutdownConfig <a name="ColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateIdleShutdownConfig {
	IdleTimeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | The duration after which the runtime is automatically shut down. |

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```go
IdleTimeout *string
```

- *Type:* *string

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#idle_timeout ColabRuntimeTemplate#idle_timeout}

---

### ColabRuntimeTemplateMachineSpec <a name="ColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The Compute Engine machine type selected for the runtime. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#accelerator_count ColabRuntimeTemplate#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#accelerator_type ColabRuntimeTemplate#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#machine_type ColabRuntimeTemplate#machine_type}

---

### ColabRuntimeTemplateNetworkSpec <a name="ColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateNetworkSpec {
	EnableInternetAccess: interface{},
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network">Network</a></code> | <code>*string</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork that this runtime is in. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#enable_internet_access ColabRuntimeTemplate#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#network ColabRuntimeTemplate#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#subnetwork ColabRuntimeTemplate#subnetwork}

---

### ColabRuntimeTemplateShieldedVmConfig <a name="ColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateShieldedVmConfig {
	EnableSecureBoot: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | Enables secure boot for the runtime. |

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```go
EnableSecureBoot interface{}
```

- *Type:* interface{}

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#enable_secure_boot ColabRuntimeTemplate#enable_secure_boot}

---

### ColabRuntimeTemplateSoftwareConfig <a name="ColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateSoftwareConfig {
	Env: interface{},
	PostStartupScriptConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">PostStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#env ColabRuntimeTemplate#env}

---

##### `PostStartupScriptConfig`<sup>Optional</sup> <a name="PostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```go
PostStartupScriptConfig ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_config ColabRuntimeTemplate#post_startup_script_config}

---

### ColabRuntimeTemplateSoftwareConfigEnv <a name="ColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateSoftwareConfigEnv {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value">Value</a></code> | <code>*string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#name ColabRuntimeTemplate#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#value ColabRuntimeTemplate#value}

---

### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig {
	PostStartupScript: *string,
	PostStartupScriptBehavior: *string,
	PostStartupScriptUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">PostStartupScript</a></code> | <code>*string</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>*string</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">PostStartupScriptUrl</a></code> | <code>*string</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```go
PostStartupScript *string
```

- *Type:* *string

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script ColabRuntimeTemplate#post_startup_script}

---

##### `PostStartupScriptBehavior`<sup>Optional</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```go
PostStartupScriptBehavior *string
```

- *Type:* *string

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_behavior ColabRuntimeTemplate#post_startup_script_behavior}

---

##### `PostStartupScriptUrl`<sup>Optional</sup> <a name="PostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```go
PostStartupScriptUrl *string
```

- *Type:* *string

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#post_startup_script_url ColabRuntimeTemplate#post_startup_script_url}

---

### ColabRuntimeTemplateTimeouts <a name="ColabRuntimeTemplateTimeouts" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

&colabruntimetemplate.ColabRuntimeTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#create ColabRuntimeTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#delete ColabRuntimeTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/colab_runtime_template#update ColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="ColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateDataPersistentDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateDataPersistentDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateDataPersistentDiskSpec">ColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### ColabRuntimeTemplateEncryptionSpecOutputReference <a name="ColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEncryptionSpec">ColabRuntimeTemplateEncryptionSpec</a>

---


### ColabRuntimeTemplateEucConfigOutputReference <a name="ColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateEucConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateEucConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">ResetEucDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEucDisabled` <a name="ResetEucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```go
func ResetEucDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">EucDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">EucDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EucDisabledInput`<sup>Optional</sup> <a name="EucDisabledInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```go
func EucDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EucDisabled`<sup>Required</sup> <a name="EucDisabled" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```go
func EucDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateEucConfig">ColabRuntimeTemplateEucConfig</a>

---


### ColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="ColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateIdleShutdownConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateIdleShutdownConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```go
func ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *string
```

- *Type:* *string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```go
func IdleTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateIdleShutdownConfig">ColabRuntimeTemplateIdleShutdownConfig</a>

---


### ColabRuntimeTemplateMachineSpecOutputReference <a name="ColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateMachineSpec">ColabRuntimeTemplateMachineSpec</a>

---


### ColabRuntimeTemplateNetworkSpecOutputReference <a name="ColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateNetworkSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateNetworkSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateNetworkSpec">ColabRuntimeTemplateNetworkSpec</a>

---


### ColabRuntimeTemplateShieldedVmConfigOutputReference <a name="ColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateShieldedVmConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateShieldedVmConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```go
func ResetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```go
func EnableSecureBootInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateShieldedVmConfig">ColabRuntimeTemplateShieldedVmConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigEnvList <a name="ColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateSoftwareConfigEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ColabRuntimeTemplateSoftwareConfigEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```go
func Get(index *f64) ColabRuntimeTemplateSoftwareConfigEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="ColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateSoftwareConfigEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ColabRuntimeTemplateSoftwareConfigEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ColabRuntimeTemplateSoftwareConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateSoftwareConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateSoftwareConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">PutPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">ResetPostStartupScriptConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostStartupScriptConfig` <a name="PutPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```go
func PutPostStartupScriptConfig(value ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetPostStartupScriptConfig` <a name="ResetPostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```go
func ResetPostStartupScriptConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">PostStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">PostStartupScriptConfigInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```go
func Env() ColabRuntimeTemplateSoftwareConfigEnvList
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigEnvList">ColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `PostStartupScriptConfig`<sup>Required</sup> <a name="PostStartupScriptConfig" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```go
func PostStartupScriptConfig() ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `PostStartupScriptConfigInput`<sup>Optional</sup> <a name="PostStartupScriptConfigInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```go
func PostStartupScriptConfigInput() ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfig">ColabRuntimeTemplateSoftwareConfig</a>

---


### ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">ResetPostStartupScriptBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">ResetPostStartupScriptUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```go
func ResetPostStartupScript()
```

##### `ResetPostStartupScriptBehavior` <a name="ResetPostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```go
func ResetPostStartupScriptBehavior()
```

##### `ResetPostStartupScriptUrl` <a name="ResetPostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```go
func ResetPostStartupScriptUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">PostStartupScriptBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">PostStartupScriptUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">PostStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">PostStartupScriptUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostStartupScriptBehaviorInput`<sup>Optional</sup> <a name="PostStartupScriptBehaviorInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```go
func PostStartupScriptBehaviorInput() *string
```

- *Type:* *string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```go
func PostStartupScriptInput() *string
```

- *Type:* *string

---

##### `PostStartupScriptUrlInput`<sup>Optional</sup> <a name="PostStartupScriptUrlInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```go
func PostStartupScriptUrlInput() *string
```

- *Type:* *string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```go
func PostStartupScript() *string
```

- *Type:* *string

---

##### `PostStartupScriptBehavior`<sup>Required</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```go
func PostStartupScriptBehavior() *string
```

- *Type:* *string

---

##### `PostStartupScriptUrl`<sup>Required</sup> <a name="PostStartupScriptUrl" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```go
func PostStartupScriptUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">ColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### ColabRuntimeTemplateTimeoutsOutputReference <a name="ColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/colabruntimetemplate"

colabruntimetemplate.NewColabRuntimeTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplate.ColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



