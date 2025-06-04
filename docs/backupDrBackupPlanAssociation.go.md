# `backupDrBackupPlanAssociation` Submodule <a name="`backupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.backupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupPlanAssociation <a name="BackupDrBackupPlanAssociation" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.NewBackupDrBackupPlanAssociation(scope Construct, id *string, config BackupDrBackupPlanAssociationConfig) BackupDrBackupPlanAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig">BackupDrBackupPlanAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig">BackupDrBackupPlanAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts"></a>

```go
func PutTimeouts(value BackupDrBackupPlanAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.BackupDrBackupPlanAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.BackupDrBackupPlanAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.BackupDrBackupPlanAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.BackupDrBackupPlanAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupDrBackupPlanAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo">RulesConfigInfo</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">BackupPlanAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput">BackupPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId">BackupPlanAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```go
func LastSuccessfulBackupConsistencyTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RulesConfigInfo`<sup>Required</sup> <a name="RulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```go
func RulesConfigInfo() BackupDrBackupPlanAssociationRulesConfigInfoList
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts"></a>

```go
func Timeouts() BackupDrBackupPlanAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackupPlanAssociationIdInput`<sup>Optional</sup> <a name="BackupPlanAssociationIdInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```go
func BackupPlanAssociationIdInput() *string
```

- *Type:* *string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput"></a>

```go
func BackupPlanInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `BackupPlanAssociationId`<sup>Required</sup> <a name="BackupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```go
func BackupPlanAssociationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupPlanAssociationConfig <a name="BackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

&backupdrbackupplanassociation.BackupDrBackupPlanAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlan: *string,
	BackupPlanAssociationId: *string,
	Location: *string,
	Resource: *string,
	ResourceType: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | The BP with which resource needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">BackupPlanAssociationId</a></code> | <code>*string</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location">Location</a></code> | <code>*string</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource">Resource</a></code> | <code>*string</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | The resource type of workload on which backupplan is applied. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan"></a>

```go
BackupPlan *string
```

- *Type:* *string

The BP with which resource needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#backup_plan BackupDrBackupPlanAssociation#backup_plan}

---

##### `BackupPlanAssociationId`<sup>Required</sup> <a name="BackupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```go
BackupPlanAssociationId *string
```

- *Type:* *string

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#backup_plan_association_id BackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#location BackupDrBackupPlanAssociation#location}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#resource BackupDrBackupPlanAssociation#resource}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The resource type of workload on which backupplan is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#resource_type BackupDrBackupPlanAssociation#resource_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts"></a>

```go
Timeouts BackupDrBackupPlanAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#timeouts BackupDrBackupPlanAssociation#timeouts}

---

### BackupDrBackupPlanAssociationRulesConfigInfo <a name="BackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

&backupdrbackupplanassociation.BackupDrBackupPlanAssociationRulesConfigInfo {

}
```


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

&backupdrbackupplanassociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError {

}
```


### BackupDrBackupPlanAssociationTimeouts <a name="BackupDrBackupPlanAssociationTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

&backupdrbackupplanassociation.BackupDrBackupPlanAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.NewBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```go
func Get(index *f64) BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.NewBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### BackupDrBackupPlanAssociationRulesConfigInfoList <a name="BackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.NewBackupDrBackupPlanAssociationRulesConfigInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupDrBackupPlanAssociationRulesConfigInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```go
func Get(index *f64) BackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.NewBackupDrBackupPlanAssociationRulesConfigInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```go
func LastBackupError() BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupDrBackupPlanAssociationRulesConfigInfo
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a>

---


### BackupDrBackupPlanAssociationTimeoutsOutputReference <a name="BackupDrBackupPlanAssociationTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupplanassociation"

backupdrbackupplanassociation.NewBackupDrBackupPlanAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupDrBackupPlanAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



