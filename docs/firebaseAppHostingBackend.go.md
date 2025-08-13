# `firebaseAppHostingBackend` Submodule <a name="`firebaseAppHostingBackend` Submodule" id="@cdktf/provider-google.firebaseAppHostingBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBackend <a name="FirebaseAppHostingBackend" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend google_firebase_app_hosting_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackend(scope Construct, id *string, config FirebaseAppHostingBackendConfig) FirebaseAppHostingBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig">FirebaseAppHostingBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig">FirebaseAppHostingBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase">PutCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetCodebase">ResetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCodebase` <a name="PutCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase"></a>

```go
func PutCodebase(value FirebaseAppHostingBackendCodebase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts"></a>

```go
func PutTimeouts(value FirebaseAppHostingBackendTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetCodebase` <a name="ResetCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetCodebase"></a>

```go
func ResetCodebase()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.FirebaseAppHostingBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.FirebaseAppHostingBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.FirebaseAppHostingBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.FirebaseAppHostingBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FirebaseAppHostingBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirebaseAppHostingBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirebaseAppHostingBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference">FirebaseAppHostingBackendCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.managedResources">ManagedResources</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList">FirebaseAppHostingBackendManagedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference">FirebaseAppHostingBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendIdInput">BackendIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebaseInput">CodebaseInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocalityInput">ServingLocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendId">BackendId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocality">ServingLocality</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Codebase`<sup>Required</sup> <a name="Codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebase"></a>

```go
func Codebase() FirebaseAppHostingBackendCodebaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference">FirebaseAppHostingBackendCodebaseOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ManagedResources`<sup>Required</sup> <a name="ManagedResources" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.managedResources"></a>

```go
func ManagedResources() FirebaseAppHostingBackendManagedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList">FirebaseAppHostingBackendManagedResourcesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeouts"></a>

```go
func Timeouts() FirebaseAppHostingBackendTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference">FirebaseAppHostingBackendTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `BackendIdInput`<sup>Optional</sup> <a name="BackendIdInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendIdInput"></a>

```go
func BackendIdInput() *string
```

- *Type:* *string

---

##### `CodebaseInput`<sup>Optional</sup> <a name="CodebaseInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebaseInput"></a>

```go
func CodebaseInput() FirebaseAppHostingBackendCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServingLocalityInput`<sup>Optional</sup> <a name="ServingLocalityInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocalityInput"></a>

```go
func ServingLocalityInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendId"></a>

```go
func BackendId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `ServingLocality`<sup>Required</sup> <a name="ServingLocality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocality"></a>

```go
func ServingLocality() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBackendCodebase <a name="FirebaseAppHostingBackendCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

&firebaseapphostingbackend.FirebaseAppHostingBackendCodebase {
	Repository: *string,
	RootDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.repository">Repository</a></code> | <code>*string</code> | The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:.

projects/{project}/locations/{location}/connections/{connection}/gitRepositoryLinks/{repositoryLink}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#repository FirebaseAppHostingBackend#repository}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#root_directory FirebaseAppHostingBackend#root_directory}

---

### FirebaseAppHostingBackendConfig <a name="FirebaseAppHostingBackendConfig" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

&firebaseapphostingbackend.FirebaseAppHostingBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	BackendId: *string,
	Location: *string,
	ServiceAccount: *string,
	ServingLocality: *string,
	Annotations: *map[string]*string,
	Codebase: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase,
	DisplayName: *string,
	Environment: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.appId">AppId</a></code> | <code>*string</code> | The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.backendId">BackendId</a></code> | <code>*string</code> | Id of the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.location">Location</a></code> | <code>*string</code> | The canonical IDs of a Google Cloud location such as "us-east1". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.servingLocality">ServingLocality</a></code> | <code>*string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.environment">Environment</a></code> | <code>*string</code> | The environment name of the backend, used to load environment variables from environment specific configuration. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#app_id FirebaseAppHostingBackend#app_id}

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.backendId"></a>

```go
BackendId *string
```

- *Type:* *string

Id of the backend.

Also used as the service ID for Cloud Run, and as part
of the default domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#backend_id FirebaseAppHostingBackend#backend_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The canonical IDs of a Google Cloud location such as "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#location FirebaseAppHostingBackend#location}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#service_account FirebaseAppHostingBackend#service_account}

---

##### `ServingLocality`<sup>Required</sup> <a name="ServingLocality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.servingLocality"></a>

```go
ServingLocality *string
```

- *Type:* *string

Immutable.

Specifies how App Hosting will serve the content for this backend. It will
either be contained to a single region (REGIONAL_STRICT) or allowed to use
App Hosting's global-replicated serving infrastructure (GLOBAL_ACCESS). Possible values: ["REGIONAL_STRICT", "GLOBAL_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#serving_locality FirebaseAppHostingBackend#serving_locality}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#annotations FirebaseAppHostingBackend#annotations}

---

##### `Codebase`<sup>Optional</sup> <a name="Codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.codebase"></a>

```go
Codebase FirebaseAppHostingBackendCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#codebase FirebaseAppHostingBackend#codebase}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#display_name FirebaseAppHostingBackend#display_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment name of the backend, used to load environment variables from environment specific configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#environment FirebaseAppHostingBackend#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#labels FirebaseAppHostingBackend#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.timeouts"></a>

```go
Timeouts FirebaseAppHostingBackendTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#timeouts FirebaseAppHostingBackend#timeouts}

---

### FirebaseAppHostingBackendManagedResources <a name="FirebaseAppHostingBackendManagedResources" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

&firebaseapphostingbackend.FirebaseAppHostingBackendManagedResources {

}
```


### FirebaseAppHostingBackendManagedResourcesRunService <a name="FirebaseAppHostingBackendManagedResourcesRunService" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

&firebaseapphostingbackend.FirebaseAppHostingBackendManagedResourcesRunService {

}
```


### FirebaseAppHostingBackendTimeouts <a name="FirebaseAppHostingBackendTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

&firebaseapphostingbackend.FirebaseAppHostingBackendTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBackendCodebaseOutputReference <a name="FirebaseAppHostingBackendCodebaseOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackendCodebaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingBackendCodebaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resetRootDirectory"></a>

```go
func ResetRootDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBackendCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---


### FirebaseAppHostingBackendManagedResourcesList <a name="FirebaseAppHostingBackendManagedResourcesList" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackendManagedResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingBackendManagedResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingBackendManagedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingBackendManagedResourcesOutputReference <a name="FirebaseAppHostingBackendManagedResourcesOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackendManagedResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingBackendManagedResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.runService">RunService</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList">FirebaseAppHostingBackendManagedResourcesRunServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources">FirebaseAppHostingBackendManagedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RunService`<sup>Required</sup> <a name="RunService" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.runService"></a>

```go
func RunService() FirebaseAppHostingBackendManagedResourcesRunServiceList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList">FirebaseAppHostingBackendManagedResourcesRunServiceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBackendManagedResources
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources">FirebaseAppHostingBackendManagedResources</a>

---


### FirebaseAppHostingBackendManagedResourcesRunServiceList <a name="FirebaseAppHostingBackendManagedResourcesRunServiceList" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackendManagedResourcesRunServiceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingBackendManagedResourcesRunServiceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference <a name="FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackendManagedResourcesRunServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService">FirebaseAppHostingBackendManagedResourcesRunService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBackendManagedResourcesRunService
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService">FirebaseAppHostingBackendManagedResourcesRunService</a>

---


### FirebaseAppHostingBackendTimeoutsOutputReference <a name="FirebaseAppHostingBackendTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingbackend"

firebaseapphostingbackend.NewFirebaseAppHostingBackendTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingBackendTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



