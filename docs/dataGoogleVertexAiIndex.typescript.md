# `dataGoogleVertexAiIndex` Submodule <a name="`dataGoogleVertexAiIndex` Submodule" id="@cdktf/provider-google.dataGoogleVertexAiIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiIndex <a name="DataGoogleVertexAiIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index google_vertex_ai_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndex(scope: Construct, id: string, config: DataGoogleVertexAiIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig">DataGoogleVertexAiIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig">DataGoogleVertexAiIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVertexAiIndex resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVertexAiIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVertexAiIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVertexAiIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.deployedIndexes">deployedIndexes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList">DataGoogleVertexAiIndexDeployedIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexStats">indexStats</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList">DataGoogleVertexAiIndexIndexStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexUpdateMethod">indexUpdateMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList">DataGoogleVertexAiIndexMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadataSchemaUri">metadataSchemaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deployedIndexes`<sup>Required</sup> <a name="deployedIndexes" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.deployedIndexes"></a>

```typescript
public readonly deployedIndexes: DataGoogleVertexAiIndexDeployedIndexesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList">DataGoogleVertexAiIndexDeployedIndexesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `indexStats`<sup>Required</sup> <a name="indexStats" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexStats"></a>

```typescript
public readonly indexStats: DataGoogleVertexAiIndexIndexStatsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList">DataGoogleVertexAiIndexIndexStatsList</a>

---

##### `indexUpdateMethod`<sup>Required</sup> <a name="indexUpdateMethod" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.indexUpdateMethod"></a>

```typescript
public readonly indexUpdateMethod: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadata"></a>

```typescript
public readonly metadata: DataGoogleVertexAiIndexMetadataList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList">DataGoogleVertexAiIndexMetadataList</a>

---

##### `metadataSchemaUri`<sup>Required</sup> <a name="metadataSchemaUri" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.metadataSchemaUri"></a>

```typescript
public readonly metadataSchemaUri: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiIndexConfig <a name="DataGoogleVertexAiIndexConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexConfig: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.name">name</a></code> | <code>string</code> | The resource name of the Index. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.region">region</a></code> | <code>string</code> | The region of the index. eg us-central1. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#id DataGoogleVertexAiIndex#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#project DataGoogleVertexAiIndex#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#name DataGoogleVertexAiIndex#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the index. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#region DataGoogleVertexAiIndex#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#id DataGoogleVertexAiIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/data-sources/vertex_ai_index#project DataGoogleVertexAiIndex#project}.

---

### DataGoogleVertexAiIndexDeployedIndexes <a name="DataGoogleVertexAiIndexDeployedIndexes" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexDeployedIndexes: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes = { ... }
```


### DataGoogleVertexAiIndexIndexStats <a name="DataGoogleVertexAiIndexIndexStats" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexIndexStats: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats = { ... }
```


### DataGoogleVertexAiIndexMetadata <a name="DataGoogleVertexAiIndexMetadata" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexMetadata: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata = { ... }
```


### DataGoogleVertexAiIndexMetadataConfig <a name="DataGoogleVertexAiIndexMetadataConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexMetadataConfig: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig = { ... }
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexMetadataConfigAlgorithmConfig: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig = { ... }
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig = { ... }
```


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

const dataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig: dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVertexAiIndexDeployedIndexesList <a name="DataGoogleVertexAiIndexDeployedIndexesList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexDeployedIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexDeployedIndexesOutputReference <a name="DataGoogleVertexAiIndexDeployedIndexesOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId">deployedIndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint">indexEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes">DataGoogleVertexAiIndexDeployedIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployedIndexId`<sup>Required</sup> <a name="deployedIndexId" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.deployedIndexId"></a>

```typescript
public readonly deployedIndexId: string;
```

- *Type:* string

---

##### `indexEndpoint`<sup>Required</sup> <a name="indexEndpoint" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.indexEndpoint"></a>

```typescript
public readonly indexEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexDeployedIndexes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexDeployedIndexes">DataGoogleVertexAiIndexDeployedIndexes</a>

---


### DataGoogleVertexAiIndexIndexStatsList <a name="DataGoogleVertexAiIndexIndexStatsList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexIndexStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexIndexStatsOutputReference <a name="DataGoogleVertexAiIndexIndexStatsOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount">shardsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount">vectorsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats">DataGoogleVertexAiIndexIndexStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shardsCount`<sup>Required</sup> <a name="shardsCount" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.shardsCount"></a>

