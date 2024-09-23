# `gkeBackupRestorePlan` Submodule <a name="`gkeBackupRestorePlan` Submodule" id="@cdktf/provider-google.gkeBackupRestorePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestorePlan <a name="GkeBackupRestorePlan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan google_gke_backup_restore_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlan(scope Construct, id *string, config GkeBackupRestorePlanConfig) GkeBackupRestorePlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig">GkeBackupRestorePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig">GkeBackupRestorePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig">PutRestoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestoreConfig` <a name="PutRestoreConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig"></a>

```go
func PutRestoreConfig(value GkeBackupRestorePlanRestoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putRestoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts"></a>

```go
func PutTimeouts(value GkeBackupRestorePlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeBackupRestorePlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.GkeBackupRestorePlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.GkeBackupRestorePlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.GkeBackupRestorePlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.GkeBackupRestorePlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeBackupRestorePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeBackupRestorePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeBackupRestorePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupRestorePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfig">RestoreConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference">GkeBackupRestorePlanRestoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference">GkeBackupRestorePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlanInput">BackupPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfigInput">RestoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RestoreConfig`<sup>Required</sup> <a name="RestoreConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfig"></a>

```go
func RestoreConfig() GkeBackupRestorePlanRestoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference">GkeBackupRestorePlanRestoreConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeouts"></a>

```go
func Timeouts() GkeBackupRestorePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference">GkeBackupRestorePlanTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlanInput"></a>

```go
func BackupPlanInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestoreConfigInput`<sup>Optional</sup> <a name="RestoreConfigInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.restoreConfigInput"></a>

```go
func RestoreConfigInput() GkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestorePlanConfig <a name="GkeBackupRestorePlanConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlan: *string,
	Cluster: *string,
	Location: *string,
	Name: *string,
	RestoreConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The source cluster from which Restores will be created via this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Restore Plan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.name">Name</a></code> | <code>*string</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.restoreConfig">RestoreConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | restore_config block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.description">Description</a></code> | <code>*string</code> | User specified descriptive string for this RestorePlan. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.backupPlan"></a>

```go
BackupPlan *string
```

- *Type:* *string

A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#backup_plan GkeBackupRestorePlan#backup_plan}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The source cluster from which Restores will be created via this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#cluster GkeBackupRestorePlan#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Restore Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#location GkeBackupRestorePlan#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}

---

##### `RestoreConfig`<sup>Required</sup> <a name="RestoreConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.restoreConfig"></a>

```go
RestoreConfig GkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

restore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#restore_config GkeBackupRestorePlan#restore_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User specified descriptive string for this RestorePlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#labels GkeBackupRestorePlan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanConfig.property.timeouts"></a>

```go
Timeouts GkeBackupRestorePlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts">GkeBackupRestorePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#timeouts GkeBackupRestorePlan#timeouts}

---

### GkeBackupRestorePlanRestoreConfig <a name="GkeBackupRestorePlanRestoreConfig" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfig {
	AllNamespaces: interface{},
	ClusterResourceConflictPolicy: *string,
	ClusterResourceRestoreScope: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope,
	ExcludedNamespaces: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces,
	NamespacedResourceRestoreMode: *string,
	NoNamespaces: interface{},
	RestoreOrder: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder,
	SelectedApplications: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications,
	SelectedNamespaces: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces,
	TransformationRules: interface{},
	VolumeDataRestorePolicy: *string,
	VolumeDataRestorePolicyBindings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.allNamespaces">AllNamespaces</a></code> | <code>interface{}</code> | If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy">ClusterResourceConflictPolicy</a></code> | <code>*string</code> | Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope">ClusterResourceRestoreScope</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | cluster_resource_restore_scope block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | excluded_namespaces block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode">NamespacedResourceRestoreMode</a></code> | <code>*string</code> | Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.noNamespaces">NoNamespaces</a></code> | <code>interface{}</code> | Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.restoreOrder">RestoreOrder</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | restore_order block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | selected_namespaces block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.transformationRules">TransformationRules</a></code> | <code>interface{}</code> | transformation_rules block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy">VolumeDataRestorePolicy</a></code> | <code>*string</code> | Specifies the mechanism to be used to restore volume data. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicyBindings">VolumeDataRestorePolicyBindings</a></code> | <code>interface{}</code> | volume_data_restore_policy_bindings block. |

---

##### `AllNamespaces`<sup>Optional</sup> <a name="AllNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.allNamespaces"></a>

```go
AllNamespaces interface{}
```

- *Type:* interface{}

If True, restore all namespaced resources in the Backup. Setting this field to False will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#all_namespaces GkeBackupRestorePlan#all_namespaces}

---

##### `ClusterResourceConflictPolicy`<sup>Optional</sup> <a name="ClusterResourceConflictPolicy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceConflictPolicy"></a>

```go
ClusterResourceConflictPolicy *string
```

- *Type:* *string

Defines the behavior for handling the situation where cluster-scoped resources being restored already exist in the target cluster.

This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#cluster_resource_conflict_policy GkeBackupRestorePlan#cluster_resource_conflict_policy}

---

##### `ClusterResourceRestoreScope`<sup>Optional</sup> <a name="ClusterResourceRestoreScope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.clusterResourceRestoreScope"></a>

```go
ClusterResourceRestoreScope GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

cluster_resource_restore_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#cluster_resource_restore_scope GkeBackupRestorePlan#cluster_resource_restore_scope}

---

##### `ExcludedNamespaces`<sup>Optional</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.excludedNamespaces"></a>

```go
ExcludedNamespaces GkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

excluded_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#excluded_namespaces GkeBackupRestorePlan#excluded_namespaces}

---

##### `NamespacedResourceRestoreMode`<sup>Optional</sup> <a name="NamespacedResourceRestoreMode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.namespacedResourceRestoreMode"></a>

```go
NamespacedResourceRestoreMode *string
```

- *Type:* *string

Defines the behavior for handling the situation where sets of namespaced resources being restored already exist in the target cluster.

This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT", "MERGE_SKIP_ON_CONFLICT", "MERGE_REPLACE_VOLUME_ON_CONFLICT", "MERGE_REPLACE_ON_CONFLICT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaced_resource_restore_mode GkeBackupRestorePlan#namespaced_resource_restore_mode}

---

##### `NoNamespaces`<sup>Optional</sup> <a name="NoNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.noNamespaces"></a>

```go
NoNamespaces interface{}
```

- *Type:* interface{}

Do not restore any namespaced resources if set to "True". Specifying this field to "False" is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#no_namespaces GkeBackupRestorePlan#no_namespaces}

---

##### `RestoreOrder`<sup>Optional</sup> <a name="RestoreOrder" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.restoreOrder"></a>

```go
RestoreOrder GkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a>

restore_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#restore_order GkeBackupRestorePlan#restore_order}

---

##### `SelectedApplications`<sup>Optional</sup> <a name="SelectedApplications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedApplications"></a>

```go
SelectedApplications GkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#selected_applications GkeBackupRestorePlan#selected_applications}

---

##### `SelectedNamespaces`<sup>Optional</sup> <a name="SelectedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.selectedNamespaces"></a>

```go
SelectedNamespaces GkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#selected_namespaces GkeBackupRestorePlan#selected_namespaces}

---

##### `TransformationRules`<sup>Optional</sup> <a name="TransformationRules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.transformationRules"></a>

```go
TransformationRules interface{}
```

- *Type:* interface{}

transformation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#transformation_rules GkeBackupRestorePlan#transformation_rules}

---

##### `VolumeDataRestorePolicy`<sup>Optional</sup> <a name="VolumeDataRestorePolicy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicy"></a>

```go
VolumeDataRestorePolicy *string
```

- *Type:* *string

Specifies the mechanism to be used to restore volume data.

This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#volume_data_restore_policy GkeBackupRestorePlan#volume_data_restore_policy}

---

##### `VolumeDataRestorePolicyBindings`<sup>Optional</sup> <a name="VolumeDataRestorePolicyBindings" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig.property.volumeDataRestorePolicyBindings"></a>

```go
VolumeDataRestorePolicyBindings interface{}
```

- *Type:* interface{}

volume_data_restore_policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#volume_data_restore_policy_bindings GkeBackupRestorePlan#volume_data_restore_policy_bindings}

---

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope {
	AllGroupKinds: interface{},
	ExcludedGroupKinds: interface{},
	NoGroupKinds: interface{},
	SelectedGroupKinds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds">AllGroupKinds</a></code> | <code>interface{}</code> | If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds">ExcludedGroupKinds</a></code> | <code>interface{}</code> | excluded_group_kinds block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds">NoGroupKinds</a></code> | <code>interface{}</code> | If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds">SelectedGroupKinds</a></code> | <code>interface{}</code> | selected_group_kinds block. |

---

##### `AllGroupKinds`<sup>Optional</sup> <a name="AllGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.allGroupKinds"></a>

```go
AllGroupKinds interface{}
```

- *Type:* interface{}

If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#all_group_kinds GkeBackupRestorePlan#all_group_kinds}

---

##### `ExcludedGroupKinds`<sup>Optional</sup> <a name="ExcludedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.excludedGroupKinds"></a>

```go
ExcludedGroupKinds interface{}
```

- *Type:* interface{}

excluded_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#excluded_group_kinds GkeBackupRestorePlan#excluded_group_kinds}

---

##### `NoGroupKinds`<sup>Optional</sup> <a name="NoGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.noGroupKinds"></a>

```go
NoGroupKinds interface{}
```

- *Type:* interface{}

If True, no cluster-scoped resources will be restored. Mutually exclusive to any other field in 'clusterResourceRestoreScope'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#no_group_kinds GkeBackupRestorePlan#no_group_kinds}

---

##### `SelectedGroupKinds`<sup>Optional</sup> <a name="SelectedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope.property.selectedGroupKinds"></a>

```go
SelectedGroupKinds interface{}
```

- *Type:* interface{}

selected_group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#selected_group_kinds GkeBackupRestorePlan#selected_group_kinds}

---

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigExcludedNamespaces <a name="GkeBackupRestorePlanRestoreConfigExcludedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces {
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | A list of Kubernetes Namespaces. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

### GkeBackupRestorePlanRestoreConfigRestoreOrder <a name="GkeBackupRestorePlanRestoreConfigRestoreOrder" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigRestoreOrder {
	GroupKindDependencies: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder.property.groupKindDependencies">GroupKindDependencies</a></code> | <code>interface{}</code> | group_kind_dependencies block. |

---

##### `GroupKindDependencies`<sup>Required</sup> <a name="GroupKindDependencies" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder.property.groupKindDependencies"></a>

```go
GroupKindDependencies interface{}
```

- *Type:* interface{}

group_kind_dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#group_kind_dependencies GkeBackupRestorePlan#group_kind_dependencies}

---

### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies {
	Requiring: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring,
	Satisfying: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.requiring">Requiring</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | requiring block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.satisfying">Satisfying</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | satisfying block. |

---

##### `Requiring`<sup>Required</sup> <a name="Requiring" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.requiring"></a>

```go
Requiring GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

requiring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#requiring GkeBackupRestorePlan#requiring}

---

##### `Satisfying`<sup>Required</sup> <a name="Satisfying" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies.property.satisfying"></a>

```go
Satisfying GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

satisfying block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#satisfying GkeBackupRestorePlan#satisfying}

---

### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigSelectedApplications <a name="GkeBackupRestorePlanRestoreConfigSelectedApplications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigSelectedApplications {
	NamespacedNames: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames">NamespacedNames</a></code> | <code>interface{}</code> | namespaced_names block. |

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications.property.namespacedNames"></a>

```go
NamespacedNames interface{}
```

- *Type:* interface{}

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaced_names GkeBackupRestorePlan#namespaced_names}

---

### GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames {
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name">Name</a></code> | <code>*string</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of a Kubernetes Resource. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespace GkeBackupRestorePlan#namespace}

---

### GkeBackupRestorePlanRestoreConfigSelectedNamespaces <a name="GkeBackupRestorePlanRestoreConfigSelectedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces {
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | A list of Kubernetes Namespaces. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

### GkeBackupRestorePlanRestoreConfigTransformationRules <a name="GkeBackupRestorePlanRestoreConfigTransformationRules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigTransformationRules {
	FieldActions: interface{},
	Description: *string,
	ResourceFilter: github.com/cdktf/cdktf-provider-google-go/google/v14.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions">FieldActions</a></code> | <code>interface{}</code> | field_actions block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.description">Description</a></code> | <code>*string</code> | The description is a user specified string description of the transformation rule. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | resource_filter block. |

---

##### `FieldActions`<sup>Required</sup> <a name="FieldActions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.fieldActions"></a>

```go
FieldActions interface{}
```

- *Type:* interface{}

field_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#field_actions GkeBackupRestorePlan#field_actions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description is a user specified string description of the transformation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}

---

##### `ResourceFilter`<sup>Optional</sup> <a name="ResourceFilter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRules.property.resourceFilter"></a>

```go
ResourceFilter GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_filter GkeBackupRestorePlan#resource_filter}

---

### GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions {
	Op: *string,
	FromPath: *string,
	Path: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op">Op</a></code> | <code>*string</code> | Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"]. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath">FromPath</a></code> | <code>*string</code> | A string containing a JSON Pointer value that references the location in the target document to move the value from. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path">Path</a></code> | <code>*string</code> | A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value">Value</a></code> | <code>*string</code> | A string that specifies the desired value in string format to use for transformation. |

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.op"></a>

```go
Op *string
```

- *Type:* *string

Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#op GkeBackupRestorePlan#op}

---

##### `FromPath`<sup>Optional</sup> <a name="FromPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.fromPath"></a>

```go
FromPath *string
```

- *Type:* *string

A string containing a JSON Pointer value that references the location in the target document to move the value from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#from_path GkeBackupRestorePlan#from_path}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.path"></a>

```go
Path *string
```

- *Type:* *string

A string containing a JSON-Pointer value that references a location within the target document where the operation is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#path GkeBackupRestorePlan#path}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions.property.value"></a>

```go
Value *string
```

- *Type:* *string

A string that specifies the desired value in string format to use for transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#value GkeBackupRestorePlan#value}

---

### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter {
	GroupKinds: interface{},
	JsonPath: *string,
	Namespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds">GroupKinds</a></code> | <code>interface{}</code> | group_kinds block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath">JsonPath</a></code> | <code>*string</code> | This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation). |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | (Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup. |

---

##### `GroupKinds`<sup>Optional</sup> <a name="GroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.groupKinds"></a>

```go
GroupKinds interface{}
```

- *Type:* interface{}

group_kinds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#group_kinds GkeBackupRestorePlan#group_kinds}

---

##### `JsonPath`<sup>Optional</sup> <a name="JsonPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.jsonPath"></a>

```go
JsonPath *string
```

- *Type:* *string

This is a JSONPath expression that matches specific fields of candidate resources and it operates as a filtering parameter (resources that are not matched with this expression will not be candidates for transformation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#json_path GkeBackupRestorePlan#json_path}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

(Filtering parameter) Any resource subject to transformation must be contained within one of the listed Kubernetes Namespace in the Backup.

If this field is not provided, no namespace filtering will
be performed (all resources in all Namespaces, including all
cluster-scoped resources, will be candidates for transformation).
To mix cluster-scoped and namespaced resources in the same rule,
use an empty string ("") as one of the target namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}

---

### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds {
	ResourceGroup: *string,
	ResourceKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc. |

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

API Group string of a Kubernetes resource, e.g. "apiextensions.k8s.io", "storage.k8s.io", etc. Use empty string for core group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}

---

##### `ResourceKind`<sup>Optional</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds.property.resourceKind"></a>

```go
ResourceKind *string
```

- *Type:* *string

Kind of a Kubernetes resource, e.g. "CustomResourceDefinition", "StorageClass", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}

---

### GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings <a name="GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings {
	Policy: *string,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.policy">Policy</a></code> | <code>*string</code> | Specifies the mechanism to be used to restore this volume data. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.volumeType">VolumeType</a></code> | <code>*string</code> | The volume type, as determined by the PVC's bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"]. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Specifies the mechanism to be used to restore this volume data.

See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#policy GkeBackupRestorePlan#policy}

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The volume type, as determined by the PVC's bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#volume_type GkeBackupRestorePlan#volume_type}

---

### GkeBackupRestorePlanTimeouts <a name="GkeBackupRestorePlanTimeouts" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

&gkebackuprestoreplan.GkeBackupRestorePlanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#create GkeBackupRestorePlan#create}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#delete GkeBackupRestorePlan#delete}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#update GkeBackupRestorePlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#create GkeBackupRestorePlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#delete GkeBackupRestorePlan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#update GkeBackupRestorePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds">PutExcludedGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds">PutSelectedGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds">ResetAllGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds">ResetExcludedGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds">ResetNoGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds">ResetSelectedGroupKinds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedGroupKinds` <a name="PutExcludedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds"></a>

```go
func PutExcludedGroupKinds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putExcludedGroupKinds.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelectedGroupKinds` <a name="PutSelectedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds"></a>

```go
func PutSelectedGroupKinds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.putSelectedGroupKinds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllGroupKinds` <a name="ResetAllGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetAllGroupKinds"></a>

```go
func ResetAllGroupKinds()
```

##### `ResetExcludedGroupKinds` <a name="ResetExcludedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetExcludedGroupKinds"></a>

```go
func ResetExcludedGroupKinds()
```

##### `ResetNoGroupKinds` <a name="ResetNoGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetNoGroupKinds"></a>

```go
func ResetNoGroupKinds()
```

##### `ResetSelectedGroupKinds` <a name="ResetSelectedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.resetSelectedGroupKinds"></a>

```go
func ResetSelectedGroupKinds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds">ExcludedGroupKinds</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds">SelectedGroupKinds</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput">AllGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput">ExcludedGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput">NoGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput">SelectedGroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds">AllGroupKinds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds">NoGroupKinds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedGroupKinds`<sup>Required</sup> <a name="ExcludedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKinds"></a>

```go
func ExcludedGroupKinds() GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList</a>

---

##### `SelectedGroupKinds`<sup>Required</sup> <a name="SelectedGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKinds"></a>

```go
func SelectedGroupKinds() GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList</a>

---

##### `AllGroupKindsInput`<sup>Optional</sup> <a name="AllGroupKindsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKindsInput"></a>

```go
func AllGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedGroupKindsInput`<sup>Optional</sup> <a name="ExcludedGroupKindsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.excludedGroupKindsInput"></a>

```go
func ExcludedGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `NoGroupKindsInput`<sup>Optional</sup> <a name="NoGroupKindsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKindsInput"></a>

```go
func NoGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `SelectedGroupKindsInput`<sup>Optional</sup> <a name="SelectedGroupKindsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.selectedGroupKindsInput"></a>

```go
func SelectedGroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `AllGroupKinds`<sup>Required</sup> <a name="AllGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.allGroupKinds"></a>

```go
func AllGroupKinds() interface{}
```

- *Type:* interface{}

---

##### `NoGroupKinds`<sup>Required</sup> <a name="NoGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.noGroupKinds"></a>

```go
func NoGroupKinds() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference <a name="GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference <a name="GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---


### GkeBackupRestorePlanRestoreConfigOutputReference <a name="GkeBackupRestorePlanRestoreConfigOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope">PutClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces">PutExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder">PutRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications">PutSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces">PutSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules">PutTransformationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings">PutVolumeDataRestorePolicyBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces">ResetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy">ResetClusterResourceConflictPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope">ResetClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces">ResetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode">ResetNamespacedResourceRestoreMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces">ResetNoNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetRestoreOrder">ResetRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications">ResetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces">ResetSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules">ResetTransformationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy">ResetVolumeDataRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicyBindings">ResetVolumeDataRestorePolicyBindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterResourceRestoreScope` <a name="PutClusterResourceRestoreScope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope"></a>

```go
func PutClusterResourceRestoreScope(value GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putClusterResourceRestoreScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---

##### `PutExcludedNamespaces` <a name="PutExcludedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces"></a>

```go
func PutExcludedNamespaces(value GkeBackupRestorePlanRestoreConfigExcludedNamespaces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putExcludedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---

##### `PutRestoreOrder` <a name="PutRestoreOrder" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder"></a>

```go
func PutRestoreOrder(value GkeBackupRestorePlanRestoreConfigRestoreOrder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putRestoreOrder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---

##### `PutSelectedApplications` <a name="PutSelectedApplications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications"></a>

```go
func PutSelectedApplications(value GkeBackupRestorePlanRestoreConfigSelectedApplications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---

##### `PutSelectedNamespaces` <a name="PutSelectedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces"></a>

```go
func PutSelectedNamespaces(value GkeBackupRestorePlanRestoreConfigSelectedNamespaces)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---

##### `PutTransformationRules` <a name="PutTransformationRules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules"></a>

```go
func PutTransformationRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putTransformationRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumeDataRestorePolicyBindings` <a name="PutVolumeDataRestorePolicyBindings" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings"></a>

```go
func PutVolumeDataRestorePolicyBindings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.putVolumeDataRestorePolicyBindings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllNamespaces` <a name="ResetAllNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetAllNamespaces"></a>

```go
func ResetAllNamespaces()
```

##### `ResetClusterResourceConflictPolicy` <a name="ResetClusterResourceConflictPolicy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceConflictPolicy"></a>

```go
func ResetClusterResourceConflictPolicy()
```

##### `ResetClusterResourceRestoreScope` <a name="ResetClusterResourceRestoreScope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetClusterResourceRestoreScope"></a>

```go
func ResetClusterResourceRestoreScope()
```

##### `ResetExcludedNamespaces` <a name="ResetExcludedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetExcludedNamespaces"></a>

```go
func ResetExcludedNamespaces()
```

##### `ResetNamespacedResourceRestoreMode` <a name="ResetNamespacedResourceRestoreMode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNamespacedResourceRestoreMode"></a>

```go
func ResetNamespacedResourceRestoreMode()
```

##### `ResetNoNamespaces` <a name="ResetNoNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetNoNamespaces"></a>

```go
func ResetNoNamespaces()
```

##### `ResetRestoreOrder` <a name="ResetRestoreOrder" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetRestoreOrder"></a>

```go
func ResetRestoreOrder()
```

##### `ResetSelectedApplications` <a name="ResetSelectedApplications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedApplications"></a>

```go
func ResetSelectedApplications()
```

##### `ResetSelectedNamespaces` <a name="ResetSelectedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetSelectedNamespaces"></a>

```go
func ResetSelectedNamespaces()
```

##### `ResetTransformationRules` <a name="ResetTransformationRules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetTransformationRules"></a>

```go
func ResetTransformationRules()
```

##### `ResetVolumeDataRestorePolicy` <a name="ResetVolumeDataRestorePolicy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicy"></a>

```go
func ResetVolumeDataRestorePolicy()
```

##### `ResetVolumeDataRestorePolicyBindings` <a name="ResetVolumeDataRestorePolicyBindings" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.resetVolumeDataRestorePolicyBindings"></a>

```go
func ResetVolumeDataRestorePolicyBindings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope">ClusterResourceRestoreScope</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrder">RestoreOrder</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference">GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications">SelectedApplications</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces">SelectedNamespaces</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules">TransformationRules</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList">GkeBackupRestorePlanRestoreConfigTransformationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindings">VolumeDataRestorePolicyBindings</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList">GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput">AllNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput">ClusterResourceConflictPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput">ClusterResourceRestoreScopeInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput">ExcludedNamespacesInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput">NamespacedResourceRestoreModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput">NoNamespacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrderInput">RestoreOrderInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput">SelectedApplicationsInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput">SelectedNamespacesInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput">TransformationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindingsInput">VolumeDataRestorePolicyBindingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput">VolumeDataRestorePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces">AllNamespaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy">ClusterResourceConflictPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode">NamespacedResourceRestoreMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces">NoNamespaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy">VolumeDataRestorePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterResourceRestoreScope`<sup>Required</sup> <a name="ClusterResourceRestoreScope" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScope"></a>

```go
func ClusterResourceRestoreScope() GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference</a>

---

##### `ExcludedNamespaces`<sup>Required</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespaces"></a>

```go
func ExcludedNamespaces() GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference</a>

---

##### `RestoreOrder`<sup>Required</sup> <a name="RestoreOrder" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrder"></a>

```go
func RestoreOrder() GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference">GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference</a>

---

##### `SelectedApplications`<sup>Required</sup> <a name="SelectedApplications" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplications"></a>

```go
func SelectedApplications() GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference">GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference</a>

---

##### `SelectedNamespaces`<sup>Required</sup> <a name="SelectedNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespaces"></a>

```go
func SelectedNamespaces() GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference">GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference</a>

---

##### `TransformationRules`<sup>Required</sup> <a name="TransformationRules" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRules"></a>

```go
func TransformationRules() GkeBackupRestorePlanRestoreConfigTransformationRulesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList">GkeBackupRestorePlanRestoreConfigTransformationRulesList</a>

---

##### `VolumeDataRestorePolicyBindings`<sup>Required</sup> <a name="VolumeDataRestorePolicyBindings" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindings"></a>

```go
func VolumeDataRestorePolicyBindings() GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList">GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList</a>

---

##### `AllNamespacesInput`<sup>Optional</sup> <a name="AllNamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespacesInput"></a>

```go
func AllNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterResourceConflictPolicyInput`<sup>Optional</sup> <a name="ClusterResourceConflictPolicyInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicyInput"></a>

```go
func ClusterResourceConflictPolicyInput() *string
```

- *Type:* *string

---

##### `ClusterResourceRestoreScopeInput`<sup>Optional</sup> <a name="ClusterResourceRestoreScopeInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceRestoreScopeInput"></a>

```go
func ClusterResourceRestoreScopeInput() GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope">GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope</a>

---

##### `ExcludedNamespacesInput`<sup>Optional</sup> <a name="ExcludedNamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.excludedNamespacesInput"></a>

```go
func ExcludedNamespacesInput() GkeBackupRestorePlanRestoreConfigExcludedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigExcludedNamespaces">GkeBackupRestorePlanRestoreConfigExcludedNamespaces</a>

---

##### `NamespacedResourceRestoreModeInput`<sup>Optional</sup> <a name="NamespacedResourceRestoreModeInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreModeInput"></a>

```go
func NamespacedResourceRestoreModeInput() *string
```

- *Type:* *string

---

##### `NoNamespacesInput`<sup>Optional</sup> <a name="NoNamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespacesInput"></a>

```go
func NoNamespacesInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreOrderInput`<sup>Optional</sup> <a name="RestoreOrderInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.restoreOrderInput"></a>

```go
func RestoreOrderInput() GkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---

##### `SelectedApplicationsInput`<sup>Optional</sup> <a name="SelectedApplicationsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedApplicationsInput"></a>

```go
func SelectedApplicationsInput() GkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---

##### `SelectedNamespacesInput`<sup>Optional</sup> <a name="SelectedNamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.selectedNamespacesInput"></a>

```go
func SelectedNamespacesInput() GkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---

##### `TransformationRulesInput`<sup>Optional</sup> <a name="TransformationRulesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.transformationRulesInput"></a>

```go
func TransformationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeDataRestorePolicyBindingsInput`<sup>Optional</sup> <a name="VolumeDataRestorePolicyBindingsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyBindingsInput"></a>

```go
func VolumeDataRestorePolicyBindingsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeDataRestorePolicyInput`<sup>Optional</sup> <a name="VolumeDataRestorePolicyInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicyInput"></a>

```go
func VolumeDataRestorePolicyInput() *string
```

- *Type:* *string

---

##### `AllNamespaces`<sup>Required</sup> <a name="AllNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.allNamespaces"></a>

```go
func AllNamespaces() interface{}
```

- *Type:* interface{}

---

##### `ClusterResourceConflictPolicy`<sup>Required</sup> <a name="ClusterResourceConflictPolicy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.clusterResourceConflictPolicy"></a>

```go
func ClusterResourceConflictPolicy() *string
```

- *Type:* *string

---

##### `NamespacedResourceRestoreMode`<sup>Required</sup> <a name="NamespacedResourceRestoreMode" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.namespacedResourceRestoreMode"></a>

```go
func NamespacedResourceRestoreMode() *string
```

- *Type:* *string

---

##### `NoNamespaces`<sup>Required</sup> <a name="NoNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.noNamespaces"></a>

```go
func NoNamespaces() interface{}
```

- *Type:* interface{}

---

##### `VolumeDataRestorePolicy`<sup>Required</sup> <a name="VolumeDataRestorePolicy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.volumeDataRestorePolicy"></a>

```go
func VolumeDataRestorePolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfig">GkeBackupRestorePlanRestoreConfig</a>

---


### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring">PutRequiring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying">PutSatisfying</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiring` <a name="PutRequiring" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring"></a>

```go
func PutRequiring(value GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putRequiring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---

##### `PutSatisfying` <a name="PutSatisfying" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying"></a>

```go
func PutSatisfying(value GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.putSatisfying.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiring">Requiring</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfying">Satisfying</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiringInput">RequiringInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfyingInput">SatisfyingInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Requiring`<sup>Required</sup> <a name="Requiring" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiring"></a>

```go
func Requiring() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference</a>

---

##### `Satisfying`<sup>Required</sup> <a name="Satisfying" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfying"></a>

```go
func Satisfying() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference</a>

---

##### `RequiringInput`<sup>Optional</sup> <a name="RequiringInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.requiringInput"></a>

```go
func RequiringInput() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---

##### `SatisfyingInput`<sup>Optional</sup> <a name="SatisfyingInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.satisfyingInput"></a>

```go
func SatisfyingInput() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring</a>

---


### GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying</a>

---


### GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference <a name="GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies">PutGroupKindDependencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupKindDependencies` <a name="PutGroupKindDependencies" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies"></a>

```go
func PutGroupKindDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.putGroupKindDependencies.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependencies">GroupKindDependencies</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependenciesInput">GroupKindDependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupKindDependencies`<sup>Required</sup> <a name="GroupKindDependencies" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependencies"></a>

```go
func GroupKindDependencies() GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList">GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList</a>

---

##### `GroupKindDependenciesInput`<sup>Optional</sup> <a name="GroupKindDependenciesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.groupKindDependenciesInput"></a>

```go
func GroupKindDependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigRestoreOrder
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigRestoreOrder">GkeBackupRestorePlanRestoreConfigRestoreOrder</a>

---


### GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference <a name="GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames">PutNamespacedNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespacedNames` <a name="PutNamespacedNames" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```go
func PutNamespacedNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames">NamespacedNames</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">NamespacedNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacedNames`<sup>Required</sup> <a name="NamespacedNames" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```go
func NamespacedNames() GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList">GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `NamespacedNamesInput`<sup>Optional</sup> <a name="NamespacedNamesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```go
func NamespacedNamesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigSelectedApplications
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedApplications">GkeBackupRestorePlanRestoreConfigSelectedApplications</a>

---


### GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference <a name="GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigSelectedNamespaces
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigSelectedNamespaces">GkeBackupRestorePlanRestoreConfigSelectedNamespaces</a>

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath">ResetFromPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPath` <a name="ResetFromPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetFromPath"></a>

```go
func ResetFromPath()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput">FromPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath">FromPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPathInput`<sup>Optional</sup> <a name="FromPathInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPathInput"></a>

```go
func FromPathInput() *string
```

- *Type:* *string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FromPath`<sup>Required</sup> <a name="FromPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.fromPath"></a>

```go
func FromPath() *string
```

- *Type:* *string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesList <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigTransformationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions">PutFieldActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter">PutResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter">ResetResourceFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldActions` <a name="PutFieldActions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions"></a>

```go
func PutFieldActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putFieldActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceFilter` <a name="PutResourceFilter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter"></a>

```go
func PutResourceFilter(value GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceFilter` <a name="ResetResourceFilter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.resetResourceFilter"></a>

```go
func ResetResourceFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions">FieldActions</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput">FieldActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput">ResourceFilterInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldActions`<sup>Required</sup> <a name="FieldActions" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActions"></a>

```go
func FieldActions() GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList">GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList</a>

---

##### `ResourceFilter`<sup>Required</sup> <a name="ResourceFilter" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilter"></a>

```go
func ResourceFilter() GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FieldActionsInput`<sup>Optional</sup> <a name="FieldActionsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.fieldActionsInput"></a>

```go
func FieldActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceFilterInput`<sup>Optional</sup> <a name="ResourceFilterInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.resourceFilterInput"></a>

```go
func ResourceFilterInput() GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind">ResetResourceKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetResourceKind` <a name="ResetResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.resetResourceKind"></a>

```go
func ResetResourceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput">ResourceKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind">ResourceKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `ResourceKindInput`<sup>Optional</sup> <a name="ResourceKindInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKindInput"></a>

```go
func ResourceKindInput() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `ResourceKind`<sup>Required</sup> <a name="ResourceKind" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.resourceKind"></a>

```go
func ResourceKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference <a name="GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds">PutGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds">ResetGroupKinds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath">ResetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces">ResetNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupKinds` <a name="PutGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds"></a>

```go
func PutGroupKinds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.putGroupKinds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGroupKinds` <a name="ResetGroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetGroupKinds"></a>

```go
func ResetGroupKinds()
```

##### `ResetJsonPath` <a name="ResetJsonPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetJsonPath"></a>

```go
func ResetJsonPath()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.resetNamespaces"></a>

```go
func ResetNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds">GroupKinds</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput">GroupKindsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath">JsonPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupKinds`<sup>Required</sup> <a name="GroupKinds" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKinds"></a>

```go
func GroupKinds() GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList</a>

---

##### `GroupKindsInput`<sup>Optional</sup> <a name="GroupKindsInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.groupKindsInput"></a>

```go
func GroupKindsInput() interface{}
```

- *Type:* interface{}

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPathInput"></a>

```go
func JsonPathInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.jsonPath"></a>

```go
func JsonPath() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter">GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter</a>

---


### GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList <a name="GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get"></a>

```go
func Get(index *f64) GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference <a name="GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeBackupRestorePlanTimeoutsOutputReference <a name="GkeBackupRestorePlanTimeoutsOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/gkebackuprestoreplan"

gkebackuprestoreplan.NewGkeBackupRestorePlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlan.GkeBackupRestorePlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



