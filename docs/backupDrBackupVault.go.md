# `backupDrBackupVault` Submodule <a name="`backupDrBackupVault` Submodule" id="@cdktf/provider-google.backupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupVault <a name="BackupDrBackupVault" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

backupdrbackupvault.NewBackupDrBackupVault(scope Construct, id *string, config BackupDrBackupVaultConfig) BackupDrBackupVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig">BackupDrBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig">BackupDrBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction">ResetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing">ResetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetBackupRetentionInheritance">ResetBackupRetentionInheritance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime">ResetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences">ResetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources">ResetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts"></a>

```go
func PutTimeouts(value BackupDrBackupVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---

##### `ResetAccessRestriction` <a name="ResetAccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction"></a>

```go
func ResetAccessRestriction()
```

##### `ResetAllowMissing` <a name="ResetAllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing"></a>

```go
func ResetAllowMissing()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBackupRetentionInheritance` <a name="ResetBackupRetentionInheritance" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetBackupRetentionInheritance"></a>

```go
func ResetBackupRetentionInheritance()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEffectiveTime` <a name="ResetEffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime"></a>

```go
func ResetEffectiveTime()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate"></a>

```go
func ResetForceUpdate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreBackupPlanReferences` <a name="ResetIgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```go
func ResetIgnoreBackupPlanReferences()
```

##### `ResetIgnoreInactiveDatasources` <a name="ResetIgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```go
func ResetIgnoreInactiveDatasources()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

backupdrbackupvault.BackupDrBackupVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

backupdrbackupvault.BackupDrBackupVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

backupdrbackupvault.BackupDrBackupVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

backupdrbackupvault.BackupDrBackupVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount">BackupCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable">Deletable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput">AccessRestrictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput">AllowMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">BackupMinimumEnforcedRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritanceInput">BackupRetentionInheritanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput">EffectiveTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput">IgnoreBackupPlanReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput">IgnoreInactiveDatasourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction">AccessRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing">AllowMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritance">BackupRetentionInheritance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime">EffectiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount"></a>

```go
func BackupCount() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable"></a>

```go
func Deletable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts"></a>

```go
func Timeouts() BackupDrBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes"></a>

```go
func TotalStoredBytes() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessRestrictionInput`<sup>Optional</sup> <a name="AccessRestrictionInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput"></a>

```go
func AccessRestrictionInput() *string
```

- *Type:* *string

---

##### `AllowMissingInput`<sup>Optional</sup> <a name="AllowMissingInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput"></a>

```go
func AllowMissingInput() interface{}
```

- *Type:* interface{}

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BackupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="BackupMinimumEnforcedRetentionDurationInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```go
func BackupMinimumEnforcedRetentionDurationInput() *string
```

- *Type:* *string

---

##### `BackupRetentionInheritanceInput`<sup>Optional</sup> <a name="BackupRetentionInheritanceInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritanceInput"></a>

```go
func BackupRetentionInheritanceInput() *string
```

- *Type:* *string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EffectiveTimeInput`<sup>Optional</sup> <a name="EffectiveTimeInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput"></a>

```go
func EffectiveTimeInput() *string
```

- *Type:* *string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput"></a>

```go
func ForceUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="IgnoreBackupPlanReferencesInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```go
func IgnoreBackupPlanReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="IgnoreInactiveDatasourcesInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```go
func IgnoreInactiveDatasourcesInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessRestriction`<sup>Required</sup> <a name="AccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction"></a>

```go
func AccessRestriction() *string
```

- *Type:* *string

---

##### `AllowMissing`<sup>Required</sup> <a name="AllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing"></a>

```go
func AllowMissing() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```go
func BackupMinimumEnforcedRetentionDuration() *string
```

- *Type:* *string

---

##### `BackupRetentionInheritance`<sup>Required</sup> <a name="BackupRetentionInheritance" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritance"></a>

```go
func BackupRetentionInheritance() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime"></a>

```go
func EffectiveTime() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate"></a>

```go
func ForceUpdate() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreBackupPlanReferences`<sup>Required</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```go
func IgnoreBackupPlanReferences() interface{}
```

- *Type:* interface{}

---

##### `IgnoreInactiveDatasources`<sup>Required</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```go
func IgnoreInactiveDatasources() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupVaultConfig <a name="BackupDrBackupVaultConfig" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

&backupdrbackupvault.BackupDrBackupVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupMinimumEnforcedRetentionDuration: *string,
	BackupVaultId: *string,
	Location: *string,
	AccessRestriction: *string,
	AllowMissing: interface{},
	Annotations: *map[string]*string,
	BackupRetentionInheritance: *string,
	Description: *string,
	EffectiveTime: *string,
	ForceDelete: interface{},
	ForceUpdate: interface{},
	Id: *string,
	IgnoreBackupPlanReferences: interface{},
	IgnoreInactiveDatasources: interface{},
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.backupDrBackupVault.BackupDrBackupVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location">Location</a></code> | <code>*string</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction">AccessRestriction</a></code> | <code>*string</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing">AllowMissing</a></code> | <code>interface{}</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupRetentionInheritance">BackupRetentionInheritance</a></code> | <code>*string</code> | How a backup's enforced retention end time is inherited. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description">Description</a></code> | <code>*string</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime">EffectiveTime</a></code> | <code>*string</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate">ForceUpdate</a></code> | <code>interface{}</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>interface{}</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>interface{}</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```go
BackupMinimumEnforcedRetentionDuration *string
```

- *Type:* *string

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `AccessRestriction`<sup>Optional</sup> <a name="AccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction"></a>

```go
AccessRestriction *string
```

- *Type:* *string

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `AllowMissing`<sup>Optional</sup> <a name="AllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing"></a>

```go
AllowMissing interface{}
```

- *Type:* interface{}

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `BackupRetentionInheritance`<sup>Optional</sup> <a name="BackupRetentionInheritance" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupRetentionInheritance"></a>

```go
BackupRetentionInheritance *string
```

- *Type:* *string

How a backup's enforced retention end time is inherited.

Default value is 'INHERIT_VAULT_RETENTION' if not provided during creation. Possible values: ["BACKUP_RETENTION_INHERITANCE_UNSPECIFIED", "INHERIT_VAULT_RETENTION", "MATCH_BACKUP_EXPIRE_TIME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#backup_retention_inheritance BackupDrBackupVault#backup_retention_inheritance}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `EffectiveTime`<sup>Optional</sup> <a name="EffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime"></a>

```go
EffectiveTime *string
```

- *Type:* *string

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate"></a>

```go
ForceUpdate interface{}
```

- *Type:* interface{}

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
the restriction against conflicting retention periods. This conflict may occur when the
expiration schedule defined by the associated backup plan is shorter than the minimum
retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreBackupPlanReferences`<sup>Optional</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```go
IgnoreBackupPlanReferences interface{}
```

- *Type:* interface{}

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `IgnoreInactiveDatasources`<sup>Optional</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```go
IgnoreInactiveDatasources interface{}
```

- *Type:* interface{}

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts"></a>

```go
Timeouts BackupDrBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

### BackupDrBackupVaultTimeouts <a name="BackupDrBackupVaultTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

&backupdrbackupvault.BackupDrBackupVaultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupVaultTimeoutsOutputReference <a name="BackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/backupdrbackupvault"

backupdrbackupvault.NewBackupDrBackupVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupDrBackupVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



