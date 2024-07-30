# `computeProjectCloudArmorTier` Submodule <a name="`computeProjectCloudArmorTier` Submodule" id="@cdktf/provider-google.computeProjectCloudArmorTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeProjectCloudArmorTier <a name="ComputeProjectCloudArmorTier" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier google_compute_project_cloud_armor_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

computeprojectcloudarmortier.NewComputeProjectCloudArmorTier(scope Construct, id *string, config ComputeProjectCloudArmorTierConfig) ComputeProjectCloudArmorTier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig">ComputeProjectCloudArmorTierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig">ComputeProjectCloudArmorTierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.putTimeouts"></a>

```go
func PutTimeouts(value ComputeProjectCloudArmorTierTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts">ComputeProjectCloudArmorTierTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeProjectCloudArmorTier resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

computeprojectcloudarmortier.ComputeProjectCloudArmorTier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

computeprojectcloudarmortier.ComputeProjectCloudArmorTier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

computeprojectcloudarmortier.ComputeProjectCloudArmorTier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

computeprojectcloudarmortier.ComputeProjectCloudArmorTier_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeProjectCloudArmorTier resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeProjectCloudArmorTier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeProjectCloudArmorTier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeProjectCloudArmorTier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference">ComputeProjectCloudArmorTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTierInput">CloudArmorTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTier">CloudArmorTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeouts"></a>

```go
func Timeouts() ComputeProjectCloudArmorTierTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference">ComputeProjectCloudArmorTierTimeoutsOutputReference</a>

---

##### `CloudArmorTierInput`<sup>Optional</sup> <a name="CloudArmorTierInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTierInput"></a>

```go
func CloudArmorTierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CloudArmorTier`<sup>Required</sup> <a name="CloudArmorTier" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTier"></a>

```go
func CloudArmorTier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeProjectCloudArmorTierConfig <a name="ComputeProjectCloudArmorTierConfig" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

&computeprojectcloudarmortier.ComputeProjectCloudArmorTierConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudArmorTier: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.cloudArmorTier">CloudArmorTier</a></code> | <code>*string</code> | Managed protection tier to be set. Possible values: ["CA_STANDARD", "CA_ENTERPRISE_PAYGO"]. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#id ComputeProjectCloudArmorTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#project ComputeProjectCloudArmorTier#project}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts">ComputeProjectCloudArmorTierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudArmorTier`<sup>Required</sup> <a name="CloudArmorTier" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.cloudArmorTier"></a>

```go
CloudArmorTier *string
```

- *Type:* *string

Managed protection tier to be set. Possible values: ["CA_STANDARD", "CA_ENTERPRISE_PAYGO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#cloud_armor_tier ComputeProjectCloudArmorTier#cloud_armor_tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#id ComputeProjectCloudArmorTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#project ComputeProjectCloudArmorTier#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.timeouts"></a>

```go
Timeouts ComputeProjectCloudArmorTierTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts">ComputeProjectCloudArmorTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#timeouts ComputeProjectCloudArmorTier#timeouts}

---

### ComputeProjectCloudArmorTierTimeouts <a name="ComputeProjectCloudArmorTierTimeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

&computeprojectcloudarmortier.ComputeProjectCloudArmorTierTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#create ComputeProjectCloudArmorTier#create}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#delete ComputeProjectCloudArmorTier#delete}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#update ComputeProjectCloudArmorTier#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#create ComputeProjectCloudArmorTier#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#delete ComputeProjectCloudArmorTier#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/compute_project_cloud_armor_tier#update ComputeProjectCloudArmorTier#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeProjectCloudArmorTierTimeoutsOutputReference <a name="ComputeProjectCloudArmorTierTimeoutsOutputReference" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/computeprojectcloudarmortier"

computeprojectcloudarmortier.NewComputeProjectCloudArmorTierTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeProjectCloudArmorTierTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



