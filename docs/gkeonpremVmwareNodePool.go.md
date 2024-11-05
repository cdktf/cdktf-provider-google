# `gkeonpremVmwareNodePool` Submodule <a name="`gkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google.gkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareNodePool <a name="GkeonpremVmwareNodePool" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePool(scope Construct, id *string, config GkeonpremVmwareNodePoolConfig) GkeonpremVmwareNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig">GkeonpremVmwareNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig">GkeonpremVmwareNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling">PutNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling">ResetNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig"></a>

```go
func PutConfig(value GkeonpremVmwareNodePoolConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `PutNodePoolAutoscaling` <a name="PutNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```go
func PutNodePoolAutoscaling(value GkeonpremVmwareNodePoolNodePoolAutoscaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts"></a>

```go
func PutTimeouts(value GkeonpremVmwareNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetNodePoolAutoscaling` <a name="ResetNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```go
func ResetNodePoolAutoscaling()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.GkeonpremVmwareNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.GkeonpremVmwareNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.GkeonpremVmwareNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.GkeonpremVmwareNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeonpremVmwareNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeonpremVmwareNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling">NodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion">OnPremVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">NodePoolAutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput">VmwareClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster">VmwareCluster</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config"></a>

```go
func Config() GkeonpremVmwareNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `NodePoolAutoscaling`<sup>Required</sup> <a name="NodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```go
func NodePoolAutoscaling() GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion"></a>

```go
func OnPremVersion() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status"></a>

```go
func Status() GkeonpremVmwareNodePoolStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts"></a>

```go
func Timeouts() GkeonpremVmwareNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput"></a>

```go
func ConfigInput() GkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodePoolAutoscalingInput`<sup>Optional</sup> <a name="NodePoolAutoscalingInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```go
func NodePoolAutoscalingInput() GkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmwareClusterInput`<sup>Optional</sup> <a name="VmwareClusterInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```go
func VmwareClusterInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VmwareCluster`<sup>Required</sup> <a name="VmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster"></a>

```go
func VmwareCluster() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareNodePoolConfig <a name="GkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-google-go/google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA,
	Location: *string,
	Name: *string,
	VmwareCluster: *string,
	Annotations: *map[string]*string,
	DisplayName: *string,
	Id: *string,
	NodePoolAutoscaling: github.com/cdktf/cdktf-provider-google-go/google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster">VmwareCluster</a></code> | <code>*string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">NodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config"></a>

```go
Config GkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#config GkeonpremVmwareNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#location GkeonpremVmwareNodePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#name GkeonpremVmwareNodePool#name}

---

##### `VmwareCluster`<sup>Required</sup> <a name="VmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```go
VmwareCluster *string
```

- *Type:* *string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#vmware_cluster GkeonpremVmwareNodePool#vmware_cluster}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#annotations GkeonpremVmwareNodePool#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#display_name GkeonpremVmwareNodePool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodePoolAutoscaling`<sup>Optional</sup> <a name="NodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```go
NodePoolAutoscaling GkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#node_pool_autoscaling GkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```go
Timeouts GkeonpremVmwareNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#timeouts GkeonpremVmwareNodePool#timeouts}

---

### GkeonpremVmwareNodePoolConfigA <a name="GkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolConfigA {
	ImageType: *string,
	BootDiskSizeGb: *f64,
	Cpus: *f64,
	EnableLoadBalancer: interface{},
	Image: *string,
	Labels: *map[string]*string,
	MemoryMb: *f64,
	Replicas: *f64,
	Taints: interface{},
	VsphereConfig: github.com/cdktf/cdktf-provider-google-go/google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType">ImageType</a></code> | <code>*string</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus">Cpus</a></code> | <code>*f64</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">EnableLoadBalancer</a></code> | <code>interface{}</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image">Image</a></code> | <code>*string</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb">MemoryMb</a></code> | <code>*f64</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas">Replicas</a></code> | <code>*f64</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | vsphere_config block. |

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```go
ImageType *string
```

- *Type:* *string

The OS image to be used for each node in a node pool.

Currently 'cos', 'cos_cgv2', 'ubuntu', 'ubuntu_cgv2', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#image_type GkeonpremVmwareNodePool#image_type}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#boot_disk_size_gb GkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```go
Cpus *f64
```

- *Type:* *f64

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#cpus GkeonpremVmwareNodePool#cpus}

---

##### `EnableLoadBalancer`<sup>Optional</sup> <a name="EnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```go
EnableLoadBalancer interface{}
```

- *Type:* interface{}

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#enable_load_balancer GkeonpremVmwareNodePool#enable_load_balancer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image"></a>

```go
Image *string
```

- *Type:* *string

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#image GkeonpremVmwareNodePool#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#labels GkeonpremVmwareNodePool#labels}

---

##### `MemoryMb`<sup>Optional</sup> <a name="MemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```go
MemoryMb *f64
```

- *Type:* *f64

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#memory_mb GkeonpremVmwareNodePool#memory_mb}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#replicas GkeonpremVmwareNodePool#replicas}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#taints GkeonpremVmwareNodePool#taints}

---

##### `VsphereConfig`<sup>Optional</sup> <a name="VsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.vsphereConfig"></a>

```go
VsphereConfig GkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

vsphere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#vsphere_config GkeonpremVmwareNodePool#vsphere_config}

---

### GkeonpremVmwareNodePoolConfigTaints <a name="GkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolConfigTaints {
	Key: *string,
	Value: *string,
	Effect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key">Key</a></code> | <code>*string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value">Value</a></code> | <code>*string</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect">Effect</a></code> | <code>*string</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#key GkeonpremVmwareNodePool#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#value GkeonpremVmwareNodePool#value}

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#effect GkeonpremVmwareNodePool#effect}

---

### GkeonpremVmwareNodePoolConfigVsphereConfig <a name="GkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolConfigVsphereConfig {
	Datastore: *string,
	HostGroups: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore">Datastore</a></code> | <code>*string</code> | The name of the vCenter datastore. Inherited from the user cluster. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups">HostGroups</a></code> | <code>*[]*string</code> | Vsphere host groups to apply to all VMs in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.datastore"></a>

```go
Datastore *string
```

- *Type:* *string

The name of the vCenter datastore. Inherited from the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#datastore GkeonpremVmwareNodePool#datastore}

---

##### `HostGroups`<sup>Optional</sup> <a name="HostGroups" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.hostGroups"></a>

```go
HostGroups *[]*string
```

- *Type:* *[]*string

Vsphere host groups to apply to all VMs in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#host_groups GkeonpremVmwareNodePool#host_groups}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#tags GkeonpremVmwareNodePool#tags}

---

### GkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolConfigVsphereConfigTags {
	Category: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category">Category</a></code> | <code>*string</code> | The Vsphere tag category. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag">Tag</a></code> | <code>*string</code> | The Vsphere tag name. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.category"></a>

```go
Category *string
```

- *Type:* *string

The Vsphere tag category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#category GkeonpremVmwareNodePool#category}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The Vsphere tag name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#tag GkeonpremVmwareNodePool#tag}

---

### GkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolNodePoolAutoscaling {
	MaxReplicas: *f64,
	MinReplicas: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | Minimum number of replicas in the NodePool. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```go
MaxReplicas *f64
```

- *Type:* *f64

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#max_replicas GkeonpremVmwareNodePool#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```go
MinReplicas *f64
```

- *Type:* *f64

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#min_replicas GkeonpremVmwareNodePool#min_replicas}

---

### GkeonpremVmwareNodePoolStatus <a name="GkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolStatus {

}
```


### GkeonpremVmwareNodePoolStatusConditions <a name="GkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolStatusConditions {

}
```


### GkeonpremVmwareNodePoolTimeouts <a name="GkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

&gkeonpremvmwarenodepool.GkeonpremVmwareNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareNodePoolConfigAOutputReference <a name="GkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareNodePoolConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig">PutVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">ResetEnableLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">ResetMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig">ResetVsphereConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVsphereConfig` <a name="PutVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig"></a>

