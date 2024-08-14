# `computeSharedVpcServiceProject` Submodule <a name="`computeSharedVpcServiceProject` Submodule" id="@cdktf/provider-google.computeSharedVpcServiceProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSharedVpcServiceProject <a name="ComputeSharedVpcServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project google_compute_shared_vpc_service_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

computesharedvpcserviceproject.NewComputeSharedVpcServiceProject(scope Construct, id *string, config ComputeSharedVpcServiceProjectConfig) ComputeSharedVpcServiceProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig">ComputeSharedVpcServiceProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig">ComputeSharedVpcServiceProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts"></a>

```go
func PutTimeouts(value ComputeSharedVpcServiceProjectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSharedVpcServiceProject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

computesharedvpcserviceproject.ComputeSharedVpcServiceProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

computesharedvpcserviceproject.ComputeSharedVpcServiceProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

computesharedvpcserviceproject.ComputeSharedVpcServiceProject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

computesharedvpcserviceproject.ComputeSharedVpcServiceProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeSharedVpcServiceProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeSharedVpcServiceProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeSharedVpcServiceProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSharedVpcServiceProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference">ComputeSharedVpcServiceProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProjectInput">HostProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProjectInput">ServiceProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProject">HostProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProject">ServiceProject</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeouts"></a>

```go
func Timeouts() ComputeSharedVpcServiceProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference">ComputeSharedVpcServiceProjectTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `HostProjectInput`<sup>Optional</sup> <a name="HostProjectInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProjectInput"></a>

```go
func HostProjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceProjectInput`<sup>Optional</sup> <a name="ServiceProjectInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProjectInput"></a>

```go
func ServiceProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `HostProject`<sup>Required</sup> <a name="HostProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProject"></a>

```go
func HostProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceProject`<sup>Required</sup> <a name="ServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProject"></a>

```go
func ServiceProject() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSharedVpcServiceProjectConfig <a name="ComputeSharedVpcServiceProjectConfig" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

&computesharedvpcserviceproject.ComputeSharedVpcServiceProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostProject: *string,
	ServiceProject: *string,
	DeletionPolicy: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.hostProject">HostProject</a></code> | <code>*string</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.serviceProject">ServiceProject</a></code> | <code>*string</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostProject`<sup>Required</sup> <a name="HostProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.hostProject"></a>

```go
HostProject *string
```

- *Type:* *string

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#host_project ComputeSharedVpcServiceProject#host_project}

---

##### `ServiceProject`<sup>Required</sup> <a name="ServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.serviceProject"></a>

```go
ServiceProject *string
```

- *Type:* *string

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#service_project ComputeSharedVpcServiceProject#service_project}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#deletion_policy ComputeSharedVpcServiceProject#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.timeouts"></a>

```go
Timeouts ComputeSharedVpcServiceProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#timeouts ComputeSharedVpcServiceProject#timeouts}

---

### ComputeSharedVpcServiceProjectTimeouts <a name="ComputeSharedVpcServiceProjectTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

&computesharedvpcserviceproject.ComputeSharedVpcServiceProjectTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSharedVpcServiceProjectTimeoutsOutputReference <a name="ComputeSharedVpcServiceProjectTimeoutsOutputReference" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computesharedvpcserviceproject"

computesharedvpcserviceproject.NewComputeSharedVpcServiceProjectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSharedVpcServiceProjectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