```typescript
public readonly shardsCount: number;
```

- *Type:* number

---

##### `vectorsCount`<sup>Required</sup> <a name="vectorsCount" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.vectorsCount"></a>

```typescript
public readonly vectorsCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexIndexStats;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexIndexStats">DataGoogleVertexAiIndexIndexStats</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig">bruteForceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig">treeAhConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bruteForceConfig`<sup>Required</sup> <a name="bruteForceConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.bruteForceConfig"></a>

```typescript
public readonly bruteForceConfig: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigList</a>

---

##### `treeAhConfig`<sup>Required</sup> <a name="treeAhConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.treeAhConfig"></a>

```typescript
public readonly treeAhConfig: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount">leafNodeEmbeddingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent">leafNodesToSearchPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `leafNodeEmbeddingCount`<sup>Required</sup> <a name="leafNodeEmbeddingCount" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodeEmbeddingCount"></a>

```typescript
public readonly leafNodeEmbeddingCount: number;
```

- *Type:* number

---

##### `leafNodesToSearchPercent`<sup>Required</sup> <a name="leafNodesToSearchPercent" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.leafNodesToSearchPercent"></a>

```typescript
public readonly leafNodesToSearchPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig</a>

---


### DataGoogleVertexAiIndexMetadataConfigList <a name="DataGoogleVertexAiIndexMetadataConfigList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexMetadataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexMetadataConfigOutputReference <a name="DataGoogleVertexAiIndexMetadataConfigOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig">algorithmConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount">approximateNeighborsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions">dimensions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType">distanceMeasureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType">featureNormType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize">shardSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig">DataGoogleVertexAiIndexMetadataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmConfig`<sup>Required</sup> <a name="algorithmConfig" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.algorithmConfig"></a>

```typescript
public readonly algorithmConfig: DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList">DataGoogleVertexAiIndexMetadataConfigAlgorithmConfigList</a>

---

##### `approximateNeighborsCount`<sup>Required</sup> <a name="approximateNeighborsCount" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.approximateNeighborsCount"></a>

```typescript
public readonly approximateNeighborsCount: number;
```

- *Type:* number

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: number;
```

- *Type:* number

---

##### `distanceMeasureType`<sup>Required</sup> <a name="distanceMeasureType" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.distanceMeasureType"></a>

```typescript
public readonly distanceMeasureType: string;
```

- *Type:* string

---

##### `featureNormType`<sup>Required</sup> <a name="featureNormType" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.featureNormType"></a>

```typescript
public readonly featureNormType: string;
```

- *Type:* string

---

##### `shardSize`<sup>Required</sup> <a name="shardSize" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.shardSize"></a>

```typescript
public readonly shardSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexMetadataConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfig">DataGoogleVertexAiIndexMetadataConfig</a>

---


### DataGoogleVertexAiIndexMetadataList <a name="DataGoogleVertexAiIndexMetadataList" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get"></a>

```typescript
public get(index: number): DataGoogleVertexAiIndexMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVertexAiIndexMetadataOutputReference <a name="DataGoogleVertexAiIndexMetadataOutputReference" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer"></a>

```typescript
import { dataGoogleVertexAiIndex } from '@cdktf/provider-google'

new dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList">DataGoogleVertexAiIndexMetadataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri">contentsDeltaUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite">isCompleteOverwrite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata">DataGoogleVertexAiIndexMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.config"></a>

```typescript
public readonly config: DataGoogleVertexAiIndexMetadataConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataConfigList">DataGoogleVertexAiIndexMetadataConfigList</a>

---

##### `contentsDeltaUri`<sup>Required</sup> <a name="contentsDeltaUri" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.contentsDeltaUri"></a>

```typescript
public readonly contentsDeltaUri: string;
```

- *Type:* string

---

##### `isCompleteOverwrite`<sup>Required</sup> <a name="isCompleteOverwrite" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.isCompleteOverwrite"></a>

```typescript
public readonly isCompleteOverwrite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVertexAiIndexMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVertexAiIndex.DataGoogleVertexAiIndexMetadata">DataGoogleVertexAiIndexMetadata</a>

---



