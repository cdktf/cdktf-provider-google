# `colabRuntimeTemplateIamPolicy` Submodule <a name="`colabRuntimeTemplateIamPolicy` Submodule" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabRuntimeTemplateIamPolicy <a name="ColabRuntimeTemplateIamPolicy" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy google_colab_runtime_template_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiampolicy"

colabruntimetemplateiampolicy.NewColabRuntimeTemplateIamPolicy(scope Construct, id *string, config ColabRuntimeTemplateIamPolicyConfig) ColabRuntimeTemplateIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig">ColabRuntimeTemplateIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig">ColabRuntimeTemplateIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabRuntimeTemplateIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiampolicy"

colabruntimetemplateiampolicy.ColabRuntimeTemplateIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiampolicy"

colabruntimetemplateiampolicy.ColabRuntimeTemplateIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiampolicy"

colabruntimetemplateiampolicy.ColabRuntimeTemplateIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiampolicy"

colabruntimetemplateiampolicy.ColabRuntimeTemplateIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ColabRuntimeTemplateIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ColabRuntimeTemplateIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ColabRuntimeTemplateIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ColabRuntimeTemplateIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.runtimeTemplateInput">RuntimeTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.runtimeTemplate">RuntimeTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuntimeTemplateInput`<sup>Optional</sup> <a name="RuntimeTemplateInput" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.runtimeTemplateInput"></a>

```go
func RuntimeTemplateInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RuntimeTemplate`<sup>Required</sup> <a name="RuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.runtimeTemplate"></a>

```go
func RuntimeTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabRuntimeTemplateIamPolicyConfig <a name="ColabRuntimeTemplateIamPolicyConfig" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/colabruntimetemplateiampolicy"

&colabruntimetemplateiampolicy.ColabRuntimeTemplateIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyData: *string,
	RuntimeTemplate: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#policy_data ColabRuntimeTemplateIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.runtimeTemplate">RuntimeTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#runtime_template ColabRuntimeTemplateIamPolicy#runtime_template}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#id ColabRuntimeTemplateIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#location ColabRuntimeTemplateIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#project ColabRuntimeTemplateIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#policy_data ColabRuntimeTemplateIamPolicy#policy_data}.

---

##### `RuntimeTemplate`<sup>Required</sup> <a name="RuntimeTemplate" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.runtimeTemplate"></a>

```go
RuntimeTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#runtime_template ColabRuntimeTemplateIamPolicy#runtime_template}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#id ColabRuntimeTemplateIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#location ColabRuntimeTemplateIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabRuntimeTemplateIamPolicy.ColabRuntimeTemplateIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/colab_runtime_template_iam_policy#project ColabRuntimeTemplateIamPolicy#project}.

---



