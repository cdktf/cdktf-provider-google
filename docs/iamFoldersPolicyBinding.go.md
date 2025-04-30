# `iamFoldersPolicyBinding` Submodule <a name="`iamFoldersPolicyBinding` Submodule" id="@cdktf/provider-google.iamFoldersPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamFoldersPolicyBinding <a name="IamFoldersPolicyBinding" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding google_iam_folders_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.NewIamFoldersPolicyBinding(scope Construct, id *string, config IamFoldersPolicyBindingConfig) IamFoldersPolicyBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig">IamFoldersPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig">IamFoldersPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetPolicyKind">ResetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition"></a>

```go
func PutCondition(value IamFoldersPolicyBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget"></a>

```go
func PutTarget(value IamFoldersPolicyBindingTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts"></a>

```go
func PutTimeouts(value IamFoldersPolicyBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyKind` <a name="ResetPolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetPolicyKind"></a>

```go
func ResetPolicyKind()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.IamFoldersPolicyBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.IamFoldersPolicyBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.IamFoldersPolicyBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.IamFoldersPolicyBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamFoldersPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamFoldersPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamFoldersPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference">IamFoldersPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyUid">PolicyUid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference">IamFoldersPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference">IamFoldersPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingIdInput">PolicyBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKindInput">PolicyKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKind">PolicyKind</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.condition"></a>

```go
func Condition() IamFoldersPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference">IamFoldersPolicyBindingConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyUid`<sup>Required</sup> <a name="PolicyUid" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyUid"></a>

```go
func PolicyUid() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.target"></a>

```go
func Target() IamFoldersPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference">IamFoldersPolicyBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeouts"></a>

```go
func Timeouts() IamFoldersPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference">IamFoldersPolicyBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.conditionInput"></a>

```go
func ConditionInput() IamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyBindingIdInput`<sup>Optional</sup> <a name="PolicyBindingIdInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingIdInput"></a>

```go
func PolicyBindingIdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `PolicyKindInput`<sup>Optional</sup> <a name="PolicyKindInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKindInput"></a>

```go
func PolicyKindInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.targetInput"></a>

```go
func TargetInput() IamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingId"></a>

```go
func PolicyBindingId() *string
```

- *Type:* *string

---

##### `PolicyKind`<sup>Required</sup> <a name="PolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKind"></a>

```go
func PolicyKind() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamFoldersPolicyBindingCondition <a name="IamFoldersPolicyBindingCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

&iamfolderspolicybinding.IamFoldersPolicyBindingCondition {
	Description: *string,
	Expression: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.description">Description</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.location">Location</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.title">Title</a></code> | <code>*string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#description IamFoldersPolicyBinding#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#expression IamFoldersPolicyBinding#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#title IamFoldersPolicyBinding#title}

---

### IamFoldersPolicyBindingConfig <a name="IamFoldersPolicyBindingConfig" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

&iamfolderspolicybinding.IamFoldersPolicyBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Folder: *string,
	Location: *string,
	Policy: *string,
	PolicyBindingId: *string,
	Target: github.com/cdktf/cdktf-provider-google-go/google/v14.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget,
	Annotations: *map[string]*string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v14.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition,
	DisplayName: *string,
	Id: *string,
	PolicyKind: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.folder">Folder</a></code> | <code>*string</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policy">Policy</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyBindingId">PolicyBindingId</a></code> | <code>*string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyKind">PolicyKind</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#folder IamFoldersPolicyBinding#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#policy IamFoldersPolicyBinding#policy}

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyBindingId"></a>

```go
PolicyBindingId *string
```

- *Type:* *string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#policy_binding_id IamFoldersPolicyBinding#policy_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.target"></a>

```go
Target IamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#target IamFoldersPolicyBinding#target}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#annotations IamFoldersPolicyBinding#annotations}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.condition"></a>

```go
Condition IamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#condition IamFoldersPolicyBinding#condition}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#display_name IamFoldersPolicyBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyKind`<sup>Optional</sup> <a name="PolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyKind"></a>

```go
PolicyKind *string
```

- *Type:* *string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#policy_kind IamFoldersPolicyBinding#policy_kind}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.timeouts"></a>

```go
Timeouts IamFoldersPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#timeouts IamFoldersPolicyBinding#timeouts}

---

### IamFoldersPolicyBindingTarget <a name="IamFoldersPolicyBindingTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

&iamfolderspolicybinding.IamFoldersPolicyBindingTarget {
	PrincipalSet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | Required. |

---

##### `PrincipalSet`<sup>Optional</sup> <a name="PrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.property.principalSet"></a>

```go
PrincipalSet *string
```

- *Type:* *string

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Folder: '//cloudresourcemanager.googleapis.com/folders/FOLDER_ID'
  It must be parent by the policy binding's parent (the folder).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#principal_set IamFoldersPolicyBinding#principal_set}

---

### IamFoldersPolicyBindingTimeouts <a name="IamFoldersPolicyBindingTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

&iamfolderspolicybinding.IamFoldersPolicyBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#create IamFoldersPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#delete IamFoldersPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#update IamFoldersPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#create IamFoldersPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#delete IamFoldersPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/iam_folders_policy_binding#update IamFoldersPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamFoldersPolicyBindingConditionOutputReference <a name="IamFoldersPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.NewIamFoldersPolicyBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamFoldersPolicyBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() IamFoldersPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---


### IamFoldersPolicyBindingTargetOutputReference <a name="IamFoldersPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.NewIamFoldersPolicyBindingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamFoldersPolicyBindingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet">ResetPrincipalSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalSet` <a name="ResetPrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```go
func ResetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSetInput">PrincipalSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSet">PrincipalSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalSetInput`<sup>Optional</sup> <a name="PrincipalSetInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```go
func PrincipalSetInput() *string
```

- *Type:* *string

---

##### `PrincipalSet`<sup>Required</sup> <a name="PrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSet"></a>

```go
func PrincipalSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() IamFoldersPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---


### IamFoldersPolicyBindingTimeoutsOutputReference <a name="IamFoldersPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamfolderspolicybinding"

iamfolderspolicybinding.NewIamFoldersPolicyBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamFoldersPolicyBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



