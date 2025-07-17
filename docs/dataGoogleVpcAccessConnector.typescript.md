# `dataGoogleVpcAccessConnector` Submodule <a name="`dataGoogleVpcAccessConnector` Submodule" id="@cdktf/provider-google.dataGoogleVpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVpcAccessConnector <a name="DataGoogleVpcAccessConnector" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

new dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector(scope: Construct, id: string, config: DataGoogleVpcAccessConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig">DataGoogleVpcAccessConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig">DataGoogleVpcAccessConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVpcAccessConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isConstruct"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformElement"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformDataSource"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVpcAccessConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVpcAccessConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVpcAccessConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVpcAccessConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.connectedProjects">connectedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.maxThroughput">maxThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.minThroughput">minThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList">DataGoogleVpcAccessConnectorSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connectedProjects`<sup>Required</sup> <a name="connectedProjects" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.connectedProjects"></a>

```typescript
public readonly connectedProjects: string[];
```

- *Type:* string[]

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.maxThroughput"></a>

```typescript
public readonly maxThroughput: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `minThroughput`<sup>Required</sup> <a name="minThroughput" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.minThroughput"></a>

```typescript
public readonly minThroughput: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.subnet"></a>

```typescript
public readonly subnet: DataGoogleVpcAccessConnectorSubnetList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList">DataGoogleVpcAccessConnectorSubnetList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVpcAccessConnectorConfig <a name="DataGoogleVpcAccessConnectorConfig" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.Initializer"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

const dataGoogleVpcAccessConnectorConfig: dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.name">name</a></code> | <code>string</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#id DataGoogleVpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#project DataGoogleVpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.region">region</a></code> | <code>string</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#name DataGoogleVpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#id DataGoogleVpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#project DataGoogleVpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/vpc_access_connector#region DataGoogleVpcAccessConnector#region}

---

### DataGoogleVpcAccessConnectorSubnet <a name="DataGoogleVpcAccessConnectorSubnet" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnet.Initializer"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

const dataGoogleVpcAccessConnectorSubnet: dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnet = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVpcAccessConnectorSubnetList <a name="DataGoogleVpcAccessConnectorSubnetList" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

new dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.get"></a>

```typescript
public get(index: number): DataGoogleVpcAccessConnectorSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVpcAccessConnectorSubnetOutputReference <a name="DataGoogleVpcAccessConnectorSubnetOutputReference" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer"></a>

```typescript
import { dataGoogleVpcAccessConnector } from '@cdktf/provider-google'

new dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnet">DataGoogleVpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVpcAccessConnectorSubnet;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVpcAccessConnector.DataGoogleVpcAccessConnectorSubnet">DataGoogleVpcAccessConnectorSubnet</a>

---



