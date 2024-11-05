# `dataGoogleSecretManagerRegionalSecretVersionAccess` Submodule <a name="`dataGoogleSecretManagerRegionalSecretVersionAccess` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecretVersionAccess <a name="DataGoogleSecretManagerRegionalSecretVersionAccess" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access google_secret_manager_regional_secret_version_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglesecretmanagerregionalsecretversionaccess"

datagooglesecretmanagerregionalsecretversionaccess.NewDataGoogleSecretManagerRegionalSecretVersionAccess(scope Construct, id *string, config DataGoogleSecretManagerRegionalSecretVersionAccessConfig) DataGoogleSecretManagerRegionalSecretVersionAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig">DataGoogleSecretManagerRegionalSecretVersionAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig">DataGoogleSecretManagerRegionalSecretVersionAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetIsSecretDataBase64">ResetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetId"></a>

```go
func ResetId()
```

##### `ResetIsSecretDataBase64` <a name="ResetIsSecretDataBase64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetIsSecretDataBase64"></a>

```go
func ResetIsSecretDataBase64()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetProject"></a>

```go
func ResetProject()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecretVersionAccess resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglesecretmanagerregionalsecretversionaccess"

datagooglesecretmanagerregionalsecretversionaccess.DataGoogleSecretManagerRegionalSecretVersionAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglesecretmanagerregionalsecretversionaccess"

datagooglesecretmanagerregionalsecretversionaccess.DataGoogleSecretManagerRegionalSecretVersionAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglesecretmanagerregionalsecretversionaccess"

datagooglesecretmanagerregionalsecretversionaccess.DataGoogleSecretManagerRegionalSecretVersionAccess_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglesecretmanagerregionalsecretversionaccess"

datagooglesecretmanagerregionalsecretversionaccess.DataGoogleSecretManagerRegionalSecretVersionAccess_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecretVersionAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecretVersionAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleSecretManagerRegionalSecretVersionAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecretVersionAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretData">SecretData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64Input">IsSecretDataBase64Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretData"></a>

```go
func SecretData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsSecretDataBase64Input`<sup>Optional</sup> <a name="IsSecretDataBase64Input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64Input"></a>

```go
func IsSecretDataBase64Input() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsSecretDataBase64`<sup>Required</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.isSecretDataBase64"></a>

```go
func IsSecretDataBase64() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretVersionAccessConfig <a name="DataGoogleSecretManagerRegionalSecretVersionAccessConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglesecretmanagerregionalsecretversionaccess"

&datagooglesecretmanagerregionalsecretversionaccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Secret: *string,
	Id: *string,
	IsSecretDataBase64: interface{},
	Location: *string,
	Project: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#secret DataGoogleSecretManagerRegionalSecretVersionAccess#secret}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#id DataGoogleSecretManagerRegionalSecretVersionAccess#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersionAccess#is_secret_data_base64}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#location DataGoogleSecretManagerRegionalSecretVersionAccess#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#project DataGoogleSecretManagerRegionalSecretVersionAccess#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#version DataGoogleSecretManagerRegionalSecretVersionAccess#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#secret DataGoogleSecretManagerRegionalSecretVersionAccess#secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#id DataGoogleSecretManagerRegionalSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSecretDataBase64`<sup>Optional</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.isSecretDataBase64"></a>

```go
IsSecretDataBase64 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersionAccess#is_secret_data_base64}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#location DataGoogleSecretManagerRegionalSecretVersionAccess#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#project DataGoogleSecretManagerRegionalSecretVersionAccess#project}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersionAccess.DataGoogleSecretManagerRegionalSecretVersionAccessConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/secret_manager_regional_secret_version_access#version DataGoogleSecretManagerRegionalSecretVersionAccess#version}.

---



