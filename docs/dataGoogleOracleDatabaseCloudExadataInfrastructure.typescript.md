# `dataGoogleOracleDatabaseCloudExadataInfrastructure` Submodule <a name="`dataGoogleOracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseCloudExadataInfrastructure <a name="DataGoogleOracleDatabaseCloudExadataInfrastructure" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure(scope: Construct, id: string, config: DataGoogleOracleDatabaseCloudExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig">DataGoogleOracleDatabaseCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig">DataGoogleOracleDatabaseCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformDataSource"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```typescript
public readonly properties: DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseCloudExadataInfrastructureConfig <a name="DataGoogleOracleDatabaseCloudExadataInfrastructureConfig" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudExadataInfrastructureConfig: dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#id DataGoogleOracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#project DataGoogleOracleDatabaseCloudExadataInfrastructure#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id DataGoogleOracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#location DataGoogleOracleDatabaseCloudExadataInfrastructure#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#id DataGoogleOracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/oracle_database_cloud_exadata_infrastructure#project DataGoogleOracleDatabaseCloudExadataInfrastructure#project}.

---

### DataGoogleOracleDatabaseCloudExadataInfrastructureProperties <a name="DataGoogleOracleDatabaseCloudExadataInfrastructureProperties" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudExadataInfrastructureProperties: dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureProperties = { ... }
```


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts: dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts = { ... }
```


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

const dataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow: dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>

---


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">customActionTimeoutMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">leadTimeWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutMins`<sup>Required</sup> <a name="customActionTimeoutMins" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```typescript
public readonly customActionTimeoutMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leadTimeWeek`<sup>Required</sup> <a name="leadTimeWeek" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```typescript
public readonly leadTimeWeek: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleOracleDatabaseCloudExadataInfrastructure } from '@cdktf/provider-google'

new dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">activatedStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">availableStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">dbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">maxDataStorageTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">maxDbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">maxMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">monthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">monthlyStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">nextMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">nextSecurityMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">storageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">totalStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureProperties">DataGoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```typescript
public readonly activatedStorageCount: number;
```

- *Type:* number

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

---

##### `availableStorageSizeGb`<sup>Required</sup> <a name="availableStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```typescript
public readonly availableStorageSizeGb: number;
```

- *Type:* number

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```typescript
public readonly customerContacts: DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```typescript
public readonly dbServerVersion: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList">DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDataStorageTb`<sup>Required</sup> <a name="maxDataStorageTb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```typescript
public readonly maxDataStorageTb: number;
```

- *Type:* number

---

##### `maxDbNodeStorageSizeGb`<sup>Required</sup> <a name="maxDbNodeStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```typescript
public readonly maxDbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `maxMemoryGb`<sup>Required</sup> <a name="maxMemoryGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```typescript
public readonly maxMemoryGb: number;
```

- *Type:* number

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `monthlyDbServerVersion`<sup>Required</sup> <a name="monthlyDbServerVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```typescript
public readonly monthlyDbServerVersion: string;
```

- *Type:* string

---

##### `monthlyStorageServerVersion`<sup>Required</sup> <a name="monthlyStorageServerVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```typescript
public readonly monthlyStorageServerVersion: string;
```

- *Type:* string

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `nextMaintenanceRunTime`<sup>Required</sup> <a name="nextMaintenanceRunTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```typescript
public readonly nextMaintenanceRunTime: string;
```

- *Type:* string

---

##### `nextSecurityMaintenanceRunTime`<sup>Required</sup> <a name="nextSecurityMaintenanceRunTime" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```typescript
public readonly nextSecurityMaintenanceRunTime: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```typescript
public readonly storageServerVersion: string;
```

- *Type:* string

---

##### `totalStorageSizeGb`<sup>Required</sup> <a name="totalStorageSizeGb" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```typescript
public readonly totalStorageSizeGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleOracleDatabaseCloudExadataInfrastructureProperties;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOracleDatabaseCloudExadataInfrastructure.DataGoogleOracleDatabaseCloudExadataInfrastructureProperties">DataGoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---



