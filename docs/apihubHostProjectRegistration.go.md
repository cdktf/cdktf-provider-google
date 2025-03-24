# `apihubHostProjectRegistration` Submodule <a name="`apihubHostProjectRegistration` Submodule" id="@cdktf/provider-google.apihubHostProjectRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubHostProjectRegistration <a name="ApihubHostProjectRegistration" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration google_apihub_host_project_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

apihubhostprojectregistration.NewApihubHostProjectRegistration(scope Construct, id *string, config ApihubHostProjectRegistrationConfig) ApihubHostProjectRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig">ApihubHostProjectRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig">ApihubHostProjectRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.putTimeouts"></a>

```go
func PutTimeouts(value ApihubHostProjectRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubHostProjectRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

apihubhostprojectregistration.ApihubHostProjectRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

apihubhostprojectregistration.ApihubHostProjectRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

apihubhostprojectregistration.ApihubHostProjectRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

apihubhostprojectregistration.ApihubHostProjectRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApihubHostProjectRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApihubHostProjectRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApihubHostProjectRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApihubHostProjectRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference">ApihubHostProjectRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProjectInput">GcpProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationIdInput">HostProjectRegistrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProject">GcpProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationId">HostProjectRegistrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeouts"></a>

```go
func Timeouts() ApihubHostProjectRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference">ApihubHostProjectRegistrationTimeoutsOutputReference</a>

---

##### `GcpProjectInput`<sup>Optional</sup> <a name="GcpProjectInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProjectInput"></a>

```go
func GcpProjectInput() *string
```

- *Type:* *string

---

##### `HostProjectRegistrationIdInput`<sup>Optional</sup> <a name="HostProjectRegistrationIdInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationIdInput"></a>

```go
func HostProjectRegistrationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `GcpProject`<sup>Required</sup> <a name="GcpProject" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.gcpProject"></a>

```go
func GcpProject() *string
```

- *Type:* *string

---

##### `HostProjectRegistrationId`<sup>Required</sup> <a name="HostProjectRegistrationId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.hostProjectRegistrationId"></a>

```go
func HostProjectRegistrationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubHostProjectRegistrationConfig <a name="ApihubHostProjectRegistrationConfig" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

&apihubhostprojectregistration.ApihubHostProjectRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GcpProject: *string,
	HostProjectRegistrationId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.gcpProject">GcpProject</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.hostProjectRegistrationId">HostProjectRegistrationId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.location">Location</a></code> | <code>*string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#id ApihubHostProjectRegistration#id}. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#project ApihubHostProjectRegistration#project}. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GcpProject`<sup>Required</sup> <a name="GcpProject" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.gcpProject"></a>

```go
GcpProject *string
```

- *Type:* *string

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#gcp_project ApihubHostProjectRegistration#gcp_project}

---

##### `HostProjectRegistrationId`<sup>Required</sup> <a name="HostProjectRegistrationId" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.hostProjectRegistrationId"></a>

```go
HostProjectRegistrationId *string
```

- *Type:* *string

Required.

The ID to use for the Host Project Registration, which will become the
final component of the host project registration's resource name. The ID
must be the same as the Google cloud project specified in the
host_project_registration.gcp_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#host_project_registration_id ApihubHostProjectRegistration#host_project_registration_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#location ApihubHostProjectRegistration#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#id ApihubHostProjectRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#project ApihubHostProjectRegistration#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationConfig.property.timeouts"></a>

```go
Timeouts ApihubHostProjectRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts">ApihubHostProjectRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#timeouts ApihubHostProjectRegistration#timeouts}

---

### ApihubHostProjectRegistrationTimeouts <a name="ApihubHostProjectRegistrationTimeouts" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

&apihubhostprojectregistration.ApihubHostProjectRegistrationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#create ApihubHostProjectRegistration#create}. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#delete ApihubHostProjectRegistration#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#create ApihubHostProjectRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/apihub_host_project_registration#delete ApihubHostProjectRegistration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubHostProjectRegistrationTimeoutsOutputReference <a name="ApihubHostProjectRegistrationTimeoutsOutputReference" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/apihubhostprojectregistration"

apihubhostprojectregistration.NewApihubHostProjectRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubHostProjectRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubHostProjectRegistration.ApihubHostProjectRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



