# `geminiRepositoryGroup` Submodule <a name="`geminiRepositoryGroup` Submodule" id="@cdktf/provider-google.geminiRepositoryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiRepositoryGroup <a name="GeminiRepositoryGroup" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group google_gemini_repository_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.NewGeminiRepositoryGroup(scope Construct, id *string, config GeminiRepositoryGroupConfig) GeminiRepositoryGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig">GeminiRepositoryGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig">GeminiRepositoryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putRepositories">PutRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRepositories` <a name="PutRepositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putRepositories"></a>

```go
func PutRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts"></a>

```go
func PutTimeouts(value GeminiRepositoryGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiRepositoryGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.GeminiRepositoryGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.GeminiRepositoryGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.GeminiRepositoryGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.GeminiRepositoryGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiRepositoryGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiRepositoryGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiRepositoryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiRepositoryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositories">Repositories</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList">GeminiRepositoryGroupRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference">GeminiRepositoryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndexInput">CodeRepositoryIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoriesInput">RepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupIdInput">RepositoryGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositories"></a>

```go
func Repositories() GeminiRepositoryGroupRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList">GeminiRepositoryGroupRepositoriesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeouts"></a>

```go
func Timeouts() GeminiRepositoryGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference">GeminiRepositoryGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndexInput`<sup>Optional</sup> <a name="CodeRepositoryIndexInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndexInput"></a>

```go
func CodeRepositoryIndexInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoriesInput"></a>

```go
func RepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryGroupIdInput`<sup>Optional</sup> <a name="RepositoryGroupIdInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupIdInput"></a>

```go
func RepositoryGroupIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndex"></a>

```go
func CodeRepositoryIndex() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupId"></a>

```go
func RepositoryGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiRepositoryGroupConfig <a name="GeminiRepositoryGroupConfig" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

&geminirepositorygroup.GeminiRepositoryGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CodeRepositoryIndex: *string,
	Location: *string,
	Repositories: interface{},
	RepositoryGroupId: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>*string</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositories">Repositories</a></code> | <code>interface{}</code> | repositories block. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>*string</code> | Required. Id of the Repository Group. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#id GeminiRepositoryGroup#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#project GeminiRepositoryGroup#project}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.codeRepositoryIndex"></a>

```go
CodeRepositoryIndex *string
```

- *Type:* *string

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#code_repository_index GeminiRepositoryGroup#code_repository_index}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#location GeminiRepositoryGroup#location}

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositories"></a>

```go
Repositories interface{}
```

- *Type:* interface{}

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#repositories GeminiRepositoryGroup#repositories}

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositoryGroupId"></a>

```go
RepositoryGroupId *string
```

- *Type:* *string

Required. Id of the Repository Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#repository_group_id GeminiRepositoryGroup#repository_group_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#id GeminiRepositoryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#labels GeminiRepositoryGroup#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#project GeminiRepositoryGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.timeouts"></a>

```go
Timeouts GeminiRepositoryGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#timeouts GeminiRepositoryGroup#timeouts}

---

### GeminiRepositoryGroupRepositories <a name="GeminiRepositoryGroupRepositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

&geminirepositorygroup.GeminiRepositoryGroupRepositories {
	BranchPattern: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.branchPattern">BranchPattern</a></code> | <code>*string</code> | Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.resource">Resource</a></code> | <code>*string</code> | Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed. |

---

##### `BranchPattern`<sup>Required</sup> <a name="BranchPattern" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.branchPattern"></a>

```go
BranchPattern *string
```

- *Type:* *string

Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#branch_pattern GeminiRepositoryGroup#branch_pattern}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#resource GeminiRepositoryGroup#resource}

---

### GeminiRepositoryGroupTimeouts <a name="GeminiRepositoryGroupTimeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

&geminirepositorygroup.GeminiRepositoryGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#create GeminiRepositoryGroup#create}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#delete GeminiRepositoryGroup#delete}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#update GeminiRepositoryGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#create GeminiRepositoryGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#delete GeminiRepositoryGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/gemini_repository_group#update GeminiRepositoryGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiRepositoryGroupRepositoriesList <a name="GeminiRepositoryGroupRepositoriesList" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.NewGeminiRepositoryGroupRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiRepositoryGroupRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.get"></a>

```go
func Get(index *f64) GeminiRepositoryGroupRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiRepositoryGroupRepositoriesOutputReference <a name="GeminiRepositoryGroupRepositoriesOutputReference" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.NewGeminiRepositoryGroupRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiRepositoryGroupRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput">BranchPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern">BranchPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchPatternInput`<sup>Optional</sup> <a name="BranchPatternInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput"></a>

```go
func BranchPatternInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `BranchPattern`<sup>Required</sup> <a name="BranchPattern" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern"></a>

```go
func BranchPattern() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiRepositoryGroupTimeoutsOutputReference <a name="GeminiRepositoryGroupTimeoutsOutputReference" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/geminirepositorygroup"

geminirepositorygroup.NewGeminiRepositoryGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiRepositoryGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



