# `gkeBackupRestoreChannel` Submodule <a name="`gkeBackupRestoreChannel` Submodule" id="@cdktf/provider-google.gkeBackupRestoreChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestoreChannel <a name="GkeBackupRestoreChannel" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel google_gke_backup_restore_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

gkebackuprestorechannel.NewGkeBackupRestoreChannel(scope Construct, id *string, config GkeBackupRestoreChannelConfig) GkeBackupRestoreChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig">GkeBackupRestoreChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig">GkeBackupRestoreChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.putTimeouts"></a>

```go
func PutTimeouts(value GkeBackupRestoreChannelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeBackupRestoreChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

gkebackuprestorechannel.GkeBackupRestoreChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

gkebackuprestorechannel.GkeBackupRestoreChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

gkebackuprestorechannel.GkeBackupRestoreChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

gkebackuprestorechannel.GkeBackupRestoreChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeBackupRestoreChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeBackupRestoreChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeBackupRestoreChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupRestoreChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectId">DestinationProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference">GkeBackupRestoreChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectInput">DestinationProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProject">DestinationProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationProjectId`<sup>Required</sup> <a name="DestinationProjectId" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectId"></a>

```go
func DestinationProjectId() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeouts"></a>

```go
func Timeouts() GkeBackupRestoreChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference">GkeBackupRestoreChannelTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationProjectInput`<sup>Optional</sup> <a name="DestinationProjectInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProjectInput"></a>

```go
func DestinationProjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationProject`<sup>Required</sup> <a name="DestinationProject" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.destinationProject"></a>

```go
func DestinationProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestoreChannelConfig <a name="GkeBackupRestoreChannelConfig" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

&gkebackuprestorechannel.GkeBackupRestoreChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationProject: *string,
	Location: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.destinationProject">DestinationProject</a></code> | <code>*string</code> | The project where Backups will be restored. The format is 'projects/{project}'. {project} can only be a project number. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Restore Channel. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.name">Name</a></code> | <code>*string</code> | The full name of the RestoreChannel Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.description">Description</a></code> | <code>*string</code> | User specified descriptive string for this RestoreChannel. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#id GkeBackupRestoreChannel#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#project GkeBackupRestoreChannel#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationProject`<sup>Required</sup> <a name="DestinationProject" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.destinationProject"></a>

```go
DestinationProject *string
```

- *Type:* *string

The project where Backups will be restored. The format is 'projects/{project}'. {project} can only be a project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#destination_project GkeBackupRestoreChannel#destination_project}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Restore Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#location GkeBackupRestoreChannel#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full name of the RestoreChannel Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#name GkeBackupRestoreChannel#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User specified descriptive string for this RestoreChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#description GkeBackupRestoreChannel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#id GkeBackupRestoreChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#labels GkeBackupRestoreChannel#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#project GkeBackupRestoreChannel#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelConfig.property.timeouts"></a>

```go
Timeouts GkeBackupRestoreChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts">GkeBackupRestoreChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#timeouts GkeBackupRestoreChannel#timeouts}

---

### GkeBackupRestoreChannelTimeouts <a name="GkeBackupRestoreChannelTimeouts" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

&gkebackuprestorechannel.GkeBackupRestoreChannelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#create GkeBackupRestoreChannel#create}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#delete GkeBackupRestoreChannel#delete}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#update GkeBackupRestoreChannel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#create GkeBackupRestoreChannel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#delete GkeBackupRestoreChannel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/gke_backup_restore_channel#update GkeBackupRestoreChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestoreChannelTimeoutsOutputReference <a name="GkeBackupRestoreChannelTimeoutsOutputReference" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestorechannel"

gkebackuprestorechannel.NewGkeBackupRestoreChannelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestoreChannelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestoreChannel.GkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



