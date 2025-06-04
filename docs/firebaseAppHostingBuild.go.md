# `firebaseAppHostingBuild` Submodule <a name="`firebaseAppHostingBuild` Submodule" id="@cdktf/provider-google.firebaseAppHostingBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBuild <a name="FirebaseAppHostingBuild" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build google_firebase_app_hosting_build}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuild(scope Construct, id *string, config FirebaseAppHostingBuildConfig) FirebaseAppHostingBuild
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig">FirebaseAppHostingBuildConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig">FirebaseAppHostingBuildConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource"></a>

```go
func PutSource(value FirebaseAppHostingBuildSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts"></a>

```go
func PutTimeouts(value FirebaseAppHostingBuildTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.FirebaseAppHostingBuild_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.FirebaseAppHostingBuild_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.FirebaseAppHostingBuild_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.FirebaseAppHostingBuild_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirebaseAppHostingBuild to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirebaseAppHostingBuild that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBuild to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri">BuildLogsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource">ErrorSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput">BuildIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId">BuildId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildLogsUri`<sup>Required</sup> <a name="BuildLogsUri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri"></a>

```go
func BuildLogsUri() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error"></a>

```go
func Error() FirebaseAppHostingBuildErrorList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a>

---

##### `ErrorSource`<sup>Required</sup> <a name="ErrorSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource"></a>

```go
func ErrorSource() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source"></a>

```go
func Source() FirebaseAppHostingBuildSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts"></a>

```go
func Timeouts() FirebaseAppHostingBuildTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput"></a>

```go
func BuildIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput"></a>

```go
func SourceInput() FirebaseAppHostingBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId"></a>

```go
func BuildId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBuildConfig <a name="FirebaseAppHostingBuildConfig" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	BuildId: *string,
	Location: *string,
	Source: github.com/cdktf/cdktf-provider-google-go/google/v15.firebaseAppHostingBuild.FirebaseAppHostingBuildSource,
	Annotations: *map[string]*string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v15.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend">Backend</a></code> | <code>*string</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId">BuildId</a></code> | <code>*string</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#backend FirebaseAppHostingBuild#backend}

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId"></a>

```go
BuildId *string
```

- *Type:* *string

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#build_id FirebaseAppHostingBuild#build_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#location FirebaseAppHostingBuild#location}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source"></a>

```go
Source FirebaseAppHostingBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#source FirebaseAppHostingBuild#source}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#annotations FirebaseAppHostingBuild#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#display_name FirebaseAppHostingBuild#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#labels FirebaseAppHostingBuild#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts"></a>

```go
Timeouts FirebaseAppHostingBuildTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#timeouts FirebaseAppHostingBuild#timeouts}

---

### FirebaseAppHostingBuildError <a name="FirebaseAppHostingBuildError" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildError {

}
```


### FirebaseAppHostingBuildSource <a name="FirebaseAppHostingBuildSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildSource {
	Codebase: github.com/cdktf/cdktf-provider-google-go/google/v15.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase,
	Container: github.com/cdktf/cdktf-provider-google-go/google/v15.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | container block. |

---

##### `Codebase`<sup>Optional</sup> <a name="Codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase"></a>

```go
Codebase FirebaseAppHostingBuildSourceCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#codebase FirebaseAppHostingBuild#codebase}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container"></a>

```go
Container FirebaseAppHostingBuildSourceContainer
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#container FirebaseAppHostingBuild#container}

---

### FirebaseAppHostingBuildSourceCodebase <a name="FirebaseAppHostingBuildSourceCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildSourceCodebase {
	Branch: *string,
	Commit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch">Branch</a></code> | <code>*string</code> | The branch in the codebase to build from, using the latest commit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit">Commit</a></code> | <code>*string</code> | The commit in the codebase to build from. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#branch FirebaseAppHostingBuild#branch}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit"></a>

```go
Commit *string
```

- *Type:* *string

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#commit FirebaseAppHostingBuild#commit}

---

### FirebaseAppHostingBuildSourceCodebaseAuthor <a name="FirebaseAppHostingBuildSourceCodebaseAuthor" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildSourceCodebaseAuthor {

}
```


### FirebaseAppHostingBuildSourceContainer <a name="FirebaseAppHostingBuildSourceContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildSourceContainer {
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image">Image</a></code> | <code>*string</code> | A URI representing a container for the backend to use. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#image FirebaseAppHostingBuild#image}

---

### FirebaseAppHostingBuildTimeouts <a name="FirebaseAppHostingBuildTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

&firebaseapphostingbuild.FirebaseAppHostingBuildTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBuildErrorList <a name="FirebaseAppHostingBuildErrorList" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingBuildErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingBuildErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingBuildErrorOutputReference <a name="FirebaseAppHostingBuildErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingBuildErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBuildError
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a>

---


### FirebaseAppHostingBuildSourceCodebaseAuthorList <a name="FirebaseAppHostingBuildSourceCodebaseAuthorList" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildSourceCodebaseAuthorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingBuildSourceCodebaseAuthorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBuildSourceCodebaseAuthor
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a>

---


### FirebaseAppHostingBuildSourceCodebaseOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildSourceCodebaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingBuildSourceCodebaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit"></a>

```go
func ResetCommit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author">Author</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime">CommitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput">CommitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit">Commit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author"></a>

```go
func Author() FirebaseAppHostingBuildSourceCodebaseAuthorList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a>

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage"></a>

```go
func CommitMessage() *string
```

- *Type:* *string

---

##### `CommitTime`<sup>Required</sup> <a name="CommitTime" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime"></a>

```go
func CommitTime() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput"></a>

```go
func CommitInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit"></a>

```go
func Commit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBuildSourceCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---


### FirebaseAppHostingBuildSourceContainerOutputReference <a name="FirebaseAppHostingBuildSourceContainerOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildSourceContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingBuildSourceContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBuildSourceContainer
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---


### FirebaseAppHostingBuildSourceOutputReference <a name="FirebaseAppHostingBuildSourceOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingBuildSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase">PutCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase">ResetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodebase` <a name="PutCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase"></a>

```go
func PutCodebase(value FirebaseAppHostingBuildSourceCodebase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer"></a>

```go
func PutContainer(value FirebaseAppHostingBuildSourceContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `ResetCodebase` <a name="ResetCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase"></a>

```go
func ResetCodebase()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer"></a>

```go
func ResetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput">CodebaseInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Codebase`<sup>Required</sup> <a name="Codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase"></a>

```go
func Codebase() FirebaseAppHostingBuildSourceCodebaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container"></a>

```go
func Container() FirebaseAppHostingBuildSourceContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a>

---

##### `CodebaseInput`<sup>Optional</sup> <a name="CodebaseInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput"></a>

```go
func CodebaseInput() FirebaseAppHostingBuildSourceCodebase
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput"></a>

```go
func ContainerInput() FirebaseAppHostingBuildSourceContainer
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingBuildSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---


### FirebaseAppHostingBuildTimeoutsOutputReference <a name="FirebaseAppHostingBuildTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/firebaseapphostingbuild"

firebaseapphostingbuild.NewFirebaseAppHostingBuildTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingBuildTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



