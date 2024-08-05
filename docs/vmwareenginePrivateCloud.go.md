# `vmwareenginePrivateCloud` Submodule <a name="`vmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google.vmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareenginePrivateCloud <a name="VmwareenginePrivateCloud" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloud(scope Construct, id *string, config VmwareenginePrivateCloudConfig) VmwareenginePrivateCloud
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig">VmwareenginePrivateCloudConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig">VmwareenginePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster">PutManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetDeletionDelayHours">ResetDeletionDelayHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetSendDeletionDelayHoursIfZero">ResetSendDeletionDelayHoursIfZero</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagementCluster` <a name="PutManagementCluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster"></a>

```go
func PutManagementCluster(value VmwareenginePrivateCloudManagementCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig"></a>

```go
func PutNetworkConfig(value VmwareenginePrivateCloudNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts"></a>

```go
func PutTimeouts(value VmwareenginePrivateCloudTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>

---

##### `ResetDeletionDelayHours` <a name="ResetDeletionDelayHours" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetDeletionDelayHours"></a>

```go
func ResetDeletionDelayHours()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSendDeletionDelayHoursIfZero` <a name="ResetSendDeletionDelayHoursIfZero" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetSendDeletionDelayHoursIfZero"></a>

```go
func ResetSendDeletionDelayHoursIfZero()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.VmwareenginePrivateCloud_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.VmwareenginePrivateCloud_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.VmwareenginePrivateCloud_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.VmwareenginePrivateCloud_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VmwareenginePrivateCloud to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VmwareenginePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VmwareenginePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.hcx">Hcx</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList">VmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference">VmwareenginePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference">VmwareenginePrivateCloudNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nsx">Nsx</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList">VmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference">VmwareenginePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList">VmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.deletionDelayHoursInput">DeletionDelayHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementClusterInput">ManagementClusterInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZeroInput">SendDeletionDelayHoursIfZeroInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.deletionDelayHours">DeletionDelayHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZero">SendDeletionDelayHoursIfZero</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hcx`<sup>Required</sup> <a name="Hcx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.hcx"></a>

```go
func Hcx() VmwareenginePrivateCloudHcxList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList">VmwareenginePrivateCloudHcxList</a>

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementCluster"></a>

```go
func ManagementCluster() VmwareenginePrivateCloudManagementClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference">VmwareenginePrivateCloudManagementClusterOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfig"></a>

```go
func NetworkConfig() VmwareenginePrivateCloudNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference">VmwareenginePrivateCloudNetworkConfigOutputReference</a>

---

##### `Nsx`<sup>Required</sup> <a name="Nsx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nsx"></a>

```go
func Nsx() VmwareenginePrivateCloudNsxList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList">VmwareenginePrivateCloudNsxList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeouts"></a>

```go
func Timeouts() VmwareenginePrivateCloudTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference">VmwareenginePrivateCloudTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.vcenter"></a>

```go
func Vcenter() VmwareenginePrivateCloudVcenterList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList">VmwareenginePrivateCloudVcenterList</a>

---

##### `DeletionDelayHoursInput`<sup>Optional</sup> <a name="DeletionDelayHoursInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.deletionDelayHoursInput"></a>

```go
func DeletionDelayHoursInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementClusterInput`<sup>Optional</sup> <a name="ManagementClusterInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementClusterInput"></a>

```go
func ManagementClusterInput() VmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfigInput"></a>

```go
func NetworkConfigInput() VmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SendDeletionDelayHoursIfZeroInput`<sup>Optional</sup> <a name="SendDeletionDelayHoursIfZeroInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZeroInput"></a>

```go
func SendDeletionDelayHoursIfZeroInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DeletionDelayHours`<sup>Required</sup> <a name="DeletionDelayHours" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.deletionDelayHours"></a>

```go
func DeletionDelayHours() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SendDeletionDelayHoursIfZero`<sup>Required</sup> <a name="SendDeletionDelayHoursIfZero" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.sendDeletionDelayHoursIfZero"></a>

```go
func SendDeletionDelayHoursIfZero() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareenginePrivateCloudConfig <a name="VmwareenginePrivateCloudConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagementCluster: github.com/cdktf/cdktf-provider-google-go/google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster,
	Name: *string,
	NetworkConfig: github.com/cdktf/cdktf-provider-google-go/google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig,
	DeletionDelayHours: *f64,
	Description: *string,
	Id: *string,
	Project: *string,
	SendDeletionDelayHoursIfZero: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.location">Location</a></code> | <code>*string</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.deletionDelayHours">DeletionDelayHours</a></code> | <code>*f64</code> | The number of hours to delay this request. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for this private cloud. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.sendDeletionDelayHoursIfZero">SendDeletionDelayHoursIfZero</a></code> | <code>interface{}</code> | While set true, deletion_delay_hours value will be sent in the request even for zero value of the field. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.type">Type</a></code> | <code>*string</code> | Initial type of the private cloud. Possible values: ["STANDARD", "TIME_LIMITED", "STRETCHED"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#location VmwareenginePrivateCloud#location}

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.managementCluster"></a>

```go
ManagementCluster VmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#management_cluster VmwareenginePrivateCloud#management_cluster}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#name VmwareenginePrivateCloud#name}

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.networkConfig"></a>

```go
NetworkConfig VmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#network_config VmwareenginePrivateCloud#network_config}

---

##### `DeletionDelayHours`<sup>Optional</sup> <a name="DeletionDelayHours" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.deletionDelayHours"></a>

```go
DeletionDelayHours *f64
```

- *Type:* *f64

The number of hours to delay this request.

You can set this value to an hour between 0 to 8, where setting it to 0 starts the deletion request immediately. If no value is set, a default value is set at the API Level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#deletion_delay_hours VmwareenginePrivateCloud#deletion_delay_hours}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for this private cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#description VmwareenginePrivateCloud#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}.

---

##### `SendDeletionDelayHoursIfZero`<sup>Optional</sup> <a name="SendDeletionDelayHoursIfZero" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.sendDeletionDelayHoursIfZero"></a>

```go
SendDeletionDelayHoursIfZero interface{}
```

- *Type:* interface{}

While set true, deletion_delay_hours value will be sent in the request even for zero value of the field.

This field is only useful for setting 0 value to the deletion_delay_hours field. It can be used both alone and together with deletion_delay_hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#send_deletion_delay_hours_if_zero VmwareenginePrivateCloud#send_deletion_delay_hours_if_zero}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.timeouts"></a>

```go
Timeouts VmwareenginePrivateCloudTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#timeouts VmwareenginePrivateCloud#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Initial type of the private cloud. Possible values: ["STANDARD", "TIME_LIMITED", "STRETCHED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#type VmwareenginePrivateCloud#type}

---

### VmwareenginePrivateCloudHcx <a name="VmwareenginePrivateCloudHcx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudHcx {

}
```


### VmwareenginePrivateCloudManagementCluster <a name="VmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudManagementCluster {
	ClusterId: *string,
	NodeTypeConfigs: interface{},
	StretchedClusterConfig: github.com/cdktf/cdktf-provider-google-go/google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | The user-provided identifier of the new Cluster. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs">NodeTypeConfigs</a></code> | <code>interface{}</code> | node_type_configs block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.stretchedClusterConfig">StretchedClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a></code> | stretched_cluster_config block. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The user-provided identifier of the new Cluster.

The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#cluster_id VmwareenginePrivateCloud#cluster_id}

---

##### `NodeTypeConfigs`<sup>Optional</sup> <a name="NodeTypeConfigs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs"></a>

```go
NodeTypeConfigs interface{}
```

- *Type:* interface{}

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#node_type_configs VmwareenginePrivateCloud#node_type_configs}

---

##### `StretchedClusterConfig`<sup>Optional</sup> <a name="StretchedClusterConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.stretchedClusterConfig"></a>

```go
StretchedClusterConfig VmwareenginePrivateCloudManagementClusterStretchedClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a>

stretched_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#stretched_cluster_config VmwareenginePrivateCloud#stretched_cluster_config}

---

### VmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="VmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs {
	NodeCount: *f64,
	NodeTypeId: *string,
	CustomCoreCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#node_type_id VmwareenginePrivateCloud#node_type_id}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount">CustomCoreCount</a></code> | <code>*f64</code> | Customized number of cores available to each node of the type. |

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#node_count VmwareenginePrivateCloud#node_count}

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#node_type_id VmwareenginePrivateCloud#node_type_id}.

---

##### `CustomCoreCount`<sup>Optional</sup> <a name="CustomCoreCount" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount"></a>

```go
CustomCoreCount *f64
```

- *Type:* *f64

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
This cannot be changed once the PrivateCloud is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#custom_core_count VmwareenginePrivateCloud#custom_core_count}

---

### VmwareenginePrivateCloudManagementClusterStretchedClusterConfig <a name="VmwareenginePrivateCloudManagementClusterStretchedClusterConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig {
	PreferredLocation: *string,
	SecondaryLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig.property.preferredLocation">PreferredLocation</a></code> | <code>*string</code> | Zone that will remain operational when connection between the two zones is lost. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig.property.secondaryLocation">SecondaryLocation</a></code> | <code>*string</code> | Additional zone for a higher level of availability and load balancing. |

---

##### `PreferredLocation`<sup>Optional</sup> <a name="PreferredLocation" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig.property.preferredLocation"></a>

```go
PreferredLocation *string
```

- *Type:* *string

Zone that will remain operational when connection between the two zones is lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#preferred_location VmwareenginePrivateCloud#preferred_location}

---

##### `SecondaryLocation`<sup>Optional</sup> <a name="SecondaryLocation" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig.property.secondaryLocation"></a>

```go
SecondaryLocation *string
```

- *Type:* *string

Additional zone for a higher level of availability and load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#secondary_location VmwareenginePrivateCloud#secondary_location}

---

### VmwareenginePrivateCloudNetworkConfig <a name="VmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudNetworkConfig {
	ManagementCidr: *string,
	VmwareEngineNetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.managementCidr">ManagementCidr</a></code> | <code>*string</code> | Management CIDR used by VMware management appliances. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | The relative resource name of the VMware Engine network attached to the private cloud. |

---

##### `ManagementCidr`<sup>Required</sup> <a name="ManagementCidr" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.managementCidr"></a>

```go
ManagementCidr *string
```

- *Type:* *string

Management CIDR used by VMware management appliances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#management_cidr VmwareenginePrivateCloud#management_cidr}

---

##### `VmwareEngineNetwork`<sup>Optional</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork"></a>

```go
VmwareEngineNetwork *string
```

- *Type:* *string

The relative resource name of the VMware Engine network attached to the private cloud.

Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
where {project} can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#vmware_engine_network VmwareenginePrivateCloud#vmware_engine_network}

---

### VmwareenginePrivateCloudNsx <a name="VmwareenginePrivateCloudNsx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudNsx {

}
```


### VmwareenginePrivateCloudTimeouts <a name="VmwareenginePrivateCloudTimeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#create VmwareenginePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#delete VmwareenginePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#update VmwareenginePrivateCloud#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#create VmwareenginePrivateCloud#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#delete VmwareenginePrivateCloud#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vmwareengine_private_cloud#update VmwareenginePrivateCloud#update}.

---

### VmwareenginePrivateCloudVcenter <a name="VmwareenginePrivateCloudVcenter" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

&vmwareengineprivatecloud.VmwareenginePrivateCloudVcenter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### VmwareenginePrivateCloudHcxList <a name="VmwareenginePrivateCloudHcxList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudHcxList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwareenginePrivateCloudHcxList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.get"></a>

```go
func Get(index *f64) VmwareenginePrivateCloudHcxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VmwareenginePrivateCloudHcxOutputReference <a name="VmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudHcxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwareenginePrivateCloudHcxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx">VmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareenginePrivateCloudHcx
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx">VmwareenginePrivateCloudHcx</a>

---


### VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```go
func Get(index *f64) VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">ResetCustomCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomCoreCount` <a name="ResetCustomCoreCount" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```go
func ResetCustomCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">CustomCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">CustomCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCoreCountInput`<sup>Optional</sup> <a name="CustomCoreCountInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```go
func CustomCoreCountInput() *f64
```

- *Type:* *f64

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `CustomCoreCount`<sup>Required</sup> <a name="CustomCoreCount" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```go
func CustomCoreCount() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareenginePrivateCloudManagementClusterOutputReference <a name="VmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudManagementClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareenginePrivateCloudManagementClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs">PutNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putStretchedClusterConfig">PutStretchedClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs">ResetNodeTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resetStretchedClusterConfig">ResetStretchedClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeTypeConfigs` <a name="PutNodeTypeConfigs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs"></a>

```go
func PutNodeTypeConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStretchedClusterConfig` <a name="PutStretchedClusterConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putStretchedClusterConfig"></a>

```go
func PutStretchedClusterConfig(value VmwareenginePrivateCloudManagementClusterStretchedClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putStretchedClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a>

---

##### `ResetNodeTypeConfigs` <a name="ResetNodeTypeConfigs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs"></a>

```go
func ResetNodeTypeConfigs()
```

##### `ResetStretchedClusterConfig` <a name="ResetStretchedClusterConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resetStretchedClusterConfig"></a>

```go
func ResetStretchedClusterConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">NodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfig">StretchedClusterConfig</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference">VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput">NodeTypeConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfigInput">StretchedClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeTypeConfigs`<sup>Required</sup> <a name="NodeTypeConfigs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```go
func NodeTypeConfigs() VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `StretchedClusterConfig`<sup>Required</sup> <a name="StretchedClusterConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfig"></a>

```go
func StretchedClusterConfig() VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference">VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `NodeTypeConfigsInput`<sup>Optional</sup> <a name="NodeTypeConfigsInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput"></a>

```go
func NodeTypeConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `StretchedClusterConfigInput`<sup>Optional</sup> <a name="StretchedClusterConfigInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.stretchedClusterConfigInput"></a>

```go
func StretchedClusterConfigInput() VmwareenginePrivateCloudManagementClusterStretchedClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

---


### VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference <a name="VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resetPreferredLocation">ResetPreferredLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resetSecondaryLocation">ResetSecondaryLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredLocation` <a name="ResetPreferredLocation" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resetPreferredLocation"></a>

```go
func ResetPreferredLocation()
```

##### `ResetSecondaryLocation` <a name="ResetSecondaryLocation" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.resetSecondaryLocation"></a>

```go
func ResetSecondaryLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocationInput">PreferredLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocationInput">SecondaryLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocation">PreferredLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocation">SecondaryLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredLocationInput`<sup>Optional</sup> <a name="PreferredLocationInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocationInput"></a>

```go
func PreferredLocationInput() *string
```

- *Type:* *string

---

##### `SecondaryLocationInput`<sup>Optional</sup> <a name="SecondaryLocationInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocationInput"></a>

```go
func SecondaryLocationInput() *string
```

- *Type:* *string

---

##### `PreferredLocation`<sup>Required</sup> <a name="PreferredLocation" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.preferredLocation"></a>

```go
func PreferredLocation() *string
```

- *Type:* *string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.secondaryLocation"></a>

```go
func SecondaryLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareenginePrivateCloudManagementClusterStretchedClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterStretchedClusterConfig">VmwareenginePrivateCloudManagementClusterStretchedClusterConfig</a>

---


### VmwareenginePrivateCloudNetworkConfigOutputReference <a name="VmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareenginePrivateCloudNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork">ResetVmwareEngineNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVmwareEngineNetwork` <a name="ResetVmwareEngineNetwork" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork"></a>

```go
func ResetVmwareEngineNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp">DnsServerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">ManagementIpAddressLayoutVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput">ManagementCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput">VmwareEngineNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">ManagementCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsServerIp`<sup>Required</sup> <a name="DnsServerIp" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp"></a>

```go
func DnsServerIp() *string
```

- *Type:* *string

---

##### `ManagementIpAddressLayoutVersion`<sup>Required</sup> <a name="ManagementIpAddressLayoutVersion" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```go
func ManagementIpAddressLayoutVersion() *f64
```

- *Type:* *f64

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```go
func VmwareEngineNetworkCanonical() *string
```

- *Type:* *string

---

##### `ManagementCidrInput`<sup>Optional</sup> <a name="ManagementCidrInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput"></a>

```go
func ManagementCidrInput() *string
```

- *Type:* *string

---

##### `VmwareEngineNetworkInput`<sup>Optional</sup> <a name="VmwareEngineNetworkInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput"></a>

```go
func VmwareEngineNetworkInput() *string
```

- *Type:* *string

---

##### `ManagementCidr`<sup>Required</sup> <a name="ManagementCidr" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```go
func ManagementCidr() *string
```

- *Type:* *string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```go
func VmwareEngineNetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

---


### VmwareenginePrivateCloudNsxList <a name="VmwareenginePrivateCloudNsxList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudNsxList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwareenginePrivateCloudNsxList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.get"></a>

```go
func Get(index *f64) VmwareenginePrivateCloudNsxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VmwareenginePrivateCloudNsxOutputReference <a name="VmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudNsxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwareenginePrivateCloudNsxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx">VmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareenginePrivateCloudNsx
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx">VmwareenginePrivateCloudNsx</a>

---


### VmwareenginePrivateCloudTimeoutsOutputReference <a name="VmwareenginePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareenginePrivateCloudTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareenginePrivateCloudVcenterList <a name="VmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudVcenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwareenginePrivateCloudVcenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.get"></a>

```go
func Get(index *f64) VmwareenginePrivateCloudVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VmwareenginePrivateCloudVcenterOutputReference <a name="VmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineprivatecloud"

vmwareengineprivatecloud.NewVmwareenginePrivateCloudVcenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwareenginePrivateCloudVcenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter">VmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwareenginePrivateCloudVcenter
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter">VmwareenginePrivateCloudVcenter</a>

---



