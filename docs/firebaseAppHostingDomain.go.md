# `firebaseAppHostingDomain` Submodule <a name="`firebaseAppHostingDomain` Submodule" id="@cdktf/provider-google.firebaseAppHostingDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingDomain <a name="FirebaseAppHostingDomain" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain google_firebase_app_hosting_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomain(scope Construct, id *string, config FirebaseAppHostingDomainConfig) FirebaseAppHostingDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig">FirebaseAppHostingDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig">FirebaseAppHostingDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putServe">PutServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetServe">ResetServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServe` <a name="PutServe" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putServe"></a>

```go
func PutServe(value FirebaseAppHostingDomainServe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putServe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putTimeouts"></a>

```go
func PutTimeouts(value FirebaseAppHostingDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts">FirebaseAppHostingDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServe` <a name="ResetServe" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetServe"></a>

```go
func ResetServe()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.FirebaseAppHostingDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.FirebaseAppHostingDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.FirebaseAppHostingDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.FirebaseAppHostingDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FirebaseAppHostingDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirebaseAppHostingDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirebaseAppHostingDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.customDomainStatus">CustomDomainStatus</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList">FirebaseAppHostingDomainCustomDomainStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serve">Serve</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference">FirebaseAppHostingDomainServeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference">FirebaseAppHostingDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serveInput">ServeInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomDomainStatus`<sup>Required</sup> <a name="CustomDomainStatus" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.customDomainStatus"></a>

```go
func CustomDomainStatus() FirebaseAppHostingDomainCustomDomainStatusList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList">FirebaseAppHostingDomainCustomDomainStatusList</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `Serve`<sup>Required</sup> <a name="Serve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serve"></a>

```go
func Serve() FirebaseAppHostingDomainServeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference">FirebaseAppHostingDomainServeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeouts"></a>

```go
func Timeouts() FirebaseAppHostingDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference">FirebaseAppHostingDomainTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServeInput`<sup>Optional</sup> <a name="ServeInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.serveInput"></a>

```go
func ServeInput() FirebaseAppHostingDomainServe
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingDomainConfig <a name="FirebaseAppHostingDomainConfig" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	DomainId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
	Serve: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingDomain.FirebaseAppHostingDomainServe,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.backend">Backend</a></code> | <code>*string</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.domainId">DomainId</a></code> | <code>*string</code> | Id of the domain to create. Must be a valid domain name, such as "foo.com". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#id FirebaseAppHostingDomain#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#project FirebaseAppHostingDomain#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.serve">Serve</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a></code> | serve block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts">FirebaseAppHostingDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#backend FirebaseAppHostingDomain#backend}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

Id of the domain to create. Must be a valid domain name, such as "foo.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#domain_id FirebaseAppHostingDomain#domain_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#location FirebaseAppHostingDomain#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#id FirebaseAppHostingDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#project FirebaseAppHostingDomain#project}.

---

##### `Serve`<sup>Optional</sup> <a name="Serve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.serve"></a>

```go
Serve FirebaseAppHostingDomainServe
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

serve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#serve FirebaseAppHostingDomain#serve}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainConfig.property.timeouts"></a>

```go
Timeouts FirebaseAppHostingDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts">FirebaseAppHostingDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#timeouts FirebaseAppHostingDomain#timeouts}

---

### FirebaseAppHostingDomainCustomDomainStatus <a name="FirebaseAppHostingDomainCustomDomainStatus" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatus {

}
```


### FirebaseAppHostingDomainCustomDomainStatusIssues <a name="FirebaseAppHostingDomainCustomDomainStatusIssues" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusIssues {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError {

}
```


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords {

}
```


### FirebaseAppHostingDomainServe <a name="FirebaseAppHostingDomainServe" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainServe {
	Redirect: github.com/cdktf/cdktf-provider-google-go/google/v16.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a></code> | redirect block. |

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe.property.redirect"></a>

```go
Redirect FirebaseAppHostingDomainServeRedirect
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#redirect FirebaseAppHostingDomain#redirect}

---

### FirebaseAppHostingDomainServeRedirect <a name="FirebaseAppHostingDomainServeRedirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainServeRedirect {
	Uri: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.uri">Uri</a></code> | <code>*string</code> | The URI of the redirect's intended destination. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.status">Status</a></code> | <code>*string</code> | The status code to use in a redirect response. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI of the redirect's intended destination.

This URI will be
prepended to the original request path. URI without a scheme are
assumed to be HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#uri FirebaseAppHostingDomain#uri}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status code to use in a redirect response.

Must be a valid HTTP 3XX
status code. Defaults to 302 if not present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#status FirebaseAppHostingDomain#status}

---

### FirebaseAppHostingDomainTimeouts <a name="FirebaseAppHostingDomainTimeouts" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

&firebaseapphostingdomain.FirebaseAppHostingDomainTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#create FirebaseAppHostingDomain#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#delete FirebaseAppHostingDomain#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#update FirebaseAppHostingDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#create FirebaseAppHostingDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#delete FirebaseAppHostingDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/firebase_app_hosting_domain#update FirebaseAppHostingDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingDomainCustomDomainStatusIssuesList <a name="FirebaseAppHostingDomainCustomDomainStatusIssuesList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusIssuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusIssuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues">FirebaseAppHostingDomainCustomDomainStatusIssues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusIssues
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssues">FirebaseAppHostingDomainCustomDomainStatusIssues</a>

---


### FirebaseAppHostingDomainCustomDomainStatusList <a name="FirebaseAppHostingDomainCustomDomainStatusList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.certState">CertState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.hostState">HostState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.issues">Issues</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList">FirebaseAppHostingDomainCustomDomainStatusIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.ownershipState">OwnershipState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.requiredDnsUpdates">RequiredDnsUpdates</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus">FirebaseAppHostingDomainCustomDomainStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertState`<sup>Required</sup> <a name="CertState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.certState"></a>

