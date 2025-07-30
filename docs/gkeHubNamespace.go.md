# `gkeHubNamespace` Submodule <a name="`gkeHubNamespace` Submodule" id="@cdktf/provider-google.gkeHubNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubNamespace <a name="GkeHubNamespace" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace google_gke_hub_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.NewGkeHubNamespace(scope Construct, id *string, config GkeHubNamespaceConfig) GkeHubNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig">GkeHubNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig">GkeHubNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetNamespaceLabels">ResetNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.putTimeouts"></a>

```go
func PutTimeouts(value GkeHubNamespaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts">GkeHubNamespaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNamespaceLabels` <a name="ResetNamespaceLabels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetNamespaceLabels"></a>

```go
func ResetNamespaceLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.GkeHubNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.GkeHubNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.GkeHubNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.GkeHubNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GkeHubNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GkeHubNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GkeHubNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.state">State</a></code> | <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList">GkeHubNamespaceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference">GkeHubNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.namespaceLabelsInput">NamespaceLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeIdInput">ScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeNamespaceIdInput">ScopeNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.namespaceLabels">NamespaceLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeNamespaceId">ScopeNamespaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.state"></a>

```go
func State() GkeHubNamespaceStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList">GkeHubNamespaceStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.timeouts"></a>

```go
func Timeouts() GkeHubNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference">GkeHubNamespaceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceLabelsInput`<sup>Optional</sup> <a name="NamespaceLabelsInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.namespaceLabelsInput"></a>

```go
func NamespaceLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeIdInput"></a>

```go
func ScopeIdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ScopeNamespaceIdInput`<sup>Optional</sup> <a name="ScopeNamespaceIdInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeNamespaceIdInput"></a>

```go
func ScopeNamespaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceLabels`<sup>Required</sup> <a name="NamespaceLabels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.namespaceLabels"></a>

```go
func NamespaceLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `ScopeNamespaceId`<sup>Required</sup> <a name="ScopeNamespaceId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.scopeNamespaceId"></a>

```go
func ScopeNamespaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubNamespaceConfig <a name="GkeHubNamespaceConfig" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

&gkehubnamespace.GkeHubNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Scope: *string,
	ScopeId: *string,
	ScopeNamespaceId: *string,
	Id: *string,
	Labels: *map[string]*string,
	NamespaceLabels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.gkeHubNamespace.GkeHubNamespaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.scope">Scope</a></code> | <code>*string</code> | The name of the Scope instance. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.scopeId">ScopeId</a></code> | <code>*string</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.scopeNamespaceId">ScopeNamespaceId</a></code> | <code>*string</code> | The client-provided identifier of the namespace. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#id GkeHubNamespace#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for this Namespace. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.namespaceLabels">NamespaceLabels</a></code> | <code>*map[string]*string</code> | Namespace-level cluster namespace labels. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#project GkeHubNamespace#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts">GkeHubNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The name of the Scope instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#scope GkeHubNamespace#scope}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.scopeId"></a>

```go
ScopeId *string
```

- *Type:* *string

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#scope_id GkeHubNamespace#scope_id}

---

##### `ScopeNamespaceId`<sup>Required</sup> <a name="ScopeNamespaceId" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.scopeNamespaceId"></a>

```go
ScopeNamespaceId *string
```

- *Type:* *string

The client-provided identifier of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#scope_namespace_id GkeHubNamespace#scope_namespace_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#id GkeHubNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for this Namespace.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#labels GkeHubNamespace#labels}

---

##### `NamespaceLabels`<sup>Optional</sup> <a name="NamespaceLabels" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.namespaceLabels"></a>

```go
NamespaceLabels *map[string]*string
```

- *Type:* *map[string]*string

Namespace-level cluster namespace labels.

These labels are applied
to the related namespace of the member clusters bound to the parent
Scope. Scope-level labels ('namespace_labels' in the Fleet Scope
resource) take precedence over Namespace-level labels if they share
a key. Keys and values must be Kubernetes-conformant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#namespace_labels GkeHubNamespace#namespace_labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#project GkeHubNamespace#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceConfig.property.timeouts"></a>

```go
Timeouts GkeHubNamespaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts">GkeHubNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#timeouts GkeHubNamespace#timeouts}

---

### GkeHubNamespaceState <a name="GkeHubNamespaceState" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceState.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

&gkehubnamespace.GkeHubNamespaceState {

}
```


### GkeHubNamespaceTimeouts <a name="GkeHubNamespaceTimeouts" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

&gkehubnamespace.GkeHubNamespaceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#create GkeHubNamespace#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#delete GkeHubNamespace#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#update GkeHubNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#create GkeHubNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#delete GkeHubNamespace#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gke_hub_namespace#update GkeHubNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubNamespaceStateList <a name="GkeHubNamespaceStateList" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.NewGkeHubNamespaceStateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GkeHubNamespaceStateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.get"></a>

```go
func Get(index *f64) GkeHubNamespaceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GkeHubNamespaceStateOutputReference <a name="GkeHubNamespaceStateOutputReference" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.NewGkeHubNamespaceStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GkeHubNamespaceStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceState">GkeHubNamespaceState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceStateOutputReference.property.internalValue"></a>

```go
func InternalValue() GkeHubNamespaceState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceState">GkeHubNamespaceState</a>

---


### GkeHubNamespaceTimeoutsOutputReference <a name="GkeHubNamespaceTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/gkehubnamespace"

gkehubnamespace.NewGkeHubNamespaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GkeHubNamespaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubNamespace.GkeHubNamespaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



