# `dataGoogleSecretManagerSecrets` Submodule <a name="`dataGoogleSecretManagerSecrets` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecrets <a name="DataGoogleSecretManagerSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets google_secret_manager_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecrets(scope Construct, id *string, config DataGoogleSecretManagerSecretsConfig) DataGoogleSecretManagerSecrets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig">DataGoogleSecretManagerSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig">DataGoogleSecretManagerSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.DataGoogleSecretManagerSecrets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.DataGoogleSecretManagerSecrets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.DataGoogleSecretManagerSecrets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.DataGoogleSecretManagerSecrets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleSecretManagerSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleSecretManagerSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleSecretManagerSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList">DataGoogleSecretManagerSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.secrets"></a>

```go
func Secrets() DataGoogleSecretManagerSecretsSecretsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList">DataGoogleSecretManagerSecretsSecretsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecrets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretsConfig <a name="DataGoogleSecretManagerSecretsConfig" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.filter">Filter</a></code> | <code>*string</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all secrets are listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets#filter DataGoogleSecretManagerSecrets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets#id DataGoogleSecretManagerSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/secret_manager_secrets#project DataGoogleSecretManagerSecrets#project}.

---

### DataGoogleSecretManagerSecretsSecrets <a name="DataGoogleSecretManagerSecretsSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecrets {

}
```


### DataGoogleSecretManagerSecretsSecretsReplication <a name="DataGoogleSecretManagerSecretsSecretsReplication" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsReplication {

}
```


### DataGoogleSecretManagerSecretsSecretsReplicationAuto <a name="DataGoogleSecretManagerSecretsSecretsReplicationAuto" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto {

}
```


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption {

}
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManaged <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged {

}
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas {

}
```


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption {

}
```


### DataGoogleSecretManagerSecretsSecretsRotation <a name="DataGoogleSecretManagerSecretsSecretsRotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsRotation {

}
```


### DataGoogleSecretManagerSecretsSecretsTopics <a name="DataGoogleSecretManagerSecretsSecretsTopics" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

&datagooglesecretmanagersecrets.DataGoogleSecretManagerSecretsSecretsTopics {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerSecretsSecretsList <a name="DataGoogleSecretManagerSecretsSecretsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsOutputReference <a name="DataGoogleSecretManagerSecretsSecretsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.annotations">Annotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList">DataGoogleSecretManagerSecretsSecretsReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList">DataGoogleSecretManagerSecretsSecretsRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList">DataGoogleSecretManagerSecretsSecretsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionAliases">VersionAliases</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets">DataGoogleSecretManagerSecretsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.replication"></a>

```go
func Replication() DataGoogleSecretManagerSecretsSecretsReplicationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList">DataGoogleSecretManagerSecretsSecretsReplicationList</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.rotation"></a>

```go
func Rotation() DataGoogleSecretManagerSecretsSecretsRotationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList">DataGoogleSecretManagerSecretsSecretsRotationList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.topics"></a>

```go
func Topics() DataGoogleSecretManagerSecretsSecretsTopicsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList">DataGoogleSecretManagerSecretsSecretsTopicsList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionAliases"></a>

```go
func VersionAliases() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.versionDestroyTtl"></a>

```go
func VersionDestroyTtl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecrets
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecrets">DataGoogleSecretManagerSecretsSecrets</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoList <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationAutoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationAutoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto">DataGoogleSecretManagerSecretsSecretsReplicationAuto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```go
func CustomerManagedEncryption() DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationAutoCustomerManagedEncryptionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsReplicationAuto
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAuto">DataGoogleSecretManagerSecretsSecretsReplicationAuto</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationList <a name="DataGoogleSecretManagerSecretsSecretsReplicationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsReplicationOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.auto">Auto</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList">DataGoogleSecretManagerSecretsSecretsReplicationAutoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication">DataGoogleSecretManagerSecretsSecretsReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.auto"></a>

```go
func Auto() DataGoogleSecretManagerSecretsSecretsReplicationAutoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationAutoList">DataGoogleSecretManagerSecretsSecretsReplicationAutoList</a>

---

##### `UserManaged`<sup>Required</sup> <a name="UserManaged" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.userManaged"></a>

```go
func UserManaged() DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsReplication
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplication">DataGoogleSecretManagerSecretsSecretsReplication</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationUserManagedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged">DataGoogleSecretManagerSecretsSecretsReplicationUserManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.replicas"></a>

```go
func Replicas() DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsReplicationUserManaged
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManaged">DataGoogleSecretManagerSecretsSecretsReplicationUserManaged</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference <a name="DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```go
func CustomerManagedEncryption() DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasCustomerManagedEncryptionList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas">DataGoogleSecretManagerSecretsSecretsReplicationUserManagedReplicas</a>

---


### DataGoogleSecretManagerSecretsSecretsRotationList <a name="DataGoogleSecretManagerSecretsSecretsRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsRotationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsRotationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsRotationOutputReference <a name="DataGoogleSecretManagerSecretsSecretsRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsRotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsRotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation">DataGoogleSecretManagerSecretsSecretsRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.nextRotationTime"></a>

```go
func NextRotationTime() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsRotation
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsRotation">DataGoogleSecretManagerSecretsSecretsRotation</a>

---


### DataGoogleSecretManagerSecretsSecretsTopicsList <a name="DataGoogleSecretManagerSecretsSecretsTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsTopicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleSecretManagerSecretsSecretsTopicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get"></a>

```go
func Get(index *f64) DataGoogleSecretManagerSecretsSecretsTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleSecretManagerSecretsSecretsTopicsOutputReference <a name="DataGoogleSecretManagerSecretsSecretsTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglesecretmanagersecrets"

datagooglesecretmanagersecrets.NewDataGoogleSecretManagerSecretsSecretsTopicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleSecretManagerSecretsSecretsTopicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics">DataGoogleSecretManagerSecretsSecretsTopics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopicsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleSecretManagerSecretsSecretsTopics
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerSecrets.DataGoogleSecretManagerSecretsSecretsTopics">DataGoogleSecretManagerSecretsSecretsTopics</a>

---



