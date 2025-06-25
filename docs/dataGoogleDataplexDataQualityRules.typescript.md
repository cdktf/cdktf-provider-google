# `dataGoogleDataplexDataQualityRules` Submodule <a name="`dataGoogleDataplexDataQualityRules` Submodule" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataplexDataQualityRules <a name="DataGoogleDataplexDataQualityRules" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules google_dataplex_data_quality_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules(scope: Construct, id: string, config: DataGoogleDataplexDataQualityRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig">DataGoogleDataplexDataQualityRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig">DataGoogleDataplexDataQualityRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataplexDataQualityRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleDataplexDataQualityRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataplexDataQualityRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataplexDataQualityRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataplexDataQualityRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList">DataGoogleDataplexDataQualityRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanIdInput">dataScanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanId">dataScanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.rules"></a>

```typescript
public readonly rules: DataGoogleDataplexDataQualityRulesRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList">DataGoogleDataplexDataQualityRulesRulesList</a>

---

##### `dataScanIdInput`<sup>Optional</sup> <a name="dataScanIdInput" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanIdInput"></a>

```typescript
public readonly dataScanIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `dataScanId`<sup>Required</sup> <a name="dataScanId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.dataScanId"></a>

```typescript
public readonly dataScanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataplexDataQualityRulesConfig <a name="DataGoogleDataplexDataQualityRulesConfig" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesConfig: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dataScanId">dataScanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#data_scan_id DataGoogleDataplexDataQualityRules#data_scan_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#id DataGoogleDataplexDataQualityRules#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#location DataGoogleDataplexDataQualityRules#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#project DataGoogleDataplexDataQualityRules#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataScanId`<sup>Required</sup> <a name="dataScanId" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.dataScanId"></a>

```typescript
public readonly dataScanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#data_scan_id DataGoogleDataplexDataQualityRules#data_scan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#id DataGoogleDataplexDataQualityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#location DataGoogleDataplexDataQualityRules#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/dataplex_data_quality_rules#project DataGoogleDataplexDataQualityRules#project}.

---

### DataGoogleDataplexDataQualityRulesRules <a name="DataGoogleDataplexDataQualityRulesRules" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRules: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesNonNullExpectation <a name="DataGoogleDataplexDataQualityRulesRulesNonNullExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesNonNullExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesRangeExpectation <a name="DataGoogleDataplexDataQualityRulesRulesRangeExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesRangeExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesRegexExpectation <a name="DataGoogleDataplexDataQualityRulesRulesRegexExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesRegexExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation <a name="DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesRowConditionExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesSetExpectation <a name="DataGoogleDataplexDataQualityRulesRulesSetExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesSetExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesSqlAssertion <a name="DataGoogleDataplexDataQualityRulesRulesSqlAssertion" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesSqlAssertion: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation <a name="DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation <a name="DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesTableConditionExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation = { ... }
```


### DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation <a name="DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

const dataGoogleDataplexDataQualityRulesRulesUniquenessExpectation: dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDataplexDataQualityRulesRulesList <a name="DataGoogleDataplexDataQualityRulesRulesList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation">DataGoogleDataplexDataQualityRulesRulesNonNullExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesNonNullExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectation">DataGoogleDataplexDataQualityRulesRulesNonNullExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.ignoreNull">ignoreNull</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.nonNullExpectation">nonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList">DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rangeExpectation">rangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesRangeExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.regexExpectation">regexExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList">DataGoogleDataplexDataQualityRulesRulesRegexExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rowConditionExpectation">rowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.setExpectation">setExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList">DataGoogleDataplexDataQualityRulesRulesSetExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.sqlAssertion">sqlAssertion</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList">DataGoogleDataplexDataQualityRulesRulesSqlAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.statisticRangeExpectation">statisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.suspended">suspended</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.tableConditionExpectation">tableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.uniquenessExpectation">uniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules">DataGoogleDataplexDataQualityRulesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `ignoreNull`<sup>Required</sup> <a name="ignoreNull" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.ignoreNull"></a>

```typescript
public readonly ignoreNull: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nonNullExpectation`<sup>Required</sup> <a name="nonNullExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.nonNullExpectation"></a>

