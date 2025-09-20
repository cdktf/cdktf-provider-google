# `firebaseAppHostingTraffic` Submodule <a name="`firebaseAppHostingTraffic` Submodule" id="@cdktf/provider-google.firebaseAppHostingTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingTraffic <a name="FirebaseAppHostingTraffic" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic google_firebase_app_hosting_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTraffic(scope Construct, id *string, config FirebaseAppHostingTrafficConfig) FirebaseAppHostingTraffic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig">FirebaseAppHostingTrafficConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig">FirebaseAppHostingTrafficConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putRolloutPolicy">PutRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetRolloutPolicy">ResetRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRolloutPolicy` <a name="PutRolloutPolicy" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putRolloutPolicy"></a>

```go
func PutRolloutPolicy(value FirebaseAppHostingTrafficRolloutPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putRolloutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTarget"></a>

```go
func PutTarget(value FirebaseAppHostingTrafficTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTimeouts"></a>

```go
func PutTimeouts(value FirebaseAppHostingTrafficTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRolloutPolicy` <a name="ResetRolloutPolicy" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetRolloutPolicy"></a>

```go
func ResetRolloutPolicy()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.FirebaseAppHostingTraffic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.FirebaseAppHostingTraffic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.FirebaseAppHostingTraffic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.FirebaseAppHostingTraffic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirebaseAppHostingTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirebaseAppHostingTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.current">Current</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList">FirebaseAppHostingTrafficCurrentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference">FirebaseAppHostingTrafficRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference">FirebaseAppHostingTrafficTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference">FirebaseAppHostingTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicyInput">RolloutPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Current`<sup>Required</sup> <a name="Current" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.current"></a>

```go
func Current() FirebaseAppHostingTrafficCurrentList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList">FirebaseAppHostingTrafficCurrentList</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RolloutPolicy`<sup>Required</sup> <a name="RolloutPolicy" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicy"></a>

```go
func RolloutPolicy() FirebaseAppHostingTrafficRolloutPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference">FirebaseAppHostingTrafficRolloutPolicyOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.target"></a>

```go
func Target() FirebaseAppHostingTrafficTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference">FirebaseAppHostingTrafficTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeouts"></a>

```go
func Timeouts() FirebaseAppHostingTrafficTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference">FirebaseAppHostingTrafficTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutPolicyInput`<sup>Optional</sup> <a name="RolloutPolicyInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.rolloutPolicyInput"></a>

```go
func RolloutPolicyInput() FirebaseAppHostingTrafficRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.targetInput"></a>

```go
func TargetInput() FirebaseAppHostingTrafficTarget
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTraffic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingTrafficConfig <a name="FirebaseAppHostingTrafficConfig" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Location: *string,
	Id: *string,
	Project: *string,
	RolloutPolicy: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy,
	Target: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.backend">Backend</a></code> | <code>*string</code> | Id of the backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.location">Location</a></code> | <code>*string</code> | The location the Backend that this Traffic config applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#id FirebaseAppHostingTraffic#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#project FirebaseAppHostingTraffic#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a></code> | rollout_policy block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

Id of the backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#backend FirebaseAppHostingTraffic#backend}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location the Backend that this Traffic config applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#location FirebaseAppHostingTraffic#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#id FirebaseAppHostingTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#project FirebaseAppHostingTraffic#project}.

---

##### `RolloutPolicy`<sup>Optional</sup> <a name="RolloutPolicy" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.rolloutPolicy"></a>

```go
RolloutPolicy FirebaseAppHostingTrafficRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#rollout_policy FirebaseAppHostingTraffic#rollout_policy}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.target"></a>

```go
Target FirebaseAppHostingTrafficTarget
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#target FirebaseAppHostingTraffic#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficConfig.property.timeouts"></a>

```go
Timeouts FirebaseAppHostingTrafficTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts">FirebaseAppHostingTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#timeouts FirebaseAppHostingTraffic#timeouts}

---

### FirebaseAppHostingTrafficCurrent <a name="FirebaseAppHostingTrafficCurrent" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficCurrent {

}
```


### FirebaseAppHostingTrafficCurrentSplits <a name="FirebaseAppHostingTrafficCurrentSplits" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficCurrentSplits {

}
```


### FirebaseAppHostingTrafficRolloutPolicy <a name="FirebaseAppHostingTrafficRolloutPolicy" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficRolloutPolicy {
	CodebaseBranch: *string,
	Disabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch">CodebaseBranch</a></code> | <code>*string</code> | Specifies a branch that triggers a new build to be started with this policy. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.disabled">Disabled</a></code> | <code>interface{}</code> | A flag that, if true, prevents rollouts from being created via this RolloutPolicy. |

---

##### `CodebaseBranch`<sup>Optional</sup> <a name="CodebaseBranch" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.codebaseBranch"></a>

```go
CodebaseBranch *string
```

- *Type:* *string

Specifies a branch that triggers a new build to be started with this policy.

If not set, no automatic rollouts will happen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#codebase_branch FirebaseAppHostingTraffic#codebase_branch}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

A flag that, if true, prevents rollouts from being created via this RolloutPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#disabled FirebaseAppHostingTraffic#disabled}

---

### FirebaseAppHostingTrafficTarget <a name="FirebaseAppHostingTrafficTarget" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficTarget {
	Splits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget.property.splits">Splits</a></code> | <code>interface{}</code> | splits block. |

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget.property.splits"></a>

```go
Splits interface{}
```

- *Type:* interface{}

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#splits FirebaseAppHostingTraffic#splits}

---

### FirebaseAppHostingTrafficTargetSplits <a name="FirebaseAppHostingTrafficTargetSplits" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficTargetSplits {
	BuildAttribute: *string,
	Percent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | The build that traffic is being routed to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.percent">Percent</a></code> | <code>*f64</code> | The percentage of traffic to send to the build. Currently must be 100 or 0. |

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.buildAttribute"></a>

```go
BuildAttribute *string
```

- *Type:* *string

The build that traffic is being routed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#build FirebaseAppHostingTraffic#build}

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplits.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

The percentage of traffic to send to the build. Currently must be 100 or 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#percent FirebaseAppHostingTraffic#percent}

---

### FirebaseAppHostingTrafficTimeouts <a name="FirebaseAppHostingTrafficTimeouts" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

&firebaseapphostingtraffic.FirebaseAppHostingTrafficTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#create FirebaseAppHostingTraffic#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#delete FirebaseAppHostingTraffic#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#update FirebaseAppHostingTraffic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#create FirebaseAppHostingTraffic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#delete FirebaseAppHostingTraffic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/firebase_app_hosting_traffic#update FirebaseAppHostingTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingTrafficCurrentList <a name="FirebaseAppHostingTrafficCurrentList" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficCurrentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingTrafficCurrentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingTrafficCurrentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingTrafficCurrentOutputReference <a name="FirebaseAppHostingTrafficCurrentOutputReference" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficCurrentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingTrafficCurrentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.splits">Splits</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList">FirebaseAppHostingTrafficCurrentSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent">FirebaseAppHostingTrafficCurrent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.splits"></a>

```go
func Splits() FirebaseAppHostingTrafficCurrentSplitsList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList">FirebaseAppHostingTrafficCurrentSplitsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingTrafficCurrent
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrent">FirebaseAppHostingTrafficCurrent</a>

