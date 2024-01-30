# `accessContextManagerServicePerimeterEgressPolicy` Submodule <a name="`accessContextManagerServicePerimeterEgressPolicy` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterEgressPolicy <a name="AccessContextManagerServicePerimeterEgressPolicy" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy google_access_context_manager_service_perimeter_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicy(scope Construct, id *string, config AccessContextManagerServicePerimeterEgressPolicyConfig) AccessContextManagerServicePerimeterEgressPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig">AccessContextManagerServicePerimeterEgressPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig">AccessContextManagerServicePerimeterEgressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressFrom">PutEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressTo">PutEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom">ResetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressTo">ResetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressFrom` <a name="PutEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressFrom"></a>

```go
func PutEgressFrom(value AccessContextManagerServicePerimeterEgressPolicyEgressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `PutEgressTo` <a name="PutEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressTo"></a>

```go
func PutEgressTo(value AccessContextManagerServicePerimeterEgressPolicyEgressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putTimeouts"></a>

```go
func PutTimeouts(value AccessContextManagerServicePerimeterEgressPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

---

##### `ResetEgressFrom` <a name="ResetEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressFrom"></a>

```go
func ResetEgressFrom()
```

##### `ResetEgressTo` <a name="ResetEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetEgressTo"></a>

```go
func ResetEgressTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerServicePerimeterEgressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccessContextManagerServicePerimeterEgressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessContextManagerServicePerimeterEgressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessContextManagerServicePerimeterEgressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterEgressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput">EgressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressToInput">EgressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput">PerimeterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeter">Perimeter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressFrom`<sup>Required</sup> <a name="EgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFrom"></a>

```go
func EgressFrom() AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference</a>

---

##### `EgressTo`<sup>Required</sup> <a name="EgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressTo"></a>

```go
func EgressTo() AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference">AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeouts"></a>

```go
func Timeouts() AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference</a>

---

##### `EgressFromInput`<sup>Optional</sup> <a name="EgressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressFromInput"></a>

```go
func EgressFromInput() AccessContextManagerServicePerimeterEgressPolicyEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---

##### `EgressToInput`<sup>Optional</sup> <a name="EgressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.egressToInput"></a>

```go
func EgressToInput() AccessContextManagerServicePerimeterEgressPolicyEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PerimeterInput`<sup>Optional</sup> <a name="PerimeterInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeterInput"></a>

```go
func PerimeterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.perimeter"></a>

```go
func Perimeter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterEgressPolicyConfig <a name="AccessContextManagerServicePerimeterEgressPolicyConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Perimeter: *string,
	EgressFrom: github.com/cdktf/cdktf-provider-google-go/google/v13.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom,
	EgressTo: github.com/cdktf/cdktf-provider-google-go/google/v13.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter">Perimeter</a></code> | <code>*string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#id AccessContextManagerServicePerimeterEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.perimeter"></a>

```go
Perimeter *string
```

- *Type:* *string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#perimeter AccessContextManagerServicePerimeterEgressPolicy#perimeter}

---

##### `EgressFrom`<sup>Optional</sup> <a name="EgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressFrom"></a>

```go
EgressFrom AccessContextManagerServicePerimeterEgressPolicyEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#egress_from AccessContextManagerServicePerimeterEgressPolicy#egress_from}

---

##### `EgressTo`<sup>Optional</sup> <a name="EgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.egressTo"></a>

```go
EgressTo AccessContextManagerServicePerimeterEgressPolicyEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#egress_to AccessContextManagerServicePerimeterEgressPolicy#egress_to}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#id AccessContextManagerServicePerimeterEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyConfig.property.timeouts"></a>

```go
Timeouts AccessContextManagerServicePerimeterEgressPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts">AccessContextManagerServicePerimeterEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#timeouts AccessContextManagerServicePerimeterEgressPolicy#timeouts}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressFrom <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	SourceRestriction: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#identities AccessContextManagerServicePerimeterEgressPolicy#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#identity_type AccessContextManagerServicePerimeterEgressPolicy#identity_type}

---

##### `SourceRestriction`<sup>Optional</sup> <a name="SourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sourceRestriction"></a>

```go
SourceRestriction *string
```

- *Type:* *string

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#source_restriction AccessContextManagerServicePerimeterEgressPolicy#source_restriction}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#sources AccessContextManagerServicePerimeterEgressPolicy#sources}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressFromSources <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources {
	AccessLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#access_level AccessContextManagerServicePerimeterEgressPolicy#access_level}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressTo <a name="AccessContextManagerServicePerimeterEgressPolicyEgressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo {
	ExternalResources: *[]*string,
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `ExternalResources`<sup>Optional</sup> <a name="ExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.externalResources"></a>

```go
ExternalResources *[]*string
```

- *Type:* *[]*string

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#external_resources AccessContextManagerServicePerimeterEgressPolicy#external_resources}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#operations AccessContextManagerServicePerimeterEgressPolicy#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#resources AccessContextManagerServicePerimeterEgressPolicy#resources}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressToOperations <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#method_selectors AccessContextManagerServicePerimeterEgressPolicy#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#service_name AccessContextManagerServicePerimeterEgressPolicy#service_name}

---

### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#method AccessContextManagerServicePerimeterEgressPolicy#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#permission AccessContextManagerServicePerimeterEgressPolicy#permission}

---

### AccessContextManagerServicePerimeterEgressPolicyTimeouts <a name="AccessContextManagerServicePerimeterEgressPolicyTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

&accesscontextmanagerserviceperimeteregresspolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#create AccessContextManagerServicePerimeterEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#delete AccessContextManagerServicePerimeterEgressPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#update AccessContextManagerServicePerimeterEgressPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#create AccessContextManagerServicePerimeterEgressPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#delete AccessContextManagerServicePerimeterEgressPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_service_perimeter_egress_policy#update AccessContextManagerServicePerimeterEgressPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSourceRestriction">ResetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSourceRestriction` <a name="ResetSourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSourceRestriction"></a>

```go
func ResetSourceRestriction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList">AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput">SourceRestrictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sources"></a>

```go
func Sources() AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList">AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourceRestrictionInput`<sup>Optional</sup> <a name="SourceRestrictionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput"></a>

```go
func SourceRestrictionInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `SourceRestriction`<sup>Required</sup> <a name="SourceRestriction" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.sourceRestriction"></a>

```go
func SourceRestriction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerServicePerimeterEgressPolicyEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFrom">AccessContextManagerServicePerimeterEgressPolicyEgressFrom</a>

---


### AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.get"></a>

```go
func Get(index *f64) AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get"></a>

```go
func Get(index *f64) AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources">ResetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExternalResources` <a name="ResetExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```go
func ResetExternalResources()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput">ExternalResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operations"></a>

```go
func Operations() AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList">AccessContextManagerServicePerimeterEgressPolicyEgressToOperationsList</a>

---

##### `ExternalResourcesInput`<sup>Optional</sup> <a name="ExternalResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```go
func ExternalResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalResources`<sup>Required</sup> <a name="ExternalResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.externalResources"></a>

```go
func ExternalResources() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressToOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerServicePerimeterEgressPolicyEgressTo
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyEgressTo">AccessContextManagerServicePerimeterEgressPolicyEgressTo</a>

---


### AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/accesscontextmanagerserviceperimeteregresspolicy"

accesscontextmanagerserviceperimeteregresspolicy.NewAccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterEgressPolicy.AccessContextManagerServicePerimeterEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