```go
func CertState() *string
```

- *Type:* *string

---

##### `HostState`<sup>Required</sup> <a name="HostState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.hostState"></a>

```go
func HostState() *string
```

- *Type:* *string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.issues"></a>

```go
func Issues() FirebaseAppHostingDomainCustomDomainStatusIssuesList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusIssuesList">FirebaseAppHostingDomainCustomDomainStatusIssuesList</a>

---

##### `OwnershipState`<sup>Required</sup> <a name="OwnershipState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.ownershipState"></a>

```go
func OwnershipState() *string
```

- *Type:* *string

---

##### `RequiredDnsUpdates`<sup>Required</sup> <a name="RequiredDnsUpdates" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.requiredDnsUpdates"></a>

```go
func RequiredDnsUpdates() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatus
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatus">FirebaseAppHostingDomainCustomDomainStatus</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckError</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.checkError">CheckError</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.records">Records</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckError`<sup>Required</sup> <a name="CheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.checkError"></a>

```go
func CheckError() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredCheckErrorList</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.records"></a>

```go
func Records() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesired</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata">Rdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.relevantState">RelevantState</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction">RequiredAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata"></a>

```go
func Rdata() *string
```

- *Type:* *string

---

##### `RelevantState`<sup>Required</sup> <a name="RelevantState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.relevantState"></a>

```go
func RelevantState() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredAction`<sup>Required</sup> <a name="RequiredAction" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction"></a>

```go
func RequiredAction() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredRecords</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckError</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.checkError">CheckError</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.records">Records</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckError`<sup>Required</sup> <a name="CheckError" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.checkError"></a>

```go
func CheckError() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredCheckErrorList</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Records`<sup>Required</sup> <a name="Records" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.records"></a>

```go
func Records() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscovered</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata">Rdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.relevantState">RelevantState</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction">RequiredAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata"></a>

```go
func Rdata() *string
```

- *Type:* *string

---

##### `RelevantState`<sup>Required</sup> <a name="RelevantState" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.relevantState"></a>

```go
func RelevantState() *[]*string
```

- *Type:* *[]*string

---

##### `RequiredAction`<sup>Required</sup> <a name="RequiredAction" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction"></a>

```go
func RequiredAction() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredRecords</a>

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get"></a>

```go
func Get(index *f64) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference <a name="FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.checkTime">CheckTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.desired">Desired</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.discovered">Discovered</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckTime`<sup>Required</sup> <a name="CheckTime" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.checkTime"></a>

```go
func CheckTime() *string
```

- *Type:* *string

---

##### `Desired`<sup>Required</sup> <a name="Desired" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.desired"></a>

```go
func Desired() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDesiredList</a>

---

##### `Discovered`<sup>Required</sup> <a name="Discovered" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.discovered"></a>

```go
func Discovered() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesDiscoveredList</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates">FirebaseAppHostingDomainCustomDomainStatusRequiredDnsUpdates</a>

---


### FirebaseAppHostingDomainServeOutputReference <a name="FirebaseAppHostingDomainServeOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainServeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingDomainServeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.putRedirect"></a>

```go
func PutRedirect(value FirebaseAppHostingDomainServeRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

---

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference">FirebaseAppHostingDomainServeRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirect"></a>

```go
func Redirect() FirebaseAppHostingDomainServeRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference">FirebaseAppHostingDomainServeRedirectOutputReference</a>

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.redirectInput"></a>

```go
func RedirectInput() FirebaseAppHostingDomainServeRedirect
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainServe
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServe">FirebaseAppHostingDomainServe</a>

---


### FirebaseAppHostingDomainServeRedirectOutputReference <a name="FirebaseAppHostingDomainServeRedirectOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainServeRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingDomainServeRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseAppHostingDomainServeRedirect
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainServeRedirect">FirebaseAppHostingDomainServeRedirect</a>

---


### FirebaseAppHostingDomainTimeoutsOutputReference <a name="FirebaseAppHostingDomainTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/firebaseapphostingdomain"

firebaseapphostingdomain.NewFirebaseAppHostingDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseAppHostingDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingDomain.FirebaseAppHostingDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



