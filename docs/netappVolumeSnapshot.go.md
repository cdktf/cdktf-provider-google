# `netappVolumeSnapshot` Submodule <a name="`netappVolumeSnapshot` Submodule" id="@cdktf/provider-google.netappVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeSnapshot <a name="NetappVolumeSnapshot" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot google_netapp_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

netappvolumesnapshot.NewNetappVolumeSnapshot(scope Construct, id *string, config NetappVolumeSnapshotConfig) NetappVolumeSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig">NetappVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig">NetappVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.putTimeouts"></a>

```go
func PutTimeouts(value NetappVolumeSnapshotTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

netappvolumesnapshot.NetappVolumeSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

netappvolumesnapshot.NetappVolumeSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

netappvolumesnapshot.NetappVolumeSnapshot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

netappvolumesnapshot.NetappVolumeSnapshot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappVolumeSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappVolumeSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappVolumeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference">NetappVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.usedBytes">UsedBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeouts"></a>

```go
func Timeouts() NetappVolumeSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference">NetappVolumeSnapshotTimeoutsOutputReference</a>

---

##### `UsedBytes`<sup>Required</sup> <a name="UsedBytes" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.usedBytes"></a>

```go
func UsedBytes() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeSnapshotConfig <a name="NetappVolumeSnapshotConfig" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

&netappvolumesnapshot.NetappVolumeSnapshotConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	VolumeName: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.location">Location</a></code> | <code>*string</code> | Name of the snapshot location. Snapshots are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.name">Name</a></code> | <code>*string</code> | The name of the snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.volumeName">VolumeName</a></code> | <code>*string</code> | The name of the volume to create the snapshot in. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.description">Description</a></code> | <code>*string</code> | Description for the snapshot. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#id NetappVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#project NetappVolumeSnapshot#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#location NetappVolumeSnapshot#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#name NetappVolumeSnapshot#name}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

The name of the volume to create the snapshot in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#volume_name NetappVolumeSnapshot#volume_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description for the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#description NetappVolumeSnapshot#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#id NetappVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#labels NetappVolumeSnapshot#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#project NetappVolumeSnapshot#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotConfig.property.timeouts"></a>

```go
Timeouts NetappVolumeSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts">NetappVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#timeouts NetappVolumeSnapshot#timeouts}

---

### NetappVolumeSnapshotTimeouts <a name="NetappVolumeSnapshotTimeouts" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

&netappvolumesnapshot.NetappVolumeSnapshotTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#create NetappVolumeSnapshot#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#delete NetappVolumeSnapshot#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#update NetappVolumeSnapshot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#create NetappVolumeSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#delete NetappVolumeSnapshot#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/netapp_volume_snapshot#update NetappVolumeSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeSnapshotTimeoutsOutputReference <a name="NetappVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappvolumesnapshot"

netappvolumesnapshot.NewNetappVolumeSnapshotTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeSnapshotTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappVolumeSnapshot.NetappVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



