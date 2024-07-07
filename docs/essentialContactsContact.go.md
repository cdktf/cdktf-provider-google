# `essentialContactsContact` Submodule <a name="`essentialContactsContact` Submodule" id="@cdktf/provider-google.essentialContactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EssentialContactsContact <a name="EssentialContactsContact" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact google_essential_contacts_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

essentialcontactscontact.NewEssentialContactsContact(scope Construct, id *string, config EssentialContactsContactConfig) EssentialContactsContact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig">EssentialContactsContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig">EssentialContactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts"></a>

```go
func PutTimeouts(value EssentialContactsContactTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EssentialContactsContact resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

essentialcontactscontact.EssentialContactsContact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

essentialcontactscontact.EssentialContactsContact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

essentialcontactscontact.EssentialContactsContact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

essentialcontactscontact.EssentialContactsContact_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EssentialContactsContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EssentialContactsContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EssentialContactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EssentialContactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference">EssentialContactsContactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTagInput">LanguageTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptionsInput">NotificationCategorySubscriptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTag">LanguageTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptions">NotificationCategorySubscriptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeouts"></a>

```go
func Timeouts() EssentialContactsContactTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference">EssentialContactsContactTimeoutsOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageTagInput`<sup>Optional</sup> <a name="LanguageTagInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTagInput"></a>

```go
func LanguageTagInput() *string
```

- *Type:* *string

---

##### `NotificationCategorySubscriptionsInput`<sup>Optional</sup> <a name="NotificationCategorySubscriptionsInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptionsInput"></a>

```go
func NotificationCategorySubscriptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageTag`<sup>Required</sup> <a name="LanguageTag" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.languageTag"></a>

```go
func LanguageTag() *string
```

- *Type:* *string

---

##### `NotificationCategorySubscriptions`<sup>Required</sup> <a name="NotificationCategorySubscriptions" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.notificationCategorySubscriptions"></a>

```go
func NotificationCategorySubscriptions() *[]*string
```

- *Type:* *[]*string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EssentialContactsContactConfig <a name="EssentialContactsContactConfig" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

&essentialcontactscontact.EssentialContactsContactConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	LanguageTag: *string,
	NotificationCategorySubscriptions: *[]*string,
	Parent: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.essentialContactsContact.EssentialContactsContactTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.email">Email</a></code> | <code>*string</code> | The email address to send notifications to. This does not need to be a Google account. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.languageTag">LanguageTag</a></code> | <code>*string</code> | The preferred language for notifications, as a ISO 639-1 language code. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.notificationCategorySubscriptions">NotificationCategorySubscriptions</a></code> | <code>*[]*string</code> | The categories of notifications that the contact will receive communications for. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.parent">Parent</a></code> | <code>*string</code> | The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#id EssentialContactsContact#id}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The email address to send notifications to. This does not need to be a Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#email EssentialContactsContact#email}

---

##### `LanguageTag`<sup>Required</sup> <a name="LanguageTag" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.languageTag"></a>

```go
LanguageTag *string
```

- *Type:* *string

The preferred language for notifications, as a ISO 639-1 language code.

See Supported languages for a list of supported languages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#language_tag EssentialContactsContact#language_tag}

---

##### `NotificationCategorySubscriptions`<sup>Required</sup> <a name="NotificationCategorySubscriptions" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.notificationCategorySubscriptions"></a>

```go
NotificationCategorySubscriptions *[]*string
```

- *Type:* *[]*string

The categories of notifications that the contact will receive communications for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#notification_category_subscriptions EssentialContactsContact#notification_category_subscriptions}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#parent EssentialContactsContact#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#id EssentialContactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactConfig.property.timeouts"></a>

```go
Timeouts EssentialContactsContactTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts">EssentialContactsContactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#timeouts EssentialContactsContact#timeouts}

---

### EssentialContactsContactTimeouts <a name="EssentialContactsContactTimeouts" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

&essentialcontactscontact.EssentialContactsContactTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#create EssentialContactsContact#create}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#delete EssentialContactsContact#delete}. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#update EssentialContactsContact#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#create EssentialContactsContact#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#delete EssentialContactsContact#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/essential_contacts_contact#update EssentialContactsContact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EssentialContactsContactTimeoutsOutputReference <a name="EssentialContactsContactTimeoutsOutputReference" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/essentialcontactscontact"

essentialcontactscontact.NewEssentialContactsContactTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EssentialContactsContactTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.essentialContactsContact.EssentialContactsContactTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