---


### FirebaseAppHostingTrafficCurrentSplitsList <a name="FirebaseAppHostingTrafficCurrentSplitsList" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficCurrentSplitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingTrafficCurrentSplitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingTrafficCurrentSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingTrafficCurrentSplitsOutputReference <a name="FirebaseAppHostingTrafficCurrentSplitsOutputReference" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficCurrentSplitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingTrafficCurrentSplitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits">FirebaseAppHostingTrafficCurrentSplits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplitsOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingTrafficCurrentSplits
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficCurrentSplits">FirebaseAppHostingTrafficCurrentSplits</a>

---


### FirebaseAppHostingTrafficRolloutPolicyOutputReference <a name="FirebaseAppHostingTrafficRolloutPolicyOutputReference" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficRolloutPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingTrafficRolloutPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch">ResetCodebaseBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodebaseBranch` <a name="ResetCodebaseBranch" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetCodebaseBranch"></a>

```go
func ResetCodebaseBranch()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime">DisabledTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput">CodebaseBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch">CodebaseBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledTime`<sup>Required</sup> <a name="DisabledTime" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledTime"></a>

```go
func DisabledTime() *string
```

- *Type:* *string

---

##### `CodebaseBranchInput`<sup>Optional</sup> <a name="CodebaseBranchInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranchInput"></a>

```go
func CodebaseBranchInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `CodebaseBranch`<sup>Required</sup> <a name="CodebaseBranch" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.codebaseBranch"></a>

```go
func CodebaseBranch() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingTrafficRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficRolloutPolicy">FirebaseAppHostingTrafficRolloutPolicy</a>

---


### FirebaseAppHostingTrafficTargetOutputReference <a name="FirebaseAppHostingTrafficTargetOutputReference" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingTrafficTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.putSplits">PutSplits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSplits` <a name="PutSplits" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.putSplits"></a>

```go
func PutSplits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.putSplits.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splits">Splits</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList">FirebaseAppHostingTrafficTargetSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splitsInput">SplitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splits"></a>

```go
func Splits() FirebaseAppHostingTrafficTargetSplitsList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList">FirebaseAppHostingTrafficTargetSplitsList</a>

---

##### `SplitsInput`<sup>Optional</sup> <a name="SplitsInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.splitsInput"></a>

```go
func SplitsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingTrafficTarget
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTarget">FirebaseAppHostingTrafficTarget</a>

---


### FirebaseAppHostingTrafficTargetSplitsList <a name="FirebaseAppHostingTrafficTargetSplitsList" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficTargetSplitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingTrafficTargetSplitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingTrafficTargetSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseAppHostingTrafficTargetSplitsOutputReference <a name="FirebaseAppHostingTrafficTargetSplitsOutputReference" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficTargetSplitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingTrafficTargetSplitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput">BuildAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttributeInput"></a>

```go
func BuildAttributeInput() *string
```

- *Type:* *string

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTargetSplitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseAppHostingTrafficTimeoutsOutputReference <a name="FirebaseAppHostingTrafficTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingtraffic"

firebaseapphostingtraffic.NewFirebaseAppHostingTrafficTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingTrafficTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingTraffic.FirebaseAppHostingTrafficTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



