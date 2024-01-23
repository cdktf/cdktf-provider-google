# `dataGoogleBeyondcorpAppConnector` Submodule <a name="`dataGoogleBeyondcorpAppConnector` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpAppConnector <a name="DataGoogleBeyondcorpAppConnector" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector google_beyondcorp_app_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

new dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector(scope: Construct, id: string, config: DataGoogleBeyondcorpAppConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig">DataGoogleBeyondcorpAppConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig">DataGoogleBeyondcorpAppConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBeyondcorpAppConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleBeyondcorpAppConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpAppConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpAppConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpAppConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.principalInfo">principalInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList">DataGoogleBeyondcorpAppConnectorPrincipalInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `principalInfo`<sup>Required</sup> <a name="principalInfo" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.principalInfo"></a>

```typescript
public readonly principalInfo: DataGoogleBeyondcorpAppConnectorPrincipalInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList">DataGoogleBeyondcorpAppConnectorPrincipalInfoList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpAppConnectorConfig <a name="DataGoogleBeyondcorpAppConnectorConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

const dataGoogleBeyondcorpAppConnectorConfig: dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.name">name</a></code> | <code>string</code> | ID of the AppConnector. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#id DataGoogleBeyondcorpAppConnector#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#project DataGoogleBeyondcorpAppConnector#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.region">region</a></code> | <code>string</code> | The region of the AppConnector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#name DataGoogleBeyondcorpAppConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#id DataGoogleBeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#project DataGoogleBeyondcorpAppConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/beyondcorp_app_connector#region DataGoogleBeyondcorpAppConnector#region}

---

### DataGoogleBeyondcorpAppConnectorPrincipalInfo <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfo" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

const dataGoogleBeyondcorpAppConnectorPrincipalInfo: dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo = { ... }
```


### DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

const dataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount: dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpAppConnectorPrincipalInfoList <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

new dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

new dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo">DataGoogleBeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpAppConnectorPrincipalInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfo">DataGoogleBeyondcorpAppConnectorPrincipalInfo</a>

---


### DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

new dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.get"></a>

```typescript
public get(index: number): DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference <a name="DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpAppConnector } from '@cdktf/provider-google'

new dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnector.DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">DataGoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---