```go
func PutVsphereConfig(value GkeonpremVmwareNodePoolConfigVsphereConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putVsphereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetEnableLoadBalancer` <a name="ResetEnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```go
func ResetEnableLoadBalancer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMemoryMb` <a name="ResetMemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```go
func ResetMemoryMb()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```go
func ResetTaints()
```

##### `ResetVsphereConfig` <a name="ResetVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetVsphereConfig"></a>

```go
func ResetVsphereConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">CpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">EnableLoadBalancerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">MemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput">VsphereConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">Cpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">EnableLoadBalancer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">MemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```go
func Taints() GkeonpremVmwareNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `VsphereConfig`<sup>Required</sup> <a name="VsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```go
func VsphereConfig() GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference">GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference</a>

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```go
func CpusInput() *f64
```

- *Type:* *f64

---

##### `EnableLoadBalancerInput`<sup>Optional</sup> <a name="EnableLoadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```go
func EnableLoadBalancerInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```go
func ImageTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryMbInput`<sup>Optional</sup> <a name="MemoryMbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```go
func MemoryMbInput() *f64
```

- *Type:* *f64

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `VsphereConfigInput`<sup>Optional</sup> <a name="VsphereConfigInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfigInput"></a>

```go
func VsphereConfigInput() GkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```go
func Cpus() *f64
```

