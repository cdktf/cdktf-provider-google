# `gkeBackupRestorePlanIamBinding` Submodule <a name="`gkeBackupRestorePlanIamBinding` Submodule" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeBackupRestorePlanIamBinding <a name="GkeBackupRestorePlanIamBinding" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding google_gke_backup_restore_plan_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

gkebackuprestoreplaniambinding.NewGkeBackupRestorePlanIamBinding(scope Construct, id *string, config GkeBackupRestorePlanIamBindingConfig) GkeBackupRestorePlanIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig">GkeBackupRestorePlanIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig">GkeBackupRestorePlanIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.putCondition"></a>

```go
func PutCondition(value GkeBackupRestorePlanIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeBackupRestorePlanIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

gkebackuprestoreplaniambinding.GkeBackupRestorePlanIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

gkebackuprestoreplaniambinding.GkeBackupRestorePlanIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

gkebackuprestoreplaniambinding.GkeBackupRestorePlanIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

gkebackuprestoreplaniambinding.GkeBackupRestorePlanIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeBackupRestorePlanIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeBackupRestorePlanIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeBackupRestorePlanIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeBackupRestorePlanIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference">GkeBackupRestorePlanIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.condition"></a>

```go
func Condition() GkeBackupRestorePlanIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference">GkeBackupRestorePlanIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GkeBackupRestorePlanIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeBackupRestorePlanIamBindingCondition <a name="GkeBackupRestorePlanIamBindingCondition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

&gkebackuprestoreplaniambinding.GkeBackupRestorePlanIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#expression GkeBackupRestorePlanIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#title GkeBackupRestorePlanIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#description GkeBackupRestorePlanIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#expression GkeBackupRestorePlanIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#title GkeBackupRestorePlanIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#description GkeBackupRestorePlanIamBinding#description}.

---

### GkeBackupRestorePlanIamBindingConfig <a name="GkeBackupRestorePlanIamBindingConfig" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

&gkebackuprestoreplaniambinding.GkeBackupRestorePlanIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#members GkeBackupRestorePlanIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#name GkeBackupRestorePlanIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#role GkeBackupRestorePlanIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#id GkeBackupRestorePlanIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#location GkeBackupRestorePlanIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#project GkeBackupRestorePlanIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#members GkeBackupRestorePlanIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#name GkeBackupRestorePlanIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#role GkeBackupRestorePlanIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.condition"></a>

```go
Condition GkeBackupRestorePlanIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#condition GkeBackupRestorePlanIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#id GkeBackupRestorePlanIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#location GkeBackupRestorePlanIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/gke_backup_restore_plan_iam_binding#project GkeBackupRestorePlanIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeBackupRestorePlanIamBindingConditionOutputReference <a name="GkeBackupRestorePlanIamBindingConditionOutputReference" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkebackuprestoreplaniambinding"

gkebackuprestoreplaniambinding.NewGkeBackupRestorePlanIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeBackupRestorePlanIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeBackupRestorePlanIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.gkeBackupRestorePlanIamBinding.GkeBackupRestorePlanIamBindingCondition">GkeBackupRestorePlanIamBindingCondition</a>

---



