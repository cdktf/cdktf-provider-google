# `iamPrincipalAccessBoundaryPolicy` Submodule <a name="`iamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamPrincipalAccessBoundaryPolicy <a name="IamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.NewIamPrincipalAccessBoundaryPolicy(scope Construct, id *string, config IamPrincipalAccessBoundaryPolicyConfig) IamPrincipalAccessBoundaryPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig">IamPrincipalAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig">IamPrincipalAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails"></a>

```go
func PutDetails(value IamPrincipalAccessBoundaryPolicyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```go
func PutTimeouts(value IamPrincipalAccessBoundaryPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IamPrincipalAccessBoundaryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">PrincipalAccessBoundaryPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details"></a>

```go
func Details() IamPrincipalAccessBoundaryPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```go
func Timeouts() IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```go
func DetailsInput() IamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PrincipalAccessBoundaryPolicyIdInput`<sup>Optional</sup> <a name="PrincipalAccessBoundaryPolicyIdInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```go
func PrincipalAccessBoundaryPolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```go
func PrincipalAccessBoundaryPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IamPrincipalAccessBoundaryPolicyConfig <a name="IamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

&iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Organization: *string,
	PrincipalAccessBoundaryPolicyId: *string,
	Annotations: *map[string]*string,
	Details: github.com/cdktf/cdktf-provider-google-go/google/v14.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization">Organization</a></code> | <code>*string</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>*string</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#location IamPrincipalAccessBoundaryPolicy#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#organization IamPrincipalAccessBoundaryPolicy#organization}

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```go
PrincipalAccessBoundaryPolicyId *string
```

- *Type:* *string

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#principal_access_boundary_policy_id IamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#annotations IamPrincipalAccessBoundaryPolicy#annotations}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```go
Details IamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#details IamPrincipalAccessBoundaryPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#display_name IamPrincipalAccessBoundaryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```go
Timeouts IamPrincipalAccessBoundaryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#timeouts IamPrincipalAccessBoundaryPolicy#timeouts}

---

### IamPrincipalAccessBoundaryPolicyDetails <a name="IamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

&iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicyDetails {
	Rules: interface{},
	EnforcementVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">EnforcementVersion</a></code> | <code>*string</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#rules IamPrincipalAccessBoundaryPolicy#rules}

---

##### `EnforcementVersion`<sup>Optional</sup> <a name="EnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```go
EnforcementVersion *string
```

- *Type:* *string

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#enforcement_version IamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### IamPrincipalAccessBoundaryPolicyDetailsRules <a name="IamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

&iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicyDetailsRules {
	Effect: *string,
	Resources: *[]*string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">Effect</a></code> | <code>*string</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description">Description</a></code> | <code>*string</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#effect IamPrincipalAccessBoundaryPolicy#effect}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:

* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#resources IamPrincipalAccessBoundaryPolicy#resources}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#description IamPrincipalAccessBoundaryPolicy#description}

---

### IamPrincipalAccessBoundaryPolicyTimeouts <a name="IamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

&iamprincipalaccessboundarypolicy.IamPrincipalAccessBoundaryPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.NewIamPrincipalAccessBoundaryPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamPrincipalAccessBoundaryPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">ResetEnforcementVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnforcementVersion` <a name="ResetEnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```go
func ResetEnforcementVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">EnforcementVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">EnforcementVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```go
func Rules() IamPrincipalAccessBoundaryPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `EnforcementVersionInput`<sup>Optional</sup> <a name="EnforcementVersionInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```go
func EnforcementVersionInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcementVersion`<sup>Required</sup> <a name="EnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```go
func EnforcementVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() IamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.NewIamPrincipalAccessBoundaryPolicyDetailsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IamPrincipalAccessBoundaryPolicyDetailsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```go
func Get(index *f64) IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.NewIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/iamprincipalaccessboundarypolicy"

iamprincipalaccessboundarypolicy.NewIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



