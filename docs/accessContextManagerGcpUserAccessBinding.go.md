# `accessContextManagerGcpUserAccessBinding` Submodule <a name="`accessContextManagerGcpUserAccessBinding` Submodule" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerGcpUserAccessBinding <a name="AccessContextManagerGcpUserAccessBinding" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBinding(scope Construct, id *string, config AccessContextManagerGcpUserAccessBindingConfig) AccessContextManagerGcpUserAccessBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig">AccessContextManagerGcpUserAccessBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig">AccessContextManagerGcpUserAccessBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings">PutScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings">ResetScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScopedAccessSettings` <a name="PutScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings"></a>

```go
func PutScopedAccessSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings"></a>

```go
func PutSessionSettings(value AccessContextManagerGcpUserAccessBindingSessionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts"></a>

```go
func PutTimeouts(value AccessContextManagerGcpUserAccessBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetScopedAccessSettings` <a name="ResetScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings"></a>

```go
func ResetScopedAccessSettings()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetSessionSettings"></a>

```go
func ResetSessionSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessContextManagerGcpUserAccessBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessContextManagerGcpUserAccessBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerGcpUserAccessBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput">GroupKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput">ScopedAccessSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey">GroupKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopedAccessSettings`<sup>Required</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings"></a>

```go
func ScopedAccessSettings() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a>

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettings"></a>

```go
func SessionSettings() AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts"></a>

```go
func Timeouts() AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput"></a>

```go
func GroupKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `ScopedAccessSettingsInput`<sup>Optional</sup> <a name="ScopedAccessSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput"></a>

```go
func ScopedAccessSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput"></a>

```go
func SessionSettingsInput() AccessContextManagerGcpUserAccessBindingSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey"></a>

```go
func GroupKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerGcpUserAccessBindingConfig <a name="AccessContextManagerGcpUserAccessBindingConfig" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupKey: *string,
	OrganizationId: *string,
	AccessLevels: *[]*string,
	Id: *string,
	ScopedAccessSettings: interface{},
	SessionSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey">GroupKey</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code>interface{}</code> | scoped_access_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | session_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey"></a>

```go
GroupKey *string
```

- *Type:* *string

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#group_key AccessContextManagerGcpUserAccessBinding#group_key}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScopedAccessSettings`<sup>Optional</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings"></a>

```go
ScopedAccessSettings interface{}
```

- *Type:* interface{}

scoped_access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#scoped_access_settings AccessContextManagerGcpUserAccessBinding#scoped_access_settings}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings"></a>

```go
SessionSettings AccessContextManagerGcpUserAccessBindingSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts"></a>

```go
Timeouts AccessContextManagerGcpUserAccessBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings {
	ActiveSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings,
	DryRunSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings,
	Scope: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | active_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | dry_run_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | scope block. |

---

##### `ActiveSettings`<sup>Optional</sup> <a name="ActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings"></a>

```go
ActiveSettings AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

active_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#active_settings AccessContextManagerGcpUserAccessBinding#active_settings}

---

##### `DryRunSettings`<sup>Optional</sup> <a name="DryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings"></a>

```go
DryRunSettings AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

dry_run_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#dry_run_settings AccessContextManagerGcpUserAccessBinding#dry_run_settings}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope"></a>

```go
Scope AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#scope AccessContextManagerGcpUserAccessBinding#scope}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings {
	AccessLevels: *[]*string,
	SessionSettings: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | session_settings block. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings"></a>

```go
SessionSettings AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings {
	MaxInactivity: *string,
	SessionLength: *string,
	SessionLengthEnabled: interface{},
	SessionReauthMethod: *string,
	UseOidcMaxAge: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength">SessionLength</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity"></a>

```go
MaxInactivity *string
```

- *Type:* *string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength"></a>

```go
SessionLength *string
```

- *Type:* *string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled"></a>

```go
SessionLengthEnabled interface{}
```

- *Type:* interface{}

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod"></a>

```go
SessionReauthMethod *string
```

- *Type:* *string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge"></a>

```go
UseOidcMaxAge interface{}
```

- *Type:* interface{}

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings {
	AccessLevels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | Optional. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels"></a>

```go
AccessLevels *[]*string
```

- *Type:* *[]*string

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope {
	ClientScope: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | client_scope block. |

---

##### `ClientScope`<sup>Optional</sup> <a name="ClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope"></a>

```go
ClientScope AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

client_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#client_scope AccessContextManagerGcpUserAccessBinding#client_scope}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope {
	RestrictedClientApplication: github.com/cdktf/cdktf-provider-google-go/google/v16.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | restricted_client_application block. |

---

##### `RestrictedClientApplication`<sup>Optional</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication"></a>

```go
RestrictedClientApplication AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

restricted_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#restricted_client_application AccessContextManagerGcpUserAccessBinding#restricted_client_application}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication {
	ClientId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth client ID of the application. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.name">Name</a></code> | <code>*string</code> | The name of the application. Example: "Cloud Console". |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth client ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#client_id AccessContextManagerGcpUserAccessBinding#client_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the application. Example: "Cloud Console".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#name AccessContextManagerGcpUserAccessBinding#name}

---

### AccessContextManagerGcpUserAccessBindingSessionSettings <a name="AccessContextManagerGcpUserAccessBindingSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingSessionSettings {
	MaxInactivity: *string,
	SessionLength: *string,
	SessionLengthEnabled: interface{},
	SessionReauthMethod: *string,
	UseOidcMaxAge: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength">SessionLength</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity"></a>

```go
MaxInactivity *string
```

- *Type:* *string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength"></a>

```go
SessionLength *string
```

- *Type:* *string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled"></a>

```go
SessionLengthEnabled interface{}
```

- *Type:* interface{}

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod"></a>

```go
SessionReauthMethod *string
```

- *Type:* *string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge"></a>

```go
UseOidcMaxAge interface{}
```

- *Type:* interface{}

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### AccessContextManagerGcpUserAccessBindingTimeouts <a name="AccessContextManagerGcpUserAccessBindingTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

&accesscontextmanagergcpuseraccessbinding.AccessContextManagerGcpUserAccessBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings"></a>

```go
func PutSessionSettings(value AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings"></a>

```go
func ResetSessionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings"></a>

```go
func SessionSettings() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput"></a>

```go
func SessionSettingsInput() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity"></a>

```go
func ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength"></a>

```go
func ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```go
func ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```go
func ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```go
func ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput"></a>

```go
func MaxInactivityInput() *string
```

- *Type:* *string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```go
func SessionLengthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput"></a>

```go
func SessionLengthInput() *string
```

- *Type:* *string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```go
func SessionReauthMethodInput() *string
```

- *Type:* *string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```go
func UseOidcMaxAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity"></a>

```go
func MaxInactivity() *string
```

- *Type:* *string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength"></a>

```go
func SessionLength() *string
```

- *Type:* *string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```go
func SessionLengthEnabled() interface{}
```

- *Type:* interface{}

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```go
func SessionReauthMethod() *string
```

- *Type:* *string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```go
func UseOidcMaxAge() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels"></a>

```go
func ResetAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput"></a>

```go
func AccessLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels"></a>

```go
func AccessLevels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get"></a>

```go
func Get(index *f64) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings">PutActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings">PutDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings">ResetActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings">ResetDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveSettings` <a name="PutActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings"></a>

```go
func PutActiveSettings(value AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `PutDryRunSettings` <a name="PutDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings"></a>

```go
func PutDryRunSettings(value AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope"></a>

```go
func PutScope(value AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `ResetActiveSettings` <a name="ResetActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings"></a>

```go
func ResetActiveSettings()
```

##### `ResetDryRunSettings` <a name="ResetDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings"></a>

```go
func ResetDryRunSettings()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput">ActiveSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput">DryRunSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveSettings`<sup>Required</sup> <a name="ActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings"></a>

```go
func ActiveSettings() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a>

---

##### `DryRunSettings`<sup>Required</sup> <a name="DryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings"></a>

```go
func DryRunSettings() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope"></a>

```go
func Scope() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a>

---

##### `ActiveSettingsInput`<sup>Optional</sup> <a name="ActiveSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput"></a>

```go
func ActiveSettingsInput() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `DryRunSettingsInput`<sup>Optional</sup> <a name="DryRunSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput"></a>

```go
func DryRunSettingsInput() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication">PutRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication">ResetRestrictedClientApplication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictedClientApplication` <a name="PutRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication"></a>

```go
func PutRestrictedClientApplication(value AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `ResetRestrictedClientApplication` <a name="ResetRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication"></a>

```go
func ResetRestrictedClientApplication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput">RestrictedClientApplicationInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestrictedClientApplication`<sup>Required</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication"></a>

```go
func RestrictedClientApplication() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a>

---

##### `RestrictedClientApplicationInput`<sup>Optional</sup> <a name="RestrictedClientApplicationInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput"></a>

```go
func RestrictedClientApplicationInput() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope">PutClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope">ResetClientScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientScope` <a name="PutClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope"></a>

```go
func PutClientScope(value AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `ResetClientScope` <a name="ResetClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope"></a>

```go
func ResetClientScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput">ClientScopeInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientScope`<sup>Required</sup> <a name="ClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope"></a>

```go
func ClientScope() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a>

---

##### `ClientScopeInput`<sup>Optional</sup> <a name="ClientScopeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput"></a>

```go
func ClientScopeInput() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---


### AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity"></a>

```go
func ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength"></a>

```go
func ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```go
func ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```go
func ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```go
func ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput"></a>

```go
func MaxInactivityInput() *string
```

- *Type:* *string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```go
func SessionLengthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput"></a>

```go
func SessionLengthInput() *string
```

- *Type:* *string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```go
func SessionReauthMethodInput() *string
```

- *Type:* *string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```go
func UseOidcMaxAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity"></a>

```go
func MaxInactivity() *string
```

- *Type:* *string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength"></a>

```go
func SessionLength() *string
```

- *Type:* *string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```go
func SessionLengthEnabled() interface{}
```

- *Type:* interface{}

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```go
func SessionReauthMethod() *string
```

- *Type:* *string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```go
func UseOidcMaxAge() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerGcpUserAccessBindingSessionSettings
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---


### AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference <a name="AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/accesscontextmanagergcpuseraccessbinding"

accesscontextmanagergcpuseraccessbinding.NewAccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



