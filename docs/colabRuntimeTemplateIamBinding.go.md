# `colabRuntimeTemplateIamBinding` Submodule <a name="`colabRuntimeTemplateIamBinding` Submodule" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntimeTemplateIamBinding <a name="ColabRuntimeTemplateIamBinding" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding google_colab_runtime_template_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

colabruntimetemplateiambinding.NewColabRuntimeTemplateIamBinding(scope Construct, id *string, config ColabRuntimeTemplateIamBindingConfig) ColabRuntimeTemplateIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig">ColabRuntimeTemplateIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig">ColabRuntimeTemplateIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.putCondition"></a>

```go
func PutCondition(value ColabRuntimeTemplateIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabRuntimeTemplateIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

colabruntimetemplateiambinding.ColabRuntimeTemplateIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

colabruntimetemplateiambinding.ColabRuntimeTemplateIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

colabruntimetemplateiambinding.ColabRuntimeTemplateIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

colabruntimetemplateiambinding.ColabRuntimeTemplateIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ColabRuntimeTemplateIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ColabRuntimeTemplateIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ColabRuntimeTemplateIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntimeTemplateIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference">ColabRuntimeTemplateIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.runtimeTemplateInput">RuntimeTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.runtimeTemplate">RuntimeTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.condition"></a>

```go
func Condition() ColabRuntimeTemplateIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference">ColabRuntimeTemplateIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.conditionInput"></a>

```go
func ConditionInput() ColabRuntimeTemplateIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `RuntimeTemplateInput`<sup>Optional</sup> <a name="RuntimeTemplateInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.runtimeTemplateInput"></a>

```go
func RuntimeTemplateInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `RuntimeTemplate`<sup>Required</sup> <a name="RuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.runtimeTemplate"></a>

```go
func RuntimeTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeTemplateIamBindingCondition <a name="ColabRuntimeTemplateIamBindingCondition" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

&colabruntimetemplateiambinding.ColabRuntimeTemplateIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#expression ColabRuntimeTemplateIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#title ColabRuntimeTemplateIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#description ColabRuntimeTemplateIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#expression ColabRuntimeTemplateIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#title ColabRuntimeTemplateIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#description ColabRuntimeTemplateIamBinding#description}.

---

### ColabRuntimeTemplateIamBindingConfig <a name="ColabRuntimeTemplateIamBindingConfig" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

&colabruntimetemplateiambinding.ColabRuntimeTemplateIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Role: *string,
	RuntimeTemplate: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v16.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#members ColabRuntimeTemplateIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#role ColabRuntimeTemplateIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.runtimeTemplate">RuntimeTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#runtime_template ColabRuntimeTemplateIamBinding#runtime_template}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#id ColabRuntimeTemplateIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#location ColabRuntimeTemplateIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#project ColabRuntimeTemplateIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#members ColabRuntimeTemplateIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#role ColabRuntimeTemplateIamBinding#role}.

---

##### `RuntimeTemplate`<sup>Required</sup> <a name="RuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.runtimeTemplate"></a>

```go
RuntimeTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#runtime_template ColabRuntimeTemplateIamBinding#runtime_template}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.condition"></a>

```go
Condition ColabRuntimeTemplateIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#condition ColabRuntimeTemplateIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#id ColabRuntimeTemplateIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#location ColabRuntimeTemplateIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/colab_runtime_template_iam_binding#project ColabRuntimeTemplateIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabRuntimeTemplateIamBindingConditionOutputReference <a name="ColabRuntimeTemplateIamBindingConditionOutputReference" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiambinding"

colabruntimetemplateiambinding.NewColabRuntimeTemplateIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabRuntimeTemplateIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabRuntimeTemplateIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamBinding.ColabRuntimeTemplateIamBindingCondition">ColabRuntimeTemplateIamBindingCondition</a>

---



