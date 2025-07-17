# `spannerBackupSchedule` Submodule <a name="`spannerBackupSchedule` Submodule" id="@cdktf/provider-google.spannerBackupSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerBackupSchedule <a name="SpannerBackupSchedule" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule google_spanner_backup_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupSchedule(scope Construct, id *string, config SpannerBackupScheduleConfig) SpannerBackupSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig">SpannerBackupScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig">SpannerBackupScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec">PutFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec">PutIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetFullBackupSpec">ResetFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetIncrementalBackupSpec">ResetIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value SpannerBackupScheduleEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

---

##### `PutFullBackupSpec` <a name="PutFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec"></a>

```go
func PutFullBackupSpec(value SpannerBackupScheduleFullBackupSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putFullBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---

##### `PutIncrementalBackupSpec` <a name="PutIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec"></a>

```go
func PutIncrementalBackupSpec(value SpannerBackupScheduleIncrementalBackupSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putIncrementalBackupSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec"></a>

```go
func PutSpec(value SpannerBackupScheduleSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts"></a>

```go
func PutTimeouts(value SpannerBackupScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>

---

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetFullBackupSpec` <a name="ResetFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetFullBackupSpec"></a>

```go
func ResetFullBackupSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetIncrementalBackupSpec` <a name="ResetIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetIncrementalBackupSpec"></a>

```go
func ResetIncrementalBackupSpec()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerBackupSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.SpannerBackupSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.SpannerBackupSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.SpannerBackupSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.SpannerBackupSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SpannerBackupSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpannerBackupSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpannerBackupSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SpannerBackupSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference">SpannerBackupScheduleEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpec">FullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference">SpannerBackupScheduleFullBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpec">IncrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference">SpannerBackupScheduleIncrementalBackupSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference">SpannerBackupScheduleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference">SpannerBackupScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpecInput">FullBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpecInput">IncrementalBackupSpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDurationInput">RetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDuration">RetentionDuration</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfig"></a>

```go
func EncryptionConfig() SpannerBackupScheduleEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference">SpannerBackupScheduleEncryptionConfigOutputReference</a>

---

##### `FullBackupSpec`<sup>Required</sup> <a name="FullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpec"></a>

```go
func FullBackupSpec() SpannerBackupScheduleFullBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference">SpannerBackupScheduleFullBackupSpecOutputReference</a>

---

##### `IncrementalBackupSpec`<sup>Required</sup> <a name="IncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpec"></a>

```go
func IncrementalBackupSpec() SpannerBackupScheduleIncrementalBackupSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference">SpannerBackupScheduleIncrementalBackupSpecOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.spec"></a>

```go
func Spec() SpannerBackupScheduleSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference">SpannerBackupScheduleSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeouts"></a>

```go
func Timeouts() SpannerBackupScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference">SpannerBackupScheduleTimeoutsOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() SpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

---

##### `FullBackupSpecInput`<sup>Optional</sup> <a name="FullBackupSpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.fullBackupSpecInput"></a>

```go
func FullBackupSpecInput() SpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncrementalBackupSpecInput`<sup>Optional</sup> <a name="IncrementalBackupSpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.incrementalBackupSpecInput"></a>

```go
func IncrementalBackupSpecInput() SpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDurationInput"></a>

```go
func RetentionDurationInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.specInput"></a>

```go
func SpecInput() SpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.retentionDuration"></a>

```go
func RetentionDuration() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerBackupScheduleConfig <a name="SpannerBackupScheduleConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Instance: *string,
	RetentionDuration: *string,
	EncryptionConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig,
	FullBackupSpec: github.com/cdktf/cdktf-provider-google-go/google/v16.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec,
	Id: *string,
	IncrementalBackupSpec: github.com/cdktf/cdktf-provider-google-go/google/v16.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec,
	Name: *string,
	Project: *string,
	Spec: github.com/cdktf/cdktf-provider-google-go/google/v16.spannerBackupSchedule.SpannerBackupScheduleSpec,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.spannerBackupSchedule.SpannerBackupScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.database">Database</a></code> | <code>*string</code> | The database to create the backup schedule on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.instance">Instance</a></code> | <code>*string</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.retentionDuration">RetentionDuration</a></code> | <code>*string</code> | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.fullBackupSpec">FullBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | full_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.incrementalBackupSpec">IncrementalBackupSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | incremental_backup_spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.name">Name</a></code> | <code>*string</code> | A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database to create the backup schedule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#database SpannerBackupSchedule#database}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#instance SpannerBackupSchedule#instance}

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.retentionDuration"></a>

```go
RetentionDuration *string
```

- *Type:* *string

At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'. You can set this to a value up to 366 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#retention_duration SpannerBackupSchedule#retention_duration}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.encryptionConfig"></a>

```go
EncryptionConfig SpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#encryption_config SpannerBackupSchedule#encryption_config}

---

##### `FullBackupSpec`<sup>Optional</sup> <a name="FullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.fullBackupSpec"></a>

```go
FullBackupSpec SpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

full_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#full_backup_spec SpannerBackupSchedule#full_backup_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#id SpannerBackupSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalBackupSpec`<sup>Optional</sup> <a name="IncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.incrementalBackupSpec"></a>

```go
IncrementalBackupSpec SpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

incremental_backup_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#incremental_backup_spec SpannerBackupSchedule#incremental_backup_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique identifier for the backup schedule, which cannot be changed after the backup schedule is created.

Values are of the form [a-z][-a-z0-9]*[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#name SpannerBackupSchedule#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#project SpannerBackupSchedule#project}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.spec"></a>

```go
Spec SpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#spec SpannerBackupSchedule#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleConfig.property.timeouts"></a>

```go
Timeouts SpannerBackupScheduleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts">SpannerBackupScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#timeouts SpannerBackupSchedule#timeouts}

---

### SpannerBackupScheduleEncryptionConfig <a name="SpannerBackupScheduleEncryptionConfig" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleEncryptionConfig {
	EncryptionType: *string,
	KmsKeyName: *string,
	KmsKeyNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The encryption type of backups created by the backup schedule. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyNames">KmsKeyNames</a></code> | <code>*[]*string</code> | Fully qualified name of the KMS keys to use to encrypt this database. |

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The encryption type of backups created by the backup schedule.

Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#encryption_type SpannerBackupSchedule#encryption_type}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The resource name of the Cloud KMS key to use for encryption. Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#kms_key_name SpannerBackupSchedule#kms_key_name}

---

##### `KmsKeyNames`<sup>Optional</sup> <a name="KmsKeyNames" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig.property.kmsKeyNames"></a>

```go
KmsKeyNames *[]*string
```

- *Type:* *[]*string

Fully qualified name of the KMS keys to use to encrypt this database.

The keys must exist
in the same locations as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#kms_key_names SpannerBackupSchedule#kms_key_names}

---

### SpannerBackupScheduleFullBackupSpec <a name="SpannerBackupScheduleFullBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleFullBackupSpec {

}
```


### SpannerBackupScheduleIncrementalBackupSpec <a name="SpannerBackupScheduleIncrementalBackupSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleIncrementalBackupSpec {

}
```


### SpannerBackupScheduleSpec <a name="SpannerBackupScheduleSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleSpec {
	CronSpec: github.com/cdktf/cdktf-provider-google-go/google/v16.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.property.cronSpec">CronSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | cron_spec block. |

---

##### `CronSpec`<sup>Optional</sup> <a name="CronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec.property.cronSpec"></a>

```go
CronSpec SpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

cron_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#cron_spec SpannerBackupSchedule#cron_spec}

---

### SpannerBackupScheduleSpecCronSpec <a name="SpannerBackupScheduleSpecCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleSpecCronSpec {
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.property.text">Text</a></code> | <code>*string</code> | Textual representation of the crontab. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec.property.text"></a>

```go
Text *string
```

- *Type:* *string

Textual representation of the crontab.

User can customize the
backup frequency and the backup version time using the cron
expression. The version time must be in UTC timzeone.
The backup will contain an externally consistent copy of the
database at the version time. Allowed frequencies are 12 hour, 1 day,
1 week and 1 month. Examples of valid cron specifications:
0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
0 2 * * *    : once a day at 2 past midnight in UTC.
0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#text SpannerBackupSchedule#text}

---

### SpannerBackupScheduleTimeouts <a name="SpannerBackupScheduleTimeouts" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

&spannerbackupschedule.SpannerBackupScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#create SpannerBackupSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#delete SpannerBackupSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/spanner_backup_schedule#update SpannerBackupSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerBackupScheduleEncryptionConfigOutputReference <a name="SpannerBackupScheduleEncryptionConfigOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupScheduleEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerBackupScheduleEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyNames">ResetKmsKeyNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetKmsKeyNames` <a name="ResetKmsKeyNames" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.resetKmsKeyNames"></a>

```go
func ResetKmsKeyNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNamesInput">KmsKeyNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNames">KmsKeyNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyNamesInput`<sup>Optional</sup> <a name="KmsKeyNamesInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNamesInput"></a>

```go
func KmsKeyNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `KmsKeyNames`<sup>Required</sup> <a name="KmsKeyNames" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.kmsKeyNames"></a>

```go
func KmsKeyNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerBackupScheduleEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleEncryptionConfig">SpannerBackupScheduleEncryptionConfig</a>

---


### SpannerBackupScheduleFullBackupSpecOutputReference <a name="SpannerBackupScheduleFullBackupSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupScheduleFullBackupSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerBackupScheduleFullBackupSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerBackupScheduleFullBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleFullBackupSpec">SpannerBackupScheduleFullBackupSpec</a>

---


### SpannerBackupScheduleIncrementalBackupSpecOutputReference <a name="SpannerBackupScheduleIncrementalBackupSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupScheduleIncrementalBackupSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerBackupScheduleIncrementalBackupSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerBackupScheduleIncrementalBackupSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleIncrementalBackupSpec">SpannerBackupScheduleIncrementalBackupSpec</a>

---


### SpannerBackupScheduleSpecCronSpecOutputReference <a name="SpannerBackupScheduleSpecCronSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupScheduleSpecCronSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerBackupScheduleSpecCronSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---


### SpannerBackupScheduleSpecOutputReference <a name="SpannerBackupScheduleSpecOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupScheduleSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerBackupScheduleSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec">PutCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resetCronSpec">ResetCronSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCronSpec` <a name="PutCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec"></a>

```go
func PutCronSpec(value SpannerBackupScheduleSpecCronSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.putCronSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---

##### `ResetCronSpec` <a name="ResetCronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.resetCronSpec"></a>

```go
func ResetCronSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpec">CronSpec</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference">SpannerBackupScheduleSpecCronSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpecInput">CronSpecInput</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronSpec`<sup>Required</sup> <a name="CronSpec" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpec"></a>

```go
func CronSpec() SpannerBackupScheduleSpecCronSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpecOutputReference">SpannerBackupScheduleSpecCronSpecOutputReference</a>

---

##### `CronSpecInput`<sup>Optional</sup> <a name="CronSpecInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.cronSpecInput"></a>

```go
func CronSpecInput() SpannerBackupScheduleSpecCronSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecCronSpec">SpannerBackupScheduleSpecCronSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() SpannerBackupScheduleSpec
```

- *Type:* <a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleSpec">SpannerBackupScheduleSpec</a>

---


### SpannerBackupScheduleTimeoutsOutputReference <a name="SpannerBackupScheduleTimeoutsOutputReference" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/spannerbackupschedule"

spannerbackupschedule.NewSpannerBackupScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpannerBackupScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.spannerBackupSchedule.SpannerBackupScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



