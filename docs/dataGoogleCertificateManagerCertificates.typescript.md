# `dataGoogleCertificateManagerCertificates` Submodule <a name="`dataGoogleCertificateManagerCertificates` Submodule" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerCertificates <a name="DataGoogleCertificateManagerCertificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates google_certificate_manager_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates(scope: Construct, id: string, config?: DataGoogleCertificateManagerCertificatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig">DataGoogleCertificateManagerCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig">DataGoogleCertificateManagerCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCertificateManagerCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleCertificateManagerCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCertificateManagerCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCertificateManagerCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList">DataGoogleCertificateManagerCertificatesCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.certificates"></a>

```typescript
public readonly certificates: DataGoogleCertificateManagerCertificatesCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList">DataGoogleCertificateManagerCertificatesCertificatesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerCertificatesCertificates <a name="DataGoogleCertificateManagerCertificatesCertificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

const dataGoogleCertificateManagerCertificatesCertificates: dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates = { ... }
```


### DataGoogleCertificateManagerCertificatesCertificatesManaged <a name="DataGoogleCertificateManagerCertificatesCertificatesManaged" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

const dataGoogleCertificateManagerCertificatesCertificatesManaged: dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged = { ... }
```


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

const dataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo: dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo = { ... }
```


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

const dataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue: dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue = { ... }
```


### DataGoogleCertificateManagerCertificatesConfig <a name="DataGoogleCertificateManagerCertificatesConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

const dataGoogleCertificateManagerCertificatesConfig: dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerCertificatesCertificatesList <a name="DataGoogleCertificateManagerCertificatesCertificatesList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get"></a>

```typescript
public get(index: number): DataGoogleCertificateManagerCertificatesCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get"></a>

```typescript
public get(index: number): DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get"></a>

```typescript
public get(index: number): DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.authorizationAttemptInfo">authorizationAttemptInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.issuanceConfig">issuanceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.provisioningIssue">provisioningIssue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged">DataGoogleCertificateManagerCertificatesCertificatesManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationAttemptInfo`<sup>Required</sup> <a name="authorizationAttemptInfo" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.authorizationAttemptInfo"></a>

```typescript
public readonly authorizationAttemptInfo: DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList</a>

---

##### `dnsAuthorizations`<sup>Required</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.dnsAuthorizations"></a>

```typescript
public readonly dnsAuthorizations: string[];
```

- *Type:* string[]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `issuanceConfig`<sup>Required</sup> <a name="issuanceConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.issuanceConfig"></a>

```typescript
public readonly issuanceConfig: string;
```

- *Type:* string

---

##### `provisioningIssue`<sup>Required</sup> <a name="provisioningIssue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.provisioningIssue"></a>

```typescript
public readonly provisioningIssue: DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCertificateManagerCertificatesCertificatesManaged;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged">DataGoogleCertificateManagerCertificatesCertificatesManaged</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get"></a>

```typescript
public get(index: number): DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCertificateManagerCertificates } from '@cdktf/provider-google'

new dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList">DataGoogleCertificateManagerCertificatesCertificatesManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.sanDnsnames">sanDnsnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates">DataGoogleCertificateManagerCertificatesCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.managed"></a>

```typescript
public readonly managed: DataGoogleCertificateManagerCertificatesCertificatesManagedList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList">DataGoogleCertificateManagerCertificatesCertificatesManagedList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sanDnsnames`<sup>Required</sup> <a name="sanDnsnames" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.sanDnsnames"></a>

```typescript
public readonly sanDnsnames: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCertificateManagerCertificatesCertificates;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates">DataGoogleCertificateManagerCertificatesCertificates</a>

---