```typescript
public readonly nonNullExpectation: DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList">DataGoogleDataplexDataQualityRulesRulesNonNullExpectationList</a>

---

##### `rangeExpectation`<sup>Required</sup> <a name="rangeExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rangeExpectation"></a>

```typescript
public readonly rangeExpectation: DataGoogleDataplexDataQualityRulesRulesRangeExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesRangeExpectationList</a>

---

##### `regexExpectation`<sup>Required</sup> <a name="regexExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.regexExpectation"></a>

```typescript
public readonly regexExpectation: DataGoogleDataplexDataQualityRulesRulesRegexExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList">DataGoogleDataplexDataQualityRulesRulesRegexExpectationList</a>

---

##### `rowConditionExpectation`<sup>Required</sup> <a name="rowConditionExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.rowConditionExpectation"></a>

```typescript
public readonly rowConditionExpectation: DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList</a>

---

##### `setExpectation`<sup>Required</sup> <a name="setExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.setExpectation"></a>

```typescript
public readonly setExpectation: DataGoogleDataplexDataQualityRulesRulesSetExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList">DataGoogleDataplexDataQualityRulesRulesSetExpectationList</a>

---

##### `sqlAssertion`<sup>Required</sup> <a name="sqlAssertion" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.sqlAssertion"></a>

```typescript
public readonly sqlAssertion: DataGoogleDataplexDataQualityRulesRulesSqlAssertionList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList">DataGoogleDataplexDataQualityRulesRulesSqlAssertionList</a>

---

##### `statisticRangeExpectation`<sup>Required</sup> <a name="statisticRangeExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.statisticRangeExpectation"></a>

```typescript
public readonly statisticRangeExpectation: DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList</a>

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.suspended"></a>

```typescript
public readonly suspended: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tableConditionExpectation`<sup>Required</sup> <a name="tableConditionExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.tableConditionExpectation"></a>

```typescript
public readonly tableConditionExpectation: DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `uniquenessExpectation`<sup>Required</sup> <a name="uniquenessExpectation" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.uniquenessExpectation"></a>

```typescript
public readonly uniquenessExpectation: DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRules;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRules">DataGoogleDataplexDataQualityRulesRules</a>

---


### DataGoogleDataplexDataQualityRulesRulesRangeExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesRangeExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMaxEnabled">strictMaxEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMinEnabled">strictMinEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation">DataGoogleDataplexDataQualityRulesRulesRangeExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `strictMaxEnabled`<sup>Required</sup> <a name="strictMaxEnabled" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```typescript
public readonly strictMaxEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `strictMinEnabled`<sup>Required</sup> <a name="strictMinEnabled" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```typescript
public readonly strictMinEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRangeExpectation">DataGoogleDataplexDataQualityRulesRulesRangeExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesRegexExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesRegexExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation">DataGoogleDataplexDataQualityRulesRulesRegexExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesRegexExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRegexExpectation">DataGoogleDataplexDataQualityRulesRulesRegexExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation">DataGoogleDataplexDataQualityRulesRulesRowConditionExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesSetExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesSetExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation">DataGoogleDataplexDataQualityRulesRulesSetExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesSetExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSetExpectation">DataGoogleDataplexDataQualityRulesRulesSetExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesSqlAssertionList <a name="DataGoogleDataplexDataQualityRulesRulesSqlAssertionList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.sqlStatement">sqlStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion">DataGoogleDataplexDataQualityRulesRulesSqlAssertion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlStatement`<sup>Required</sup> <a name="sqlStatement" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```typescript
public readonly sqlStatement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesSqlAssertion;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesSqlAssertion">DataGoogleDataplexDataQualityRulesRulesSqlAssertion</a>

---


### DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">strictMaxEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">strictMinEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `strictMaxEnabled`<sup>Required</sup> <a name="strictMaxEnabled" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```typescript
public readonly strictMaxEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `strictMinEnabled`<sup>Required</sup> <a name="strictMinEnabled" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```typescript
public readonly strictMinEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation">DataGoogleDataplexDataQualityRulesRulesStatisticRangeExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation">DataGoogleDataplexDataQualityRulesRulesTableConditionExpectation</a>

---


### DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList <a name="DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.get"></a>

```typescript
public get(index: number): DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference <a name="DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer"></a>

```typescript
import { dataGoogleDataplexDataQualityRules } from '@cdktf/provider-google'

new dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexDataQualityRules.DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation">DataGoogleDataplexDataQualityRulesRulesUniquenessExpectation</a>

---



