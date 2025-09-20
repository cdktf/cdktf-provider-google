# `edgenetworkInterconnectAttachment` Submodule <a name="`edgenetworkInterconnectAttachment` Submodule" id="@cdktf/provider-google.edgenetworkInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgenetworkInterconnectAttachment <a name="EdgenetworkInterconnectAttachment" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment google_edgenetwork_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

edgenetworkinterconnectattachment.NewEdgenetworkInterconnectAttachment(scope Construct, id *string, config EdgenetworkInterconnectAttachmentConfig) EdgenetworkInterconnectAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig">EdgenetworkInterconnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig">EdgenetworkInterconnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.putTimeouts"></a>

```go
func PutTimeouts(value EdgenetworkInterconnectAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts">EdgenetworkInterconnectAttachmentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EdgenetworkInterconnectAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

edgenetworkinterconnectattachment.EdgenetworkInterconnectAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

edgenetworkinterconnectattachment.EdgenetworkInterconnectAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

edgenetworkinterconnectattachment.EdgenetworkInterconnectAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

edgenetworkinterconnectattachment.EdgenetworkInterconnectAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EdgenetworkInterconnectAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EdgenetworkInterconnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EdgenetworkInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EdgenetworkInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference">EdgenetworkInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnectAttachmentIdInput">InterconnectAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnectInput">InterconnectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.vlanIdInput">VlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnect">Interconnect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnectAttachmentId">InterconnectAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.vlanId">VlanId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.timeouts"></a>

```go
func Timeouts() EdgenetworkInterconnectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference">EdgenetworkInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectAttachmentIdInput`<sup>Optional</sup> <a name="InterconnectAttachmentIdInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnectAttachmentIdInput"></a>

```go
func InterconnectAttachmentIdInput() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnectInput"></a>

```go
func InterconnectInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.vlanIdInput"></a>

```go
func VlanIdInput() *f64
```

- *Type:* *f64

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnect"></a>

```go
func Interconnect() *string
```

- *Type:* *string

---

##### `InterconnectAttachmentId`<sup>Required</sup> <a name="InterconnectAttachmentId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.interconnectAttachmentId"></a>

```go
func InterconnectAttachmentId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.vlanId"></a>

```go
func VlanId() *f64
```

- *Type:* *f64

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgenetworkInterconnectAttachmentConfig <a name="EdgenetworkInterconnectAttachmentConfig" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

&edgenetworkinterconnectattachment.EdgenetworkInterconnectAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Interconnect: *string,
	InterconnectAttachmentId: *string,
	Location: *string,
	Network: *string,
	VlanId: *f64,
	Zone: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Mtu: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.interconnect">Interconnect</a></code> | <code>*string</code> | The ID of the underlying interconnect that this attachment's traffic will traverse through. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.interconnectAttachmentId">InterconnectAttachmentId</a></code> | <code>*string</code> | A unique ID that identifies this interconnect attachment. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.location">Location</a></code> | <code>*string</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.network">Network</a></code> | <code>*string</code> | The ID of the network to which this interconnect attachment belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.vlanId">VlanId</a></code> | <code>*f64</code> | VLAN ID provided by user. Must be site-wise unique. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.zone">Zone</a></code> | <code>*string</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#id EdgenetworkInterconnectAttachment#id}. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | IP (L3) MTU value of the virtual edge cloud. Default value is '1500'. Possible values are: '1500', '9000'. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#project EdgenetworkInterconnectAttachment#project}. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts">EdgenetworkInterconnectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.interconnect"></a>

```go
Interconnect *string
```

- *Type:* *string

The ID of the underlying interconnect that this attachment's traffic will traverse through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#interconnect EdgenetworkInterconnectAttachment#interconnect}

---

##### `InterconnectAttachmentId`<sup>Required</sup> <a name="InterconnectAttachmentId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.interconnectAttachmentId"></a>

```go
InterconnectAttachmentId *string
```

- *Type:* *string

A unique ID that identifies this interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#interconnect_attachment_id EdgenetworkInterconnectAttachment#interconnect_attachment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#location EdgenetworkInterconnectAttachment#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The ID of the network to which this interconnect attachment belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#network EdgenetworkInterconnectAttachment#network}

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.vlanId"></a>

```go
VlanId *f64
```

- *Type:* *f64

VLAN ID provided by user. Must be site-wise unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#vlan_id EdgenetworkInterconnectAttachment#vlan_id}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#zone EdgenetworkInterconnectAttachment#zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#description EdgenetworkInterconnectAttachment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#id EdgenetworkInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#labels EdgenetworkInterconnectAttachment#labels}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

IP (L3) MTU value of the virtual edge cloud. Default value is '1500'. Possible values are: '1500', '9000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#mtu EdgenetworkInterconnectAttachment#mtu}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#project EdgenetworkInterconnectAttachment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentConfig.property.timeouts"></a>

```go
Timeouts EdgenetworkInterconnectAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts">EdgenetworkInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#timeouts EdgenetworkInterconnectAttachment#timeouts}

---

### EdgenetworkInterconnectAttachmentTimeouts <a name="EdgenetworkInterconnectAttachmentTimeouts" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

&edgenetworkinterconnectattachment.EdgenetworkInterconnectAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#create EdgenetworkInterconnectAttachment#create}. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#delete EdgenetworkInterconnectAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#update EdgenetworkInterconnectAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#create EdgenetworkInterconnectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#delete EdgenetworkInterconnectAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/edgenetwork_interconnect_attachment#update EdgenetworkInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EdgenetworkInterconnectAttachmentTimeoutsOutputReference <a name="EdgenetworkInterconnectAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/edgenetworkinterconnectattachment"

edgenetworkinterconnectattachment.NewEdgenetworkInterconnectAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgenetworkInterconnectAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgenetworkInterconnectAttachment.EdgenetworkInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



