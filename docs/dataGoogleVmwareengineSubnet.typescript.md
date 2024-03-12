# `dataGoogleVmwareengineSubnet` Submodule <a name="`dataGoogleVmwareengineSubnet` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineSubnet <a name="DataGoogleVmwareengineSubnet" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/vmwareengine_subnet google_vmwareengine_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

new dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet(scope: Construct, id: string, config: DataGoogleVmwareengineSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig">DataGoogleVmwareengineSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig">DataGoogleVmwareengineSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/vmwareengine_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dhcpAddressRanges">dhcpAddressRanges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList">DataGoogleVmwareengineSubnetDhcpAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.standardConfig">standardConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dhcpAddressRanges`<sup>Required</sup> <a name="dhcpAddressRanges" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.dhcpAddressRanges"></a>

```typescript
public readonly dhcpAddressRanges: DataGoogleVmwareengineSubnetDhcpAddressRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList">DataGoogleVmwareengineSubnetDhcpAddressRangesList</a>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `standardConfig`<sup>Required</sup> <a name="standardConfig" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.standardConfig"></a>

```typescript
public readonly standardConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineSubnetConfig <a name="DataGoogleVmwareengineSubnetConfig" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

const dataGoogleVmwareengineSubnetConfig: dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.name">name</a></code> | <code>string</code> | The ID of the subnet. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new subnet in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/vmwareengine_subnet#id DataGoogleVmwareengineSubnet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the subnet.

For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/vmwareengine_subnet#name DataGoogleVmwareengineSubnet#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud to create a new subnet in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/vmwareengine_subnet#parent DataGoogleVmwareengineSubnet#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/vmwareengine_subnet#id DataGoogleVmwareengineSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineSubnetDhcpAddressRanges <a name="DataGoogleVmwareengineSubnetDhcpAddressRanges" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges.Initializer"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

const dataGoogleVmwareengineSubnetDhcpAddressRanges: dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineSubnetDhcpAddressRangesList <a name="DataGoogleVmwareengineSubnetDhcpAddressRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

new dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference <a name="DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineSubnet } from '@cdktf/provider-google'

new dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress">firstAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress">lastAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges">DataGoogleVmwareengineSubnetDhcpAddressRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstAddress`<sup>Required</sup> <a name="firstAddress" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress"></a>

```typescript
public readonly firstAddress: string;
```

- *Type:* string

---

##### `lastAddress`<sup>Required</sup> <a name="lastAddress" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress"></a>

```typescript
public readonly lastAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineSubnetDhcpAddressRanges;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineSubnet.DataGoogleVmwareengineSubnetDhcpAddressRanges">DataGoogleVmwareengineSubnetDhcpAddressRanges</a>

---



