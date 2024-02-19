# `computeDiskAsyncReplication` Submodule <a name="`computeDiskAsyncReplication` Submodule" id="@cdktf/provider-google.computeDiskAsyncReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDiskAsyncReplication <a name="ComputeDiskAsyncReplication" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication google_compute_disk_async_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.NewComputeDiskAsyncReplication(scope Construct, id *string, config ComputeDiskAsyncReplicationConfig) ComputeDiskAsyncReplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig">ComputeDiskAsyncReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig">ComputeDiskAsyncReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk">PutSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecondaryDisk` <a name="PutSecondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk"></a>

```go
func PutSecondaryDisk(value ComputeDiskAsyncReplicationSecondaryDisk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putSecondaryDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts"></a>

```go
func PutTimeouts(value ComputeDiskAsyncReplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.ComputeDiskAsyncReplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.ComputeDiskAsyncReplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.ComputeDiskAsyncReplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.ComputeDiskAsyncReplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeDiskAsyncReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeDiskAsyncReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeDiskAsyncReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDisk">SecondaryDisk</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference">ComputeDiskAsyncReplicationSecondaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference">ComputeDiskAsyncReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDiskInput">PrimaryDiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDiskInput">SecondaryDiskInput</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDisk">PrimaryDisk</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecondaryDisk`<sup>Required</sup> <a name="SecondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDisk"></a>

```go
func SecondaryDisk() ComputeDiskAsyncReplicationSecondaryDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference">ComputeDiskAsyncReplicationSecondaryDiskOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeouts"></a>

```go
func Timeouts() ComputeDiskAsyncReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference">ComputeDiskAsyncReplicationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrimaryDiskInput`<sup>Optional</sup> <a name="PrimaryDiskInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDiskInput"></a>

```go
func PrimaryDiskInput() *string
```

- *Type:* *string

---

##### `SecondaryDiskInput`<sup>Optional</sup> <a name="SecondaryDiskInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.secondaryDiskInput"></a>

```go
func SecondaryDiskInput() ComputeDiskAsyncReplicationSecondaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrimaryDisk`<sup>Required</sup> <a name="PrimaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.primaryDisk"></a>

```go
func PrimaryDisk() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskAsyncReplicationConfig <a name="ComputeDiskAsyncReplicationConfig" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

&computediskasyncreplication.ComputeDiskAsyncReplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PrimaryDisk: *string,
	SecondaryDisk: github.com/cdktf/cdktf-provider-google-go/google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.primaryDisk">PrimaryDisk</a></code> | <code>*string</code> | Primary disk for asynchronous replication. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.secondaryDisk">SecondaryDisk</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | secondary_disk block. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrimaryDisk`<sup>Required</sup> <a name="PrimaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.primaryDisk"></a>

```go
PrimaryDisk *string
```

- *Type:* *string

Primary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#primary_disk ComputeDiskAsyncReplication#primary_disk}

---

##### `SecondaryDisk`<sup>Required</sup> <a name="SecondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.secondaryDisk"></a>

```go
SecondaryDisk ComputeDiskAsyncReplicationSecondaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

secondary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#secondary_disk ComputeDiskAsyncReplication#secondary_disk}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#id ComputeDiskAsyncReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationConfig.property.timeouts"></a>

```go
Timeouts ComputeDiskAsyncReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts">ComputeDiskAsyncReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#timeouts ComputeDiskAsyncReplication#timeouts}

---

### ComputeDiskAsyncReplicationSecondaryDisk <a name="ComputeDiskAsyncReplicationSecondaryDisk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

&computediskasyncreplication.ComputeDiskAsyncReplicationSecondaryDisk {
	Disk: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.property.disk">Disk</a></code> | <code>*string</code> | Secondary disk for asynchronous replication. |

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk.property.disk"></a>

```go
Disk *string
```

- *Type:* *string

Secondary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#disk ComputeDiskAsyncReplication#disk}

---

### ComputeDiskAsyncReplicationTimeouts <a name="ComputeDiskAsyncReplicationTimeouts" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

&computediskasyncreplication.ComputeDiskAsyncReplicationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#create ComputeDiskAsyncReplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_disk_async_replication#delete ComputeDiskAsyncReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskAsyncReplicationSecondaryDiskOutputReference <a name="ComputeDiskAsyncReplicationSecondaryDiskOutputReference" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.NewComputeDiskAsyncReplicationSecondaryDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskAsyncReplicationSecondaryDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput">DiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput"></a>

```go
func DiskInput() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeDiskAsyncReplicationSecondaryDisk
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationSecondaryDisk">ComputeDiskAsyncReplicationSecondaryDisk</a>

---


### ComputeDiskAsyncReplicationTimeoutsOutputReference <a name="ComputeDiskAsyncReplicationTimeoutsOutputReference" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computediskasyncreplication"

computediskasyncreplication.NewComputeDiskAsyncReplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeDiskAsyncReplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeDiskAsyncReplication.ComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



