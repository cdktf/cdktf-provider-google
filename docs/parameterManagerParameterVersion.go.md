# `parameterManagerParameterVersion` Submodule <a name="`parameterManagerParameterVersion` Submodule" id="@cdktf/provider-google.parameterManagerParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParameterManagerParameterVersion <a name="ParameterManagerParameterVersion" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version google_parameter_manager_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

parametermanagerparameterversion.NewParameterManagerParameterVersion(scope Construct, id *string, config ParameterManagerParameterVersionConfig) ParameterManagerParameterVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig">ParameterManagerParameterVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig">ParameterManagerParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.putTimeouts"></a>

```go
func PutTimeouts(value ParameterManagerParameterVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts">ParameterManagerParameterVersionTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

parametermanagerparameterversion.ParameterManagerParameterVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

parametermanagerparameterversion.ParameterManagerParameterVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

parametermanagerparameterversion.ParameterManagerParameterVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

parametermanagerparameterversion.ParameterManagerParameterVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ParameterManagerParameterVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ParameterManagerParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ParameterManagerParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference">ParameterManagerParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterDataInput">ParameterDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterInput">ParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameter">Parameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterData">ParameterData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeouts"></a>

```go
func Timeouts() ParameterManagerParameterVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference">ParameterManagerParameterVersionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterDataInput`<sup>Optional</sup> <a name="ParameterDataInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterDataInput"></a>

```go
func ParameterDataInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterInput"></a>

```go
func ParameterInput() *string
```

- *Type:* *string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionIdInput"></a>

```go
func ParameterVersionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameter"></a>

```go
func Parameter() *string
```

- *Type:* *string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterData"></a>

```go
func ParameterData() *string
```

- *Type:* *string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionId"></a>

```go
func ParameterVersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ParameterManagerParameterVersionConfig <a name="ParameterManagerParameterVersionConfig" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

&parametermanagerparameterversion.ParameterManagerParameterVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parameter: *string,
	ParameterData: *string,
	ParameterVersionId: *string,
	Disabled: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameter">Parameter</a></code> | <code>*string</code> | Parameter Manager Parameter resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterData">ParameterData</a></code> | <code>*string</code> | The Parameter data. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>*string</code> | Version ID of the Parameter Version Resource. This must be unique within the Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | The current state of Parameter Version. This field is only applicable for updating Parameter Version. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#id ParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts">ParameterManagerParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameter"></a>

```go
Parameter *string
```

- *Type:* *string

Parameter Manager Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#parameter ParameterManagerParameterVersion#parameter}

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterData"></a>

```go
ParameterData *string
```

- *Type:* *string

The Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#parameter_data ParameterManagerParameterVersion#parameter_data}

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterVersionId"></a>

```go
ParameterVersionId *string
```

- *Type:* *string

Version ID of the Parameter Version Resource. This must be unique within the Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#parameter_version_id ParameterManagerParameterVersion#parameter_version_id}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

The current state of Parameter Version. This field is only applicable for updating Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#disabled ParameterManagerParameterVersion#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#id ParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.timeouts"></a>

```go
Timeouts ParameterManagerParameterVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts">ParameterManagerParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#timeouts ParameterManagerParameterVersion#timeouts}

---

### ParameterManagerParameterVersionTimeouts <a name="ParameterManagerParameterVersionTimeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

&parametermanagerparameterversion.ParameterManagerParameterVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#create ParameterManagerParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#delete ParameterManagerParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#update ParameterManagerParameterVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#create ParameterManagerParameterVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#delete ParameterManagerParameterVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/parameter_manager_parameter_version#update ParameterManagerParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParameterManagerParameterVersionTimeoutsOutputReference <a name="ParameterManagerParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/parametermanagerparameterversion"

parametermanagerparameterversion.NewParameterManagerParameterVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ParameterManagerParameterVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



