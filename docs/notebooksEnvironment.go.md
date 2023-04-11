# `notebooksEnvironment` Submodule <a name="`notebooksEnvironment` Submodule" id="@cdktf/provider-google.notebooksEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksEnvironment <a name="NotebooksEnvironment" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment google_notebooks_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NewNotebooksEnvironment(scope Construct, id *string, config NotebooksEnvironmentConfig) NotebooksEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig">NotebooksEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig">NotebooksEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage">PutVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetVmImage">ResetVmImage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage"></a>

```go
func PutContainerImage(value NotebooksEnvironmentContainerImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value NotebooksEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a>

---

##### `PutVmImage` <a name="PutVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage"></a>

```go
func PutVmImage(value NotebooksEnvironmentVmImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetContainerImage"></a>

```go
func ResetContainerImage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetPostStartupScript"></a>

```go
func ResetPostStartupScript()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVmImage` <a name="ResetVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.resetVmImage"></a>

```go
func ResetVmImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NotebooksEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NotebooksEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NotebooksEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference">NotebooksEnvironmentContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference">NotebooksEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference">NotebooksEnvironmentVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImageInput">VmImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScript">PostStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImage"></a>

```go
func ContainerImage() NotebooksEnvironmentContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference">NotebooksEnvironmentContainerImageOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeouts"></a>

```go
func Timeouts() NotebooksEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference">NotebooksEnvironmentTimeoutsOutputReference</a>

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImage"></a>

```go
func VmImage() NotebooksEnvironmentVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference">NotebooksEnvironmentVmImageOutputReference</a>

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.containerImageInput"></a>

```go
func ContainerImageInput() NotebooksEnvironmentContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScriptInput"></a>

```go
func PostStartupScriptInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.vmImageInput"></a>

```go
func VmImageInput() NotebooksEnvironmentVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.postStartupScript"></a>

```go
func PostStartupScript() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksEnvironmentConfig <a name="NotebooksEnvironmentConfig" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

&notebooksenvironment.NotebooksEnvironmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ContainerImage: github.com/cdktf/cdktf-provider-google-go/google.notebooksEnvironment.NotebooksEnvironmentContainerImage,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	PostStartupScript: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.notebooksEnvironment.NotebooksEnvironmentTimeouts,
	VmImage: github.com/cdktf/cdktf-provider-google-go/google.notebooksEnvironment.NotebooksEnvironmentVmImage,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.location">Location</a></code> | <code>*string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | A brief description of this environment. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of this environment for the UI. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#id NotebooksEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.postStartupScript">PostStartupScript</a></code> | <code>*string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#project NotebooksEnvironment#project}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | vm_image block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#location NotebooksEnvironment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#name NotebooksEnvironment#name}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.containerImage"></a>

```go
ContainerImage NotebooksEnvironmentContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#container_image NotebooksEnvironment#container_image}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A brief description of this environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#description NotebooksEnvironment#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of this environment for the UI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#display_name NotebooksEnvironment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#id NotebooksEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.postStartupScript"></a>

```go
PostStartupScript *string
```

- *Type:* *string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#post_startup_script NotebooksEnvironment#post_startup_script}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#project NotebooksEnvironment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.timeouts"></a>

```go
Timeouts NotebooksEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts">NotebooksEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#timeouts NotebooksEnvironment#timeouts}

---

##### `VmImage`<sup>Optional</sup> <a name="VmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentConfig.property.vmImage"></a>

```go
VmImage NotebooksEnvironmentVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#vm_image NotebooksEnvironment#vm_image}

---

### NotebooksEnvironmentContainerImage <a name="NotebooksEnvironmentContainerImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

&notebooksenvironment.NotebooksEnvironmentContainerImage {
	Repository: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.repository">Repository</a></code> | <code>*string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.tag">Tag</a></code> | <code>*string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#repository NotebooksEnvironment#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#tag NotebooksEnvironment#tag}

---

### NotebooksEnvironmentTimeouts <a name="NotebooksEnvironmentTimeouts" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

&notebooksenvironment.NotebooksEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#create NotebooksEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#delete NotebooksEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#update NotebooksEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#create NotebooksEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#delete NotebooksEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#update NotebooksEnvironment#update}.

---

### NotebooksEnvironmentVmImage <a name="NotebooksEnvironmentVmImage" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

&notebooksenvironment.NotebooksEnvironmentVmImage {
	Project: *string,
	ImageFamily: *string,
	ImageName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.project">Project</a></code> | <code>*string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageFamily">ImageFamily</a></code> | <code>*string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageName">ImageName</a></code> | <code>*string</code> | Use VM image name to find the image. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.project"></a>

```go
Project *string
```

- *Type:* *string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#project NotebooksEnvironment#project}

---

##### `ImageFamily`<sup>Optional</sup> <a name="ImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageFamily"></a>

```go
ImageFamily *string
```

- *Type:* *string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#image_family NotebooksEnvironment#image_family}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_environment#image_name NotebooksEnvironment#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksEnvironmentContainerImageOutputReference <a name="NotebooksEnvironmentContainerImageOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NewNotebooksEnvironmentContainerImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksEnvironmentContainerImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImageOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksEnvironmentContainerImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentContainerImage">NotebooksEnvironmentContainerImage</a>

---


### NotebooksEnvironmentTimeoutsOutputReference <a name="NotebooksEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NewNotebooksEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotebooksEnvironmentVmImageOutputReference <a name="NotebooksEnvironmentVmImageOutputReference" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/notebooksenvironment"

notebooksenvironment.NewNotebooksEnvironmentVmImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksEnvironmentVmImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageFamily">ResetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageFamily` <a name="ResetImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageFamily"></a>

```go
func ResetImageFamily()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.resetImageName"></a>

```go
func ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput">ImageFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamily">ImageFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageFamilyInput`<sup>Optional</sup> <a name="ImageFamilyInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput"></a>

```go
func ImageFamilyInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ImageFamily`<sup>Required</sup> <a name="ImageFamily" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageFamily"></a>

```go
func ImageFamily() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImageOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksEnvironmentVmImage
```

- *Type:* <a href="#@cdktf/provider-google.notebooksEnvironment.NotebooksEnvironmentVmImage">NotebooksEnvironmentVmImage</a>

---