- *Type:* *f64

---

##### `EnableLoadBalancer`<sup>Required</sup> <a name="EnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```go
func EnableLoadBalancer() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryMb`<sup>Required</sup> <a name="MemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```go
func MemoryMb() *f64
```

- *Type:* *f64

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---


### GkeonpremVmwareNodePoolConfigTaintsList <a name="GkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolConfigTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareNodePoolConfigTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolConfigTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareNodePoolConfigTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```go
func ResetEffect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups">ResetHostGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetDatastore"></a>

```go
func ResetDatastore()
```

##### `ResetHostGroups` <a name="ResetHostGroups" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetHostGroups"></a>

```go
func ResetHostGroups()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput">DatastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput">HostGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">Datastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups">HostGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```go
func Tags() GkeonpremVmwareNodePoolConfigVsphereConfigTagsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastoreInput"></a>

```go
func DatastoreInput() *string
```

- *Type:* *string

---

##### `HostGroupsInput`<sup>Optional</sup> <a name="HostGroupsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroupsInput"></a>

```go
func HostGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```go
func Datastore() *string
```

- *Type:* *string

---

##### `HostGroups`<sup>Required</sup> <a name="HostGroups" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.hostGroups"></a>

```go
func HostGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolConfigVsphereConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareNodePoolConfigVsphereConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```go
func MaxReplicasInput() *f64
```

- *Type:* *f64

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```go
func MinReplicasInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```go
func MaxReplicas() *f64
```

- *Type:* *f64

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```go
func MinReplicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GkeonpremVmwareNodePoolStatusConditionsList <a name="GkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareNodePoolStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareNodePoolStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareNodePoolStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a>

---


### GkeonpremVmwareNodePoolStatusList <a name="GkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeonpremVmwareNodePoolStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get"></a>

```go
func Get(index *f64) GkeonpremVmwareNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeonpremVmwareNodePoolStatusOutputReference <a name="GkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeonpremVmwareNodePoolStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```go
func Conditions() GkeonpremVmwareNodePoolStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeonpremVmwareNodePoolStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a>

---


### GkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/gkeonpremvmwarenodepool"

gkeonpremvmwarenodepool.NewGkeonpremVmwareNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeonpremVmwareNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



